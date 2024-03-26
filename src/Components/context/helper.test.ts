// Internal Dependencies
import { extractSimplifiedNextDayForecast, getTomorrow } from "./helper";

// Mock data for the API response
const mockApiResponse = {
    properties: {
        periods: [
            {
                name: 'afternoon',
                startTime: '2023-03-24T06:00:00-04:00',
                temperature: 10,
                shortForecast: 'Sunny',
                detailedForecast: 'Clear sky with temperatures rising.',
                windSpeed: '5 mph',
                windDirection: 'N'
            },
            {
                name: 'Monday',
                startTime: '2023-03-25T06:00:00-04:00',
                temperature: 12,
                shortForecast: 'Partly cloudy',
                detailedForecast: 'Partly cloudy with a chance of rain in the afternoon.',
                windSpeed: '10 mph',
                windDirection: 'NE'
            }
        ]
    }
};

describe('extractSimplifiedNextDayForecast', () => {
    beforeAll(() => {
        jest.useFakeTimers('modern').setSystemTime(new Date('2024-03-24T06:00:00-04:00'));
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    it('successfully extracts simplified forecast for the next day', () => {
        const expected = {
            temperature: 12,
            name: 'Monday',
            date: 'March 25',
            shortForecast: 'Partly cloudy',
            detailedForecast: 'Partly cloudy with a chance of rain in the afternoon.',
            windSpeed: '10 mph',
            windDirection: 'NE'
        };

        const result = extractSimplifiedNextDayForecast(mockApiResponse);
        expect(result).toEqual(expected);
    });

    it('returns null when forecast data is missing', () => {
        const corruptedApiResponse = { properties: { periods: [] } };
        const result = extractSimplifiedNextDayForecast(corruptedApiResponse);
        expect(result).toBeNull();
    });
});

describe('getTomorrow', () => {

    beforeAll(() => {
        jest.useFakeTimers('modern').setSystemTime(new Date('2024-03-24T06:00:00-04:00'));
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    it('correctly identifies the next day of the week', () => {
        const expectedDay = 'Monday';
        const result = getTomorrow();
        expect(result).toBe(expectedDay);
    });
});

