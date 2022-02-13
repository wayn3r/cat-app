import { memo } from 'react'

export const LocationMap = memo(function LocationMap({ className, latitude, longitude }) {
    return (
        <iframe
            className={className}
            src={`https://embed.waze.com/iframe?zoom=12&lat=${latitude}&lon=${longitude}&pin=1`}
            width='100%'
            style={{
                minHeight: '20rem',
            }}
            height='auto'
        ></iframe>
    )
})
