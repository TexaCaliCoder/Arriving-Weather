// External Dependencies
import React from "react";
import { styled } from "@mui/material/styles";

// Local Dependencies
import { useWeather } from "../context/WeatherContext";
import DisplayBox from "./DisplayBox";

// Local Variables
const StyledWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  height: "100%",
  width: "50%",
  "@media (max-width: 800px)": {
    width: "100%",
    justifyContent: "center",
  },
});

const RightColumn: React.FC = () => {
  const { weatherData } = useWeather();
  const windDirection = weatherData?.windDirection ?? '';
  const windSpeed = weatherData?.windSpeed ?? '';
  const rain = weatherData?.rain ?? '';
  return (
    <StyledWrapper>
      <DisplayBox title="Wind Conditions" text={`${windDirection} at ${windSpeed}`} />
      {rain && <DisplayBox title="Chance of Rain" text={`${rain}%`} />}
    </StyledWrapper>
  );
};

export default RightColumn;
