

export interface SimplifiedForecast {
    temperature: number;
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
            shortForecast: string;
            detailedForecast: string;
            windSpeed: string;
            windDirection: string;
        }>;
    };
}

export const getTomorrow = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toLocaleDateString('en-US', {weekday: 'long'});
}


export const extractSimplifiedNextDayForecast = (data: WeatherApiResponse) => {

    const day = getTomorrow()
    const tomorrow = data?.properties?.periods.find(period => period.name === day);
   console.log('tomorrow', tomorrow)

    if (!tomorrow) {
        console.error('Forecast data is missing or not in the expected format.');
        return null;
    }

    const nextDayForecast: SimplifiedForecast = {
        temperature: tomorrow.temperature,
        name: tomorrow.name,
        date: formatDate(tomorrow.startTime),
        shortForecast: tomorrow.shortForecast,
        detailedForecast: tomorrow.detailedForecast,
        windSpeed: tomorrow.windSpeed,
        windDirection: tomorrow.windDirection,
    };

    return nextDayForecast;
}

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();
    return `${month} ${day}`;
}

