export const CatLocationMap = ({ desc, latitude, longitude }) => {
    return (
        <iframe
            src={`https://embed.waze.com/iframe?zoom=12&lat=${latitude}&lon=${longitude}&desc=${desc}&pin=1`}
            width='300'
            height='400'
        ></iframe>
    )
}
