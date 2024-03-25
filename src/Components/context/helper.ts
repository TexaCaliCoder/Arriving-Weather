

export interface SimplifiedForecast {
    temperature: number;
    temperatureUnit: string;
    name: string;
    date: string; 
    shortForecast: string;
    detailedForecast: string;
    windSpeed: string;
    windDirection: string;
}

interface WeatherApiResponse {
    properties: {
        periods: Array<{
            name: string;
            startTime: string;
            temperature: number;
            temperatureUnit: string;
            shortForecast: string;
            detailedForecast: string;
            windSpeed: string;
            windDirection: string;
        }>;
    };
}


export const extractSimplifiedNextDayForecast = (data: WeatherApiResponse) => {
    const period = data?.properties?.periods[1]; // Safely accessing the next day's forecast

    if (!period) {
        console.error('Forecast data is missing or not in the expected format.');
        return null;
    }

    const nextDayForecast: SimplifiedForecast = {
        temperature: period.temperature,
        temperatureUnit: period.temperatureUnit,
        name: period.name,
        date: formatDate(period.startTime),
        shortForecast: period.shortForecast,
        detailedForecast: period.detailedForecast,
        windSpeed: period.windSpeed,
        windDirection: period.windDirection,
    };

    return nextDayForecast;
}

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();
    return `${month} ${day}`;
}

