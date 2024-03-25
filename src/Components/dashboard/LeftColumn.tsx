import React from 'react'

import { useWeather } from '../context/WeatherContext';

const LeftColumn: React.FC = () => {
  // testing the useWeather hook
  const { weatherData } = useWeather();
  console.log(weatherData);
  return (
    <div>LeftColumn</div>
  );}

  export default LeftColumn;