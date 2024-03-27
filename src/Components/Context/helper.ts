// External Dependencies
import moment from "moment-timezone";

export interface SimplifiedForecast {
    temperature: number;
    name: string;
    date: string;
    shortForecast: string;
    detailedForecast: string;
    windSpeed: string;
    windDirection: string;
    rain: number | null;
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
            probabilityOfPrecipitation: {
                value: number | null
            };
        }>;
    };
}

export const getTomorrow = () => {
    // this ensures that the date is in the Eastern Time Zone (ashland) and it will handle daylight savings time
    const tomorrow = moment().tz('America/New_York').add(1, 'days');
    return tomorrow.format('dddd');
}



export const extractSimplifiedNextDayForecast = (data: WeatherApiResponse) => {

    const day = getTomorrow()
    const tomorrow = data?.properties?.periods.find(period => period.name === day);

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
        rain: tomorrow.probabilityOfPrecipitation.value ? tomorrow.probabilityOfPrecipitation.value : null,
    };

    return nextDayForecast;
}

const formatDate = (dateString: string) => {
    const date = moment(dateString).tz('America/New_York');
    return date.format('MMMM D');
}

