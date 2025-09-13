import { useState } from "react";
import HeroSection from "../heroSection/heroSection";
import NavBar from "../NavBar/NavBar";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton"; // Optional, if you want a clickable icon
import SearchIcon from "@mui/icons-material/Search";

const Home = () => {
  const [lgShow, setLgShow] = useState(false);

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
            <HeroSection setLgShow={setLgShow} />
          </div>
        </div>
      </div>

      {/* Reach UI Dialog */}
      {lgShow && (
        <Dialog
          aria-label="Find Medical Centers"
          onDismiss={() => setLgShow(false)}
          className="customDialog"
        >
          <div className="searchFeildContainer">
            <TextField
              label="State"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="city"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <button className="searchButton">
              <IconButton>
                <SearchIcon style={{ color: "#fff" }} />
              </IconButton>
              Search
            </button>
          </div>
          <div>
            <span>You may looking for</span>
            <div>
              
            </div>
          </div>
        </Dialog>
      )}
    </>
  );
};

export default Home;
