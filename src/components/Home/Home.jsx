
import HeroSection from "../heroSection/heroSection";
import NavBar from "../NavBar/NavBar";
// Find and remove this line from src/components/Home/Home.jsx

import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton"; // Optional, if you want a clickable icon
import SearchIcon from "@mui/icons-material/Search";

const Home = () => {


  return (
    <>
      <div>
        <div className="blueRibbon">
          The health and well-being of our patients and their health care team
          will always be our priority, so we follow the best practices for
          cleanliness.
        </div>
        <div className="heroSection">
          <div className="homeContainer">
            <NavBar />
            <HeroSection  />
          </div>
        </div>
      </div>

     
    </>
  );
};

export default Home;
