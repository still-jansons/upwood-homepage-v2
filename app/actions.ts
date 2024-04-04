"use server";

import Airtable from "airtable";
import crypto from "crypto";

const base = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID!);

export async function submitInvitation(
  prevState: { message: string; status: string },
  formData: FormData,
): Promise<{ message: string; status: string }> {
  const data = {
    email: formData.get("email"),
    referralCode: formData.get("referralCode"),
    agreementCheck: formData.get("agreementCheck"),
  };

  // Check if the email is already in the waitlist
  try {
    await new Promise((resolve, reject) =>
      base(process.env.AIRTABLE_TABLE_INVITATIONS!)
        .select({
          view: "Grid view",
          filterByFormula: `{fldyj5YvgFicxxQSb} = '${data.email}'`,
        })
        .firstPage((err, records) => {
          if (err) {
            reject("Something went wrong. Please try again later.");
            return;
          }

          if (records && records.length > 0) {
            reject("Email is already registered!");
            return;
          }

          resolve(true);
        }),
    );
  } catch (error: any) {
    return {
      message: error,
      status: "error",
    };
  }

  let referral_user_id: unknown = null;

  if (data.referralCode) {
    // Check if the referral code exists
    try {
      const response = await new Promise((resolve, reject) => {
        base(process.env.AIRTABLE_TABLE_INVITATIONS!)
          .select({
            view: "Grid view",
            filterByFormula: `{fldt2zgfa79qeyLR9} = '${data.referralCode}'`,
          })
          .firstPage((err, records) => {
            if (err) {
              reject("Something went wrong. Please try again later.");
              return;
            }

            if (!records || records.length === 0) {
              reject("Referral code not found.");
              return;
            }

            resolve(records ? records[0].id : null);
          });
      });

      referral_user_id = response;
    } catch (error: any) {
      return {
        message: error,
        status: "error",
      };
    }
  }

  // Insert the new record
  try {
    await new Promise((resolve, reject) => {
      base(process.env.AIRTABLE_TABLE_INVITATIONS!).create(
        [
          {
            // @ts-ignore
            fields: {
              fldyj5YvgFicxxQSb: data.email,
              fldejhv6PB2seeOcE: "Todo",
              fldt2zgfa79qeyLR9: crypto
                .randomBytes(4)
                .toString("hex")
                .toUpperCase()
                .match(/.{1,4}/g)!
                .join("-"),
              flduk1rUpzjaf6yBB: referral_user_id ? [referral_user_id] : null,
            },
          },
        ],
        function (err: any) {
          if (err) {
            reject("Something went wrong. Please try again later.");
            return;
          }

          resolve(true);
        },
      );
    });

    return {
      message: "Invitation sent successfully",
      status: "success",
    };
  } catch (error: any) {
    return {
      message: error,
      status: "error",
    };
  }
}

export async function submitNewsletter(
  prevState: { message: string; status: string },
  formData: FormData,
): Promise<{ message: string; status: string }> {
  const data = {
    email: formData.get("email"),
    agreementCheck: formData.get("agreementCheck"),
  };

  // Check if the email is already in the newsletter
  try {
    await new Promise((resolve, reject) =>
      base(process.env.AIRTABLE_TABLE_NEWSLETTER!)
        .select({
          view: "Grid view",
          filterByFormula: `{fldg00CuaSL0pRAfP} = '${data.email}'`,
        })
        .firstPage((err, records) => {
          if (err) {
            reject("Something went wrong. Please try again later.");
            return;
          }

          if (records && records.length > 0) {
            reject("Email is already registered!");
            return;
          }

          resolve(true);
        }),
    );
  } catch (error: any) {
    return {
      message: error,
      status: "error",
    };
  }

  // Insert the new record
  try {
    await new Promise((resolve, reject) => {
      base(process.env.AIRTABLE_TABLE_NEWSLETTER!).create(
        [
          {
            // @ts-ignore
            fields: {
              fldg00CuaSL0pRAfP: data.email,
              flda6TxdSX94YF0wA: "Todo",
            },
          },
        ],
        function (err: any) {
          if (err) {
            reject("Something went wrong. Please try again later.");
            return;
          }

          resolve(true);
        },
      );
    });

    return {
      message: "Newsletter subscription successful",
      status: "success",
    };
  } catch (error: any) {
    return {
      message: error,
      status: "error",
    };
  }
}

export async function submitContact(
  prevState: { message: string; status: string },
  formData: FormData,
): Promise<{ message: string; status: string }> {
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
    agreementCheck: formData.get("agreementCheck"),
  };

  const columns = {
    name: "fldmyIRi1Qs5Wn33B",
    email: "fldHtZucGAPgiuLfZ",
    message: "fld2NtrDbNfQxv259",
    status: "fld8iymme1LtYOoV7",
  };

  // Check if the email is already in the newsletter
  try {
    await new Promise((resolve, reject) =>
      base(process.env.AIRTABLE_TABLE_CONTACTS!)
        .select({
          view: "Grid view",
          filterByFormula: `{${columns.email}} = '${data.email}'`,
        })
        .firstPage((err, records) => {
          if (err) {
            reject("Something went wrong. Please try again later.");
            return;
          }

          if (records && records.length > 0) {
            reject("Email is already registered!");
            return;
          }

          resolve(true);
        }),
    );
  } catch (error: any) {
    return {
      message: error,
      status: "error",
    };
  }

  // Insert the new record
  try {
    await new Promise((resolve, reject) => {
      base(process.env.AIRTABLE_TABLE_CONTACTS!).create(
        [
          {
            // @ts-ignore
            fields: {
              [columns.name]: data.name,
              [columns.email]: data.email,
              [columns.message]: data.message,
              [columns.status]: "To do",
            },
          },
        ],
        function (err: any) {
          if (err) {
            reject("Something went wrong. Please try again later.");
            return;
          }

          resolve(true);
        },
      );
    });

    return {
      message: "Message sent successfully. We will get back to you soon!",
      status: "success",
    };
  } catch (error: any) {
    return {
      message: error,
      status: "error",
    };
  }
}
