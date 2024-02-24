import React, { useEffect, useMemo, useState } from 'react'
import ReactMapGL, { Layer, Source } from "react-map-gl"
import { DEFAULT_LOCATION } from '../../lib/config'
import { Card } from '../ui/card'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
const OPENWEATHERMAP_TOKEN = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY

const Map = () => {
    // const searchParams = useSearchParams()
    const lat = 0
    const lon = 0

    const [defaultLat, defaultLon] = useMemo(() => {
        const latNumber = lat ? Number(lat) : Number(DEFAULT_LOCATION.coord.lat)
        const lonNumber = lon ? Number(lon) : Number(DEFAULT_LOCATION.coord.lon)
        return [latNumber, lonNumber]
    }, [lat, lon])

    const weatherLayer = {
        id: "weatherLayer",
        type: "raster",
        minzoom: 0,
        maxzoom: 15,
    }

    const [viewport, setViewport] = useState({
        latitude: lat ? Number(lat) : Number(defaultLat),
        longitude: lon ? Number(lon) : Number(defaultLon),
        zoom: 7,
        pitch: 60,
        bearing: -60,
    })

    useEffect(() => {
        setViewport((prevViewport) => ({
            ...prevViewport,
            latitude: lat ? Number(lat) : Number(defaultLat),
            longitude: lon ? Number(lon) : Number(defaultLon),
        }))
    }, [lat, lon, defaultLat, defaultLon])

    return (
        <Card className="order-11 col-span-2 h-[25rem] overflow-hidden overscroll-contain  p-0 md:p-0 xl:col-span-3">
            {/* <ReactMapGL
                reuseMaps
                {...viewport}
                attributionControl={false}
                mapboxAccessToken={MAPBOX_TOKEN}
                mapStyle={`mapbox://styles/mapbox/${"light"}-v11`}
                style={{
                    flex: "1",
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    top: "0",
                    left: "0",
                    zIndex: 0,
                }}
            >
                <Source
                    key={"TA2"}
                    id="weatherSource"
                    type="raster"
                    tiles={[
                        `https://maps.openweathermap.org/maps/2.0/weather/${"TA2"}/{z}/{x}/{y}?appid=${OPENWEATHERMAP_TOKEN}`,
                    ]}
                    tileSize={256}
                >
                    <Layer {...weatherLayer} />
                </Source>
            </ReactMapGL> */}
        </Card>
    )
}

export default Map