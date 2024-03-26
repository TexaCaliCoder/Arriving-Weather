// External Dependencies
import React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

// Local Dependencies
import { useWeather } from "../context/WeatherContext";

// Local Variables
const StyledWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  height: "50%",
  width: "45%",
  marginTop: "100px",
  ".top": {
    borderBottom: "1px solid black",
  },

  "@media (max-width: 700px)": {
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
  return (
    <StyledWrapper>
      <div className="top">
        <Typography variant="h4" textAlign="center">
          Temperature
        </Typography>
      </div>
      <div className="bottom">
        <Typography variant="h4" textAlign="center">
          {weatherData?.temperature}&#186;
        </Typography>
      </div>
    </StyledWrapper>
  );
};

export default LeftColumn;
