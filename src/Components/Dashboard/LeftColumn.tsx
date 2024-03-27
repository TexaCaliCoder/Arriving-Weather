// External Dependencies
import React from "react";
import { styled } from "@mui/material/styles";

// Local Dependencies
import { useWeather } from "../Context/WeatherContext";
import DisplayBox from "./DisplayBox";

// Local Variables
const StyledWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "50%",

  "@media (max-width: 800px)": {
    width: "100%",
    marginTop: "20px",
    justifyContent: "center",
    ".top": {
      marginBottom: "20px",
    },
  },
});

const LeftColumn: React.FC = () => {
  const { weatherData } = useWeather();
  const temperature = weatherData?.temperature ?? '';
  return (
    <StyledWrapper>
    <DisplayBox 
      title="Temperature" 
      text={`${temperature}°`} 
    />
  </StyledWrapper>

  );
};

export default LeftColumn;
