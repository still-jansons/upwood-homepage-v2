'use server'

import Airtable from 'airtable'
import crypto from 'crypto'

const base = new Airtable({
    apiKey: process.env.AIRTABLE_API_KEY
}).base(process.env.AIRTABLE_BASE_ID!)

export async function submitInvitation(
    prevState: { message: string, status: string },
    formData : FormData
): Promise<{ message: string, status: string }> {
    const data = {
        email         : formData.get('email'),
        referralCode  : formData.get('referralCode'),
        agreementCheck: formData.get('agreementCheck'),
    }
    
    // Check if the email is already in the waitlist
    try {
        await new Promise((resolve, reject) =>
            base(process.env.AIRTABLE_TABLE_INVITATIONS!).select({
                view: 'Grid view',
                filterByFormula: `{fldyj5YvgFicxxQSb} = '${data.email}'`
            }).firstPage((err, records) => {
                if (err) {
                    reject('Something went wrong. Please try again later.')
                    return
                }
                
                if (records && records.length > 0) {
                    reject( 'Email is already registered!')
                    return
                }
                
                resolve(true)
            })
        )
    } catch (error: any) {
        return {
            message: error,
            status : 'error'
        }
    }
    
    let referral_user_id: unknown = null

    if (data.referralCode) {
        // Check if the referral code exists
        try {
            const response = await new Promise((resolve, reject) => {
                base(process.env.AIRTABLE_TABLE_INVITATIONS!).select({
                    view           : 'Grid view',
                    filterByFormula: `{fldt2zgfa79qeyLR9} = '${data.referralCode}'`
                }).firstPage((err, records) => {
                    if (err) {
                        reject('Something went wrong. Please try again later.')
                        return
                    }
                    
                    if (!records || records.length === 0) {
                        reject('Referral code not found.')
                        return
                    }
                    
                    resolve(records ? records[0].id : null)
                })
            })
            
            referral_user_id = response
        } catch (error: any) {
            return {
                message: error,
                status : 'error'
            }
        }
    }
    
    // Insert the new record
    try {
        await new Promise((resolve, reject) => {
            base(process.env.AIRTABLE_TABLE_INVITATIONS!).create([
                {
                    // @ts-ignore
                    fields: {
                        'fldyj5YvgFicxxQSb': data.email,
                        'fldejhv6PB2seeOcE': 'Todo',
                        'fldt2zgfa79qeyLR9': crypto.randomBytes(4).toString('hex').toUpperCase().match(/.{1,4}/g)!.join('-'),
                        'flduk1rUpzjaf6yBB': referral_user_id ? [referral_user_id] : null,
                    }
                }
            
            ], function (err: any) {
                if (err) {
                    reject('Something went wrong. Please try again later.')
                    return
                }
                
                resolve(true)
            })
        })
        
        return {
            message: 'Invitation sent successfully',
            status : 'success'
        }
    } catch (error: any) {
        return {
            message: error,
            status : 'error'
        }
    }
}
