import {
    CommandDialog,
    CommandGroup,
    CommandItem,
    CommandList,
} from "../components/ui/command"
import { useContext, useState } from "react"

import { OTHER_LARGE_CITIES as popular_cities } from "../lib/config"
import { getHourlyData } from "../services/getHourlyData"
import { getTenDayForecast } from "../services/getTenDayForecast"
import { getAirPollutionData } from "../services/getAirPollutionData"
import { getUVData } from "../services/getUVData"
import { AppContext } from ".."
import { Button } from "../components/ui/button"
import { Search } from "lucide-react"

export function CommandDialogDemo() {
    const [open, setOpen] = useState(false)

    const { dispatch } = useContext(AppContext);

    const handleSelect = async (lat, lon) => {
        const HourlyDataRequest = await getHourlyData(
            lat,
            lon,
        )
        const TenDayForecastRequest = await getTenDayForecast(
            lat,
            lon,
        )
        const AirDataRequest = await getAirPollutionData(
            lat,
            lon,
        )
        const UvIndexRequest = await getUVData(lat, lon)

        const [hourly_data, ten_day_forecast, air_pollution, uv_index] =
            await Promise.all([
                HourlyDataRequest,
                TenDayForecastRequest,
                AirDataRequest,
                UvIndexRequest,
            ]);

        dispatch({ type: "UPDATE_LOCATION", payload: { hourly_data, ten_day_forecast, air_pollution, uv_index } })

        const appTitle = document.getElementById("app_title");
        appTitle.innerHTML = `${hourly_data.name} - Weather Forecast`;

        setOpen(false)
    }

    return (
        <div className="">
            <Button
                variant={"outline"}
                size={"lg"}
                onClick={() => setOpen(true)}
                className="h-10 w-full px-8 bg-[#FFFFFF]"
            >
                <p className="flex items-center justify-between gap-6 text-sm">
                    Search city...
                    <Search height={"1.2rem"} width={"1.2rem"} />
                </p>
            </Button>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandList>
                    <CommandGroup heading="Popular Cities">
                        {popular_cities.map((loc) => (
                            <CommandItem
                                key={loc.city}
                                onSelect={() => handleSelect(loc.coord.lat, loc.coord.lon)}
                            >
                                {loc.city}, {loc.country}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </div>
    )
}