// External Dependencies
import React from "react";
import { styled } from "@mui/material/styles";

// Internal Dependencies
import Home from "./components/home";


// Local Variables
const StyledAppWrapper = styled("div")(() => ({
  backgroundImage: "url(https://img.hoodline.com/uploads/story/image/387530/istock__..featured_image_1..sunny_4.jpg.jpg?max-h=442&w=760&fit=crop&crop=faces,center)",
  backgroundSize: "cover",
  height: "100vh",
  width: "100vw",
  overflow: "hidden",
	display: "flex",
}));

const App: React.FC = () => {
  
	return (
		<StyledAppWrapper>
		<Home/>
		</StyledAppWrapper>
  );
};

export default App;
