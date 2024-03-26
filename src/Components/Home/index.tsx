// External Dependencies
import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

// Internal Dependencies
import LeftColumn from "../dashboard/LeftColumn";
import RightColumn from "../dashboard/RightColumn";
import { useWeather } from "../context/WeatherContext";

// Local Variables
const CenteredContainer = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  alignSelf: "center",
  width: "75%",
  height: "90vh",
  margin: "auto",
  padding: '50px 20px',
  backgroundColor: "rgba(181, 177, 176, 0.5)",
  " .body": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "row",
    height: "100%",
    width: "90%",
    "@media (max-width: 700px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  " .footer": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "20%",
  },
});

const Home: React.FC = () => {
  const { weatherData } = useWeather();
  return (
    <CenteredContainer elevation={12}>
      <Typography variant="h4" textAlign="center">
        First Arriving HQ Weather Dashboard
      </Typography>
      <Typography variant="h4" textAlign="center">
        {weatherData?.name} - {weatherData?.date}
      </Typography>
      <div className="body">
        <LeftColumn />
        <RightColumn />
      </div>
      <div className="footer">
        <Typography variant="h5" textAlign="center">
          {weatherData?.detailedForecast}
        </Typography>
      </div>
    </CenteredContainer>
  );
};

export default Home;
