import React from 'react'

import { OTHER_LARGE_CITIES } from '../../lib/config'

const OtherLargeCities = () => {

    const handleSelect = () => {

    }

    return (
        <div className="relative order-last hidden h-[25rem] w-full flex-col justify-between lg:block">
            <h3 className="py-3 font-semibold">Other large cities</h3>
            <div className="flex flex-col space-y-3.5">
                {OTHER_LARGE_CITIES.map((item) => (
                    <div
                        key={item.city}
                        scroll={false}
                        onClick={handleSelect}
                        className="rounded-lg border bg-card px-6 py-4 hover:cursor-pointer text-card-foreground shadow-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                        {item.city}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OtherLargeCities