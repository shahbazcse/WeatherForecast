export const getUVData = async (lat, lon) => {
    try {
        if (!lat || !lon) {
            throw new Error("Missing lat param");
        }

        const res = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=uv_index_max,uv_index_clear_sky_max&timezone=auto&forecast_days=1`
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
