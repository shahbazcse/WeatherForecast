export const getAirPollutionData = async (lat, lon) => {
    try {
        const appid = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
        if (!appid) {
            throw new Error("OpenWeather API key not found in environment variables");
        }
        if (!lat || !lon) {
            throw new Error("Missing lat param");
        }

        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&units=metric&appid=${appid}`
        );

        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await res.json();

        return data;
    } catch (error) {
        console.log(error);
    }
};
