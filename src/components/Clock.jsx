import React, { useEffect, useState } from 'react';

const Clock = ({ initial, timezone }) => {
    const [time, setTime] = useState(calculateLocalTime(initial, timezone))

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(calculateLocalTime(new Date(), timezone))
        }, 1000)

        return () => clearInterval(timer)
    }, [timezone])

    function calculateLocalTime(initialTime, offsetSeconds) {
        // Calculate the local time by adjusting the initial time with the offset
        const localTime = new Date(initialTime.getTime() + offsetSeconds * 1000)
        return localTime
    }

    return (
        <div className="tabular-nums">
            {time.toLocaleTimeString("en-US", {
                timeZone: "UTC",
                hour12: true,
                hour: "numeric",
                minute: "2-digit",
                second: "2-digit",
            })}
        </div>
    )
}

export default Clock