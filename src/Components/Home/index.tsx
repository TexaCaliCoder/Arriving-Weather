// External Dependencies
import React, { useState, useEffect} from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

// Internal Dependencies
import LeftColumn from "../dashboard/LeftColumn";
import RightColumn from "../dashboard/RightColumn";

// Local Variables
const CenteredContainer = styled(Paper)({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
	alignSelf: "center",
  width: "75%",
  height: "90vh",
	margin: "auto",
	backgroundColor: "rgba(181, 177, 176, 0.5)",
});

const Home: React.FC = () => {

  return (
    <CenteredContainer elevation={12}>
      <LeftColumn />
      <RightColumn />
    </CenteredContainer>
  );
};

export default Home;
