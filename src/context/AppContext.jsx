import { createContext, useEffect, useReducer } from "react";
import { DEFAULT_LOCATION } from "../lib/config";
import { getHourlyData } from "../services/getHourlyData";
import { getTenDayForecast } from "../services/getTenDayForecast";
import { getAirPollutionData } from "../services/getAirPollutionData";
import { getUVData } from "../services/getUVData";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const { lat, lon } = DEFAULT_LOCATION.coord;

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

    const setDefaultLocation = async () => {
        // const HourlyDataRequest = await getHourlyData(
        //     lat,
        //     lon,
        // )
        // const TenDayForecastRequest = await getTenDayForecast(
        //     lat,
        //     lon,
        // )
        // const AirDataRequest = await getAirPollutionData(
        //     lat,
        //     lon,
        // )
        // const UvIndexRequest = await getUVData(lat, lon)

        // const [hourly_data, three_hour_forecast, air_pollution, uv_index] =
        //     await Promise.all([
        //         HourlyDataRequest,
        //         TenDayForecastRequest,
        //         AirDataRequest,
        //         UvIndexRequest,
        //     ]);

        const { hourly_data, ten_day_forecast, air_pollution, uv_index } = {
            "hourly_data": {
                "coord": {
                    "lon": 12.5683,
                    "lat": 55.6761
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02d"
                    }
                ],
                "base": "stations",
                "main": {
                    "temp": 6.38,
                    "feels_like": 3,
                    "temp_min": 5.5,
                    "temp_max": 7.41,
                    "pressure": 1006,
                    "humidity": 73
                },
                "visibility": 10000,
                "wind": {
                    "speed": 5.14,
                    "deg": 140
                },
                "clouds": {
                    "all": 20
                },
                "dt": 1708861683,
                "sys": {
                    "type": 2,
                    "id": 2035645,
                    "country": "DK",
                    "sunrise": 1708841551,
                    "sunset": 1708878817
                },
                "timezone": 3600,
                "id": 6949461,
                "name": "Inner City",
                "cod": 200
            },
            "ten_day_forecast": {
                "cod": "200",
                "message": 0,
                "cnt": 40,
                "list": [
                    {
                        "dt": 1708862400,
                        "main": {
                            "temp": 6.38,
                            "feels_like": 2.62,
                            "temp_min": 4.64,
                            "temp_max": 6.38,
                            "pressure": 1006,
                            "sea_level": 1006,
                            "grnd_level": 1003,
                            "humidity": 73,
                            "temp_kf": 1.74
                        },
                        "weather": [
                            {
                                "id": 801,
                                "main": "Clouds",
                                "description": "few clouds",
                                "icon": "02d"
                            }
                        ],
                        "clouds": {
                            "all": 20
                        },
                        "wind": {
                            "speed": 6.07,
                            "deg": 161,
                            "gust": 10.7
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2024-02-25 12:00:00"
                    },
                    {
                        "dt": 1708873200,
                        "main": {
                            "temp": 5.9,
                            "feels_like": 2.29,
                            "temp_min": 4.95,
                            "temp_max": 5.9,
                            "pressure": 1005,
                            "sea_level": 1005,
                            "grnd_level": 1002,
                            "humidity": 76,
                            "temp_kf": 0.95
                        },
                        "weather": [
                            {
                                "id": 802,
                                "main": "Clouds",
                                "description": "scattered clouds",
                                "icon": "03d"
                            }
                        ],
                        "clouds": {
                            "all": 47
                        },
                        "wind": {
                            "speed": 5.39,
                            "deg": 154,
                            "gust": 9.61
                        },
                        "visibility": 10000,
                        "pop": 0.08,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2024-02-25 15:00:00"
                    },
                    {
                        "dt": 1708884000,
                        "main": {
                            "temp": 4.83,
                            "feels_like": 1.76,
                            "temp_min": 4.06,
                            "temp_max": 4.83,
                            "pressure": 1005,
                            "sea_level": 1005,
                            "grnd_level": 1002,
                            "humidity": 87,
                            "temp_kf": 0.77
                        },
                        "weather": [
                            {
                                "id": 500,
                                "main": "Rain",
                                "description": "light rain",
                                "icon": "10n"
                            }
                        ],
                        "clouds": {
                            "all": 73
                        },
                        "wind": {
                            "speed": 3.81,
                            "deg": 181,
                            "gust": 7.14
                        },
                        "visibility": 10000,
                        "pop": 0.87,
                        "rain": {
                            "3h": 2.24
                        },
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2024-02-25 18:00:00"
                    },
                    {
                        "dt": 1708894800,
                        "main": {
                            "temp": 4.22,
                            "feels_like": 1.81,
                            "temp_min": 4.22,
                            "temp_max": 4.22,
                            "pressure": 1004,
                            "sea_level": 1004,
                            "grnd_level": 1003,
                            "humidity": 91,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 2.69,
                            "deg": 188,
                            "gust": 4.64
                        },
                        "visibility": 10000,
                        "pop": 0.4,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2024-02-25 21:00:00"
                    },
                    {
                        "dt": 1708905600,
                        "main": {
                            "temp": 4.1,
                            "feels_like": 1.63,
                            "temp_min": 4.1,
                            "temp_max": 4.1,
                            "pressure": 1005,
                            "sea_level": 1005,
                            "grnd_level": 1003,
                            "humidity": 89,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 97
                        },
                        "wind": {
                            "speed": 2.74,
                            "deg": 191,
                            "gust": 4.09
                        },
                        "visibility": 10000,
                        "pop": 0.28,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2024-02-26 00:00:00"
                    },
                    {
                        "dt": 1708916400,
                        "main": {
                            "temp": 4.17,
                            "feels_like": 1.62,
                            "temp_min": 4.17,
                            "temp_max": 4.17,
                            "pressure": 1005,
                            "sea_level": 1005,
                            "grnd_level": 1004,
                            "humidity": 88,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 2.86,
                            "deg": 181,
                            "gust": 4.46
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2024-02-26 03:00:00"
                    },
                    {
                        "dt": 1708927200,
                        "main": {
                            "temp": 3.6,
                            "feels_like": 1.57,
                            "temp_min": 3.6,
                            "temp_max": 3.6,
                            "pressure": 1007,
                            "sea_level": 1007,
                            "grnd_level": 1006,
                            "humidity": 90,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 500,
                                "main": "Rain",
                                "description": "light rain",
                                "icon": "10n"
                            }
                        ],
                        "clouds": {
                            "all": 98
                        },
                        "wind": {
                            "speed": 2.16,
                            "deg": 261,
                            "gust": 3.09
                        },
                        "visibility": 10000,
                        "pop": 0.2,
                        "rain": {
                            "3h": 0.12
                        },
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2024-02-26 06:00:00"
                    },
                    {
                        "dt": 1708938000,
                        "main": {
                            "temp": 4.15,
                            "feels_like": 2.81,
                            "temp_min": 4.15,
                            "temp_max": 4.15,
                            "pressure": 1009,
                            "sea_level": 1009,
                            "grnd_level": 1008,
                            "humidity": 77,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 802,
                                "main": "Clouds",
                                "description": "scattered clouds",
                                "icon": "03d"
                            }
                        ],
                        "clouds": {
                            "all": 50
                        },
                        "wind": {
                            "speed": 1.63,
                            "deg": 276,
                            "gust": 1.99
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2024-02-26 09:00:00"
                    },
                    {
                        "dt": 1708948800,
                        "main": {
                            "temp": 5.55,
                            "feels_like": 5.55,
                            "temp_min": 5.55,
                            "temp_max": 5.55,
                            "pressure": 1010,
                            "sea_level": 1010,
                            "grnd_level": 1009,
                            "humidity": 69,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 803,
                                "main": "Clouds",
                                "description": "broken clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 65
                        },
                        "wind": {
                            "speed": 0.05,
                            "deg": 295,
                            "gust": 0.71
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2024-02-26 12:00:00"
                    },
                    {
                        "dt": 1708959600,
                        "main": {
                            "temp": 5.75,
                            "feels_like": 5.75,
                            "temp_min": 5.75,
                            "temp_max": 5.75,
                            "pressure": 1012,
                            "sea_level": 1012,
                            "grnd_level": 1010,
                            "humidity": 69,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 98
                        },
                        "wind": {
                            "speed": 0.48,
                            "deg": 132,
                            "gust": 0.73
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2024-02-26 15:00:00"
                    },
                    {
                        "dt": 1708970400,
                        "main": {
                            "temp": 4.95,
                            "feels_like": 3.7,
                            "temp_min": 4.95,
                            "temp_max": 4.95,
                            "pressure": 1014,
                            "sea_level": 1014,
                            "grnd_level": 1013,
                            "humidity": 73,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 99
                        },
                        "wind": {
                            "speed": 1.65,
                            "deg": 12,
                            "gust": 1.65
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2024-02-26 18:00:00"
                    },
                    {
                        "dt": 1708981200,
                        "main": {
                            "temp": 4.01,
                            "feels_like": 2.08,
                            "temp_min": 4.01,
                            "temp_max": 4.01,
                            "pressure": 1016,
                            "sea_level": 1016,
                            "grnd_level": 1015,
                            "humidity": 80,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 2.13,
                            "deg": 31,
                            "gust": 2.73
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2024-02-26 21:00:00"
                    },
                    {
                        "dt": 1708992000,
                        "main": {
                            "temp": 3.41,
                            "feels_like": 1.03,
                            "temp_min": 3.41,
                            "temp_max": 3.41,
                            "pressure": 1017,
                            "sea_level": 1017,
                            "grnd_level": 1016,
                            "humidity": 83,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 803,
                                "main": "Clouds",
                                "description": "broken clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 73
                        },
                        "wind": {
                            "speed": 2.49,
                            "deg": 11,
                            "gust": 2.83
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2024-02-27 00:00:00"
                    },
                    {
                        "dt": 1709002800,
                        "main": {
                            "temp": 2.98,
                            "feels_like": 0.64,
                            "temp_min": 2.98,
                            "temp_max": 2.98,
                            "pressure": 1018,
                            "sea_level": 1018,
                            "grnd_level": 1016,
                            "humidity": 85,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01n"
                            }
                        ],
                        "clouds": {
                            "all": 10
                        },
                        "wind": {
                            "speed": 2.36,
                            "deg": 27,
                            "gust": 2.38
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2024-02-27 03:00:00"
                    },
                    {
                        "dt": 1709013600,
                        "main": {
                            "temp": 2.47,
                            "feels_like": -0.08,
                            "temp_min": 2.47,
                            "temp_max": 2.47,
                            "pressure": 1018,
                            "sea_level": 1018,
                            "grnd_level": 1017,
                            "humidity": 84,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 801,
                                "main": "Clouds",
                                "description": "few clouds",
                                "icon": "02n"
                            }
                        ],
                        "clouds": {
                            "all": 11
                        },
                        "wind": {
                            "speed": 2.48,
                            "deg": 37,
                            "gust": 2.79
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2024-02-27 06:00:00"
                    },
                    {
                        "dt": 1709024400,
                        "main": {
                            "temp": 3.76,
                            "feels_like": 1.79,
                            "temp_min": 3.76,
                            "temp_max": 3.76,
                            "pressure": 1019,
                            "sea_level": 1019,
                            "grnd_level": 1018,
                            "humidity": 76,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01d"
                            }
                        ],
                        "clouds": {
                            "all": 4
                        },
                        "wind": {
                            "speed": 2.13,
                            "deg": 39,
                            "gust": 2.69
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2024-02-27 09:00:00"
                    },
                    {
                        "dt": 1709035200,
                        "main": {
                            "temp": 5.48,
                            "feels_like": 4.25,
                            "temp_min": 5.48,
                            "temp_max": 5.48,
                            "pressure": 1018,
                            "sea_level": 1018,
                            "grnd_level": 1017,
                            "humidity": 66,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01d"
                            }
                        ],
                        "clouds": {
                            "all": 2
                        },
                        "wind": {
                            "speed": 1.7,
                            "deg": 353,
                            "gust": 2.01
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2024-02-27 12:00:00"
                    },
                    {
                        "dt": 1709046000,
                        "main": {
                            "temp": 5.87,
                            "feels_like": 4.28,
                            "temp_min": 5.87,
                            "temp_max": 5.87,
                            "pressure": 1017,
                            "sea_level": 1017,
                            "grnd_level": 1016,
                            "humidity": 65,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01d"
                            }
                        ],
                        "clouds": {
                            "all": 1
                        },
                        "wind": {
                            "speed": 2.1,
                            "deg": 350,
                            "gust": 2.33
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2024-02-27 15:00:00"
                    },
                    {
                        "dt": 1709056800,
                        "main": {
                            "temp": 4.11,
                            "feels_like": 1.93,
                            "temp_min": 4.11,
                            "temp_max": 4.11,
                            "pressure": 1018,
                            "sea_level": 1018,
                            "grnd_level": 1016,
                            "humidity": 77,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01n"
                            }
                        ],
                        "clouds": {
                            "all": 2
                        },
                        "wind": {
                            "speed": 2.41,
                            "deg": 331,
                            "gust": 2.79
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2024-02-27 18:00:00"
                    },
                    {
                        "dt": 1709067600,
                        "main": {
                            "temp": 2.95,
                            "feels_like": 1.13,
                            "temp_min": 2.95,
                            "temp_max": 2.95,
                            "pressure": 1018,
                            "sea_level": 1018,
                            "grnd_level": 1016,
                            "humidity": 81,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01n"
                            }
                        ],
                        "clouds": {
                            "all": 1
                        },
                        "wind": {
                            "speed": 1.87,
                            "deg": 310,
                            "gust": 2.02
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2024-02-27 21:00:00"
                    },
                    {
                        "dt": 1709078400,
                        "main": {
                            "temp": 2.32,
                            "feels_like": -0.15,
                            "temp_min": 2.32,
                            "temp_max": 2.32,
                            "pressure": 1017,
                            "sea_level": 1017,
                            "grnd_level": 1016,
                            "humidity": 83,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 801,
                                "main": "Clouds",
                                "description": "few clouds",
                                "icon": "02n"
                            }
                        ],
                        "clouds": {
                            "all": 14
                        },
                        "wind": {
                            "speed": 2.37,
                            "deg": 271,
                            "gust": 3.07
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2024-02-28 00:00:00"
                    },
                    {
                        "dt": 1709089200,
                        "main": {
                            "temp": 1.95,
                            "feels_like": -0.86,
                            "temp_min": 1.95,
                            "temp_max": 1.95,
                            "pressure": 1017,
                            "sea_level": 1017,
                            "grnd_level": 1016,
                            "humidity": 83,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 803,
                                "main": "Clouds",
                                "description": "broken clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 71
                        },
                        "wind": {
                            "speed": 2.66,
                            "deg": 249,
                            "gust": 4.35
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2024-02-28 03:00:00"
                    },
                    {
                        "dt": 1709100000,
                        "main": {
                            "temp": 1.96,
                            "feels_like": -1.56,
                            "temp_min": 1.96,
                            "temp_max": 1.96,
                            "pressure": 1017,
                            "sea_level": 1017,
                            "grnd_level": 1016,
                            "humidity": 87,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 803,
                                "main": "Clouds",
                                "description": "broken clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 84
                        },
                        "wind": {
                            "speed": 3.54,
                            "deg": 234,
                            "gust": 7.17
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2024-02-28 06:00:00"
                    },
                    {
                        "dt": 1709110800,
                        "main": {
                            "temp": 3.96,
                            "feels_like": 0.05,
                            "temp_min": 3.96,
                            "temp_max": 3.96,
                            "pressure": 1018,
                            "sea_level": 1018,
                            "grnd_level": 1017,
                            "humidity": 83,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 93
                        },
                        "wind": {
                            "speed": 4.98,
                            "deg": 237,
                            "gust": 9.7
                        },
                        "visibility": 10000,
                        "pop": 0.02,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2024-02-28 09:00:00"
                    },
                    {
                        "dt": 1709121600,
                        "main": {
                            "temp": 6.13,
                            "feels_like": 2.45,
                            "temp_min": 6.13,
                            "temp_max": 6.13,
                            "pressure": 1018,
                            "sea_level": 1018,
                            "grnd_level": 1017,
                            "humidity": 76,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 804,
                                "main": "Clouds",
                                "description": "overcast clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 95
                        },
                        "wind": {
                            "speed": 5.7,
                            "deg": 250,
                            "gust": 8.93
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2024-02-28 12:00:00"
                    },
                    {
                        "dt": 1709132400,
                        "main": {
                            "temp": 6.91,
                            "feels_like": 3.63,
                            "temp_min": 6.91,
                            "temp_max": 6.91,
                            "pressure": 1020,
                            "sea_level": 1020,
                            "grnd_level": 1018,
                            "humidity": 69,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01d"
                            }
                        ],
                        "clouds": {
                            "all": 7
                        },
                        "wind": {
                            "speed": 5.21,
                            "deg": 271,
                            "gust": 8.81
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2024-02-28 15:00:00"
                    },
                    {
                        "dt": 1709143200,
                        "main": {
                            "temp": 4.77,
                            "feels_like": 1.57,
                            "temp_min": 4.77,
                            "temp_max": 4.77,
                            "pressure": 1021,
                            "sea_level": 1021,
                            "grnd_level": 1020,
                            "humidity": 77,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01n"
                            }
                        ],
                        "clouds": {
                            "all": 7
                        },
                        "wind": {
                            "speed": 4.01,
                            "deg": 259,
                            "gust": 7.8
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2024-02-28 18:00:00"
                    },
                    {
                        "dt": 1709154000,
                        "main": {
                            "temp": 3.66,
                            "feels_like": 0.39,
                            "temp_min": 3.66,
                            "temp_max": 3.66,
                            "pressure": 1022,
                            "sea_level": 1022,
                            "grnd_level": 1021,
                            "humidity": 82,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01n"
                            }
                        ],
                        "clouds": {
                            "all": 1
                        },
                        "wind": {
                            "speed": 3.72,
                            "deg": 257,
                            "gust": 7.71
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2024-02-28 21:00:00"
                    },
                    {
                        "dt": 1709164800,
                        "main": {
                            "temp": 2.86,
                            "feels_like": -0.12,
                            "temp_min": 2.86,
                            "temp_max": 2.86,
                            "pressure": 1023,
                            "sea_level": 1023,
                            "grnd_level": 1022,
                            "humidity": 88,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01n"
                            }
                        ],
                        "clouds": {
                            "all": 4
                        },
                        "wind": {
                            "speed": 3.07,
                            "deg": 250,
                            "gust": 5.25
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2024-02-29 00:00:00"
                    },
                    {
                        "dt": 1709175600,
                        "main": {
                            "temp": 2.4,
                            "feels_like": -0.34,
                            "temp_min": 2.4,
                            "temp_max": 2.4,
                            "pressure": 1022,
                            "sea_level": 1022,
                            "grnd_level": 1021,
                            "humidity": 89,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 801,
                                "main": "Clouds",
                                "description": "few clouds",
                                "icon": "02n"
                            }
                        ],
                        "clouds": {
                            "all": 18
                        },
                        "wind": {
                            "speed": 2.68,
                            "deg": 215,
                            "gust": 3.77
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2024-02-29 03:00:00"
                    },
                    {
                        "dt": 1709186400,
                        "main": {
                            "temp": 2.24,
                            "feels_like": -1.3,
                            "temp_min": 2.24,
                            "temp_max": 2.24,
                            "pressure": 1022,
                            "sea_level": 1022,
                            "grnd_level": 1021,
                            "humidity": 91,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 801,
                                "main": "Clouds",
                                "description": "few clouds",
                                "icon": "02n"
                            }
                        ],
                        "clouds": {
                            "all": 15
                        },
                        "wind": {
                            "speed": 3.65,
                            "deg": 186,
                            "gust": 6.89
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2024-02-29 06:00:00"
                    },
                    {
                        "dt": 1709197200,
                        "main": {
                            "temp": 4.09,
                            "feels_like": -0.02,
                            "temp_min": 4.09,
                            "temp_max": 4.09,
                            "pressure": 1022,
                            "sea_level": 1022,
                            "grnd_level": 1020,
                            "humidity": 84,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 802,
                                "main": "Clouds",
                                "description": "scattered clouds",
                                "icon": "03d"
                            }
                        ],
                        "clouds": {
                            "all": 49
                        },
                        "wind": {
                            "speed": 5.46,
                            "deg": 172,
                            "gust": 9.76
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2024-02-29 09:00:00"
                    },
                    {
                        "dt": 1709208000,
                        "main": {
                            "temp": 4.76,
                            "feels_like": 0.34,
                            "temp_min": 4.76,
                            "temp_max": 4.76,
                            "pressure": 1021,
                            "sea_level": 1021,
                            "grnd_level": 1019,
                            "humidity": 76,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 803,
                                "main": "Clouds",
                                "description": "broken clouds",
                                "icon": "04d"
                            }
                        ],
                        "clouds": {
                            "all": 54
                        },
                        "wind": {
                            "speed": 6.64,
                            "deg": 162,
                            "gust": 10.97
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2024-02-29 12:00:00"
                    },
                    {
                        "dt": 1709218800,
                        "main": {
                            "temp": 4.72,
                            "feels_like": 0.11,
                            "temp_min": 4.72,
                            "temp_max": 4.72,
                            "pressure": 1018,
                            "sea_level": 1018,
                            "grnd_level": 1017,
                            "humidity": 78,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 802,
                                "main": "Clouds",
                                "description": "scattered clouds",
                                "icon": "03d"
                            }
                        ],
                        "clouds": {
                            "all": 32
                        },
                        "wind": {
                            "speed": 7.13,
                            "deg": 144,
                            "gust": 11.98
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2024-02-29 15:00:00"
                    },
                    {
                        "dt": 1709229600,
                        "main": {
                            "temp": 4.4,
                            "feels_like": -0.56,
                            "temp_min": 4.4,
                            "temp_max": 4.4,
                            "pressure": 1016,
                            "sea_level": 1016,
                            "grnd_level": 1015,
                            "humidity": 78,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 801,
                                "main": "Clouds",
                                "description": "few clouds",
                                "icon": "02n"
                            }
                        ],
                        "clouds": {
                            "all": 18
                        },
                        "wind": {
                            "speed": 7.86,
                            "deg": 129,
                            "gust": 14.94
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2024-02-29 18:00:00"
                    },
                    {
                        "dt": 1709240400,
                        "main": {
                            "temp": 4.99,
                            "feels_like": 0.04,
                            "temp_min": 4.99,
                            "temp_max": 4.99,
                            "pressure": 1015,
                            "sea_level": 1015,
                            "grnd_level": 1013,
                            "humidity": 73,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 800,
                                "main": "Clear",
                                "description": "clear sky",
                                "icon": "01n"
                            }
                        ],
                        "clouds": {
                            "all": 3
                        },
                        "wind": {
                            "speed": 8.37,
                            "deg": 131,
                            "gust": 15.95
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2024-02-29 21:00:00"
                    },
                    {
                        "dt": 1709251200,
                        "main": {
                            "temp": 4.51,
                            "feels_like": -0.67,
                            "temp_min": 4.51,
                            "temp_max": 4.51,
                            "pressure": 1013,
                            "sea_level": 1013,
                            "grnd_level": 1012,
                            "humidity": 81,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 801,
                                "main": "Clouds",
                                "description": "few clouds",
                                "icon": "02n"
                            }
                        ],
                        "clouds": {
                            "all": 15
                        },
                        "wind": {
                            "speed": 8.66,
                            "deg": 127,
                            "gust": 16.19
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2024-03-01 00:00:00"
                    },
                    {
                        "dt": 1709262000,
                        "main": {
                            "temp": 4.39,
                            "feels_like": -0.92,
                            "temp_min": 4.39,
                            "temp_max": 4.39,
                            "pressure": 1010,
                            "sea_level": 1010,
                            "grnd_level": 1009,
                            "humidity": 82,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 802,
                                "main": "Clouds",
                                "description": "scattered clouds",
                                "icon": "03n"
                            }
                        ],
                        "clouds": {
                            "all": 33
                        },
                        "wind": {
                            "speed": 8.95,
                            "deg": 125,
                            "gust": 16.52
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2024-03-01 03:00:00"
                    },
                    {
                        "dt": 1709272800,
                        "main": {
                            "temp": 4.56,
                            "feels_like": -0.61,
                            "temp_min": 4.56,
                            "temp_max": 4.56,
                            "pressure": 1009,
                            "sea_level": 1009,
                            "grnd_level": 1008,
                            "humidity": 89,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 803,
                                "main": "Clouds",
                                "description": "broken clouds",
                                "icon": "04n"
                            }
                        ],
                        "clouds": {
                            "all": 66
                        },
                        "wind": {
                            "speed": 8.67,
                            "deg": 125,
                            "gust": 15.45
                        },
                        "visibility": 10000,
                        "pop": 0,
                        "sys": {
                            "pod": "n"
                        },
                        "dt_txt": "2024-03-01 06:00:00"
                    },
                    {
                        "dt": 1709283600,
                        "main": {
                            "temp": 4.67,
                            "feels_like": -0.37,
                            "temp_min": 4.67,
                            "temp_max": 4.67,
                            "pressure": 1009,
                            "sea_level": 1009,
                            "grnd_level": 1008,
                            "humidity": 94,
                            "temp_kf": 0
                        },
                        "weather": [
                            {
                                "id": 500,
                                "main": "Rain",
                                "description": "light rain",
                                "icon": "10d"
                            }
                        ],
                        "clouds": {
                            "all": 100
                        },
                        "wind": {
                            "speed": 8.35,
                            "deg": 130,
                            "gust": 14.73
                        },
                        "visibility": 10000,
                        "pop": 0.87,
                        "rain": {
                            "3h": 1.81
                        },
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2024-03-01 09:00:00"
                    }
                ],
                "city": {
                    "id": 2618425,
                    "name": "Copenhagen",
                    "coord": {
                        "lat": 55.6761,
                        "lon": 12.5683
                    },
                    "country": "DK",
                    "population": 15000,
                    "timezone": 3600,
                    "sunrise": 1708841551,
                    "sunset": 1708878817
                }
            },
            "air_pollution": {
                "coord": {
                    "lon": 12.5683,
                    "lat": 55.6761
                },
                "list": [
                    {
                        "main": {
                            "aqi": 1
                        },
                        "components": {
                            "co": 297.07,
                            "no": 2.12,
                            "no2": 10.63,
                            "o3": 55.08,
                            "so2": 4.05,
                            "pm2_5": 6.16,
                            "pm10": 7.34,
                            "nh3": 1.69
                        },
                        "dt": 1708861684
                    }
                ]
            },
            "uv_index": {
                "latitude": 55.6785,
                "longitude": 12.570419,
                "generationtime_ms": 0.04696846008300781,
                "utc_offset_seconds": 3600,
                "timezone": "Europe/Copenhagen",
                "timezone_abbreviation": "CET",
                "elevation": 10,
                "daily_units": {
                    "time": "iso8601",
                    "uv_index_max": "",
                    "uv_index_clear_sky_max": ""
                },
                "daily": {
                    "time": [
                        "2024-02-25"
                    ],
                    "uv_index_max": [
                        1.8
                    ],
                    "uv_index_clear_sky_max": [
                        2.25
                    ]
                }
            }
        }

        dispatch({ type: "UPDATE_LOCATION", payload: { hourly_data, ten_day_forecast, air_pollution, uv_index } })
    }

    useEffect(() => {
        if (!state.hourly_data && !state.ten_day_forecast && !state.air_pollution && !state.uv_index) {
            setDefaultLocation();
        }
    }, []);

    console.log(state);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};
