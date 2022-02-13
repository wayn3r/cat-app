import { memo } from 'react'

export const LocationMap = memo(function LocationMap({ latitude, longitude }) {
    return (
        <iframe
            src={`https://embed.waze.com/iframe?zoom=12&lat=${latitude}&lon=${longitude}&pin=1`}
            width='600'
            height='600'
        ></iframe>
    )
})
