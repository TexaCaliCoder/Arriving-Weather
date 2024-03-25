import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";

// Local Dependencies
import { SimplifiedForecast, extractSimplifiedNextDayForecast } from "./helper";

// Local Typings
type WeatherContextType = {
  weatherData: SimplifiedForecast | null;
  error: string | null;
};

const WeatherContext = createContext<WeatherContextType>({
  weatherData: null,
  error: null,
});

interface WeatherProviderProps {
  children: ReactNode;
}

export const WeatherProvider = ({ children }: WeatherProviderProps) => {
  const [contextValue, setContextValue] = useState<WeatherContextType>({
    weatherData: null,
    error: null,
  });

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        "https://api.weather.gov/gridpoints/AKQ/64,37/forecast"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      const result = extractSimplifiedNextDayForecast(jsonData);
      if (result === null) {
        setContextValue({
          weatherData: null,
          error: "Failed to fetch weather data",
        });
      } else {
        setContextValue({
          weatherData: result,
          error: null,
        });
      }
    } catch (error) {
      console.error("Failed to fetch weather data:", error);
      setContextValue({
        weatherData: null,
        error: "Failed to fetch weather data",
      });
    }
  };

  useEffect(() => {
    fetchWeatherData();
    const intervalId = setInterval(fetchWeatherData, 600000); // Refresh every 10 minutes

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
};

// Custom hook to use the weather context
export const useWeather = () => useContext(WeatherContext);
