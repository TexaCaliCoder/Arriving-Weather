// External Dependencies
import React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
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
  justifyContent: "center",
  alignSelf: "center",
  margin: "0 auto",
  width: "75%",
  height: "90%",
  backgroundColor: "rgba(181, 177, 176, 0.5)",
  ".header": {
    borderBottom: "1px solid black",
    paddingTop: 30,
  },
  " .body": {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    height: "100%",
    width: "100%",
    padding: "20px 20px",
    "@media (max-width: 800px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  " .footer": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "70%",
    padding: '0px 40px 0px 40px',
   backgroundColor: "rgba(181, 177, 176, 0.5)",
  },
});

const Home: React.FC = () => {
  const { weatherData } = useWeather();
  return (
    <CenteredContainer elevation={12}>
      <div className="header">
        <Typography variant="h4" textAlign="center">
          First Arriving HQ Weather Dashboard
        </Typography>
        <Typography variant="h5" textAlign="center">
          {weatherData?.name} - {weatherData?.date}
        </Typography>
      </div>
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
