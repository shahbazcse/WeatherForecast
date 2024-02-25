import { createContext, useEffect, useReducer } from "react";
import { DEFAULT_LOCATION } from "../lib/config";
import { getHourlyData } from "../services/getHourlyData";
import { getTenDayForecast } from "../services/getTenDayForecast";
import { getAirPollutionData } from "../services/getAirPollutionData";
import { getUVData } from "../services/getUVData";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const reducerFn = (state, action) => {
        switch (action.type) {
            case "UPDATE_LOCATION":
                return {
                    ...state,
                    hourly_data: action.payload.hourly_data,
                    three_hour_forecast: action.payload.ten_day_forecast,
                    air_pollution: action.payload.air_pollution,
                    uv_index: action.payload.uv_index,
                }
            default:
                return state;
        }
    };

    const initialState = {
        hourly_data: null,
        three_hour_forecast: null,
        air_pollution: null,
        uv_index: null,
    };

    const [state, dispatch] = useReducer(reducerFn, initialState);

    const updateLocation = async (lat, lon) => {
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

        dispatch({ type: "UPDATE_LOCATION", payload: { hourly_data, ten_day_forecast, air_pollution, uv_index } });

        const appTitle = document.getElementById("app_title");
        appTitle.innerHTML = `${hourly_data.name} - Weather Forecast`;

    }

    useEffect(() => {
        if (!state.hourly_data && !state.ten_day_forecast && !state.air_pollution && !state.uv_index) {
            const { lat, lon } = DEFAULT_LOCATION.coord;
            updateLocation(lat, lon);
        }
    }, []);

    console.log(state);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};
