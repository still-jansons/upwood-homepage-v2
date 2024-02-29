export default function TextElement(
    {
        title,
        body,
    }: {
        title: string,
        body: string,
    }
) {
    return (
        <div className='flex flex-col gap-4 text-white'>
            <h2 className='text-h-md font-bold'>{title}</h2>
            <p className='text-b-lg'>{body}</p>
        </div>
    )
}
