import React from "react";
import "./LandingPage.css";
import Footer from "../components/Footer/Footer";
import CustomButton from "../components/CustomButton/CustomButton";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";

function LandingPage() {
  return (
    <div className="land-main">
      <div className="land-sub">
        <div>
          <h1 className="land-main-text">FineTrackSLP</h1>
          <p className="land-main-text-2">
            For People, By People: A Better Policing Experience
          </p>
        </div>
        <div className="para">
          <p>
            Breaking free from the shackles of tradition, Sri Lanka Police
            boldly steps into the future with a groundbreaking digital platform.
            This dynamic system shatters the confines of outdated procedures,
            ushering in an era of unprecedented efficiency and responsiveness.
          </p>
          <div className="land-button">
            <CustomButton
              borderRadius="10"
              style={{
                backgroundColor: "white",
                // width: "100%",
                textTransform: "none",
                fontSize: "25px",
                color: "#3344A1",
                fontWeight: "bold",
                borderRadius: "50px",
              }}
              startIcon={<LoginIcon fontSize={"large"} />}
            >
              Login
            </CustomButton>

            <CustomButton
              borderRadius="10"
              style={{
                backgroundColor: "white",
                // width: "100%",
                textTransform: "none",
                fontSize: "25px",
                color: "#3344A1",
                fontWeight: "bold",
                borderRadius: "50px",
              }}
              endIcon={<HowToRegIcon fontSize={"large"} />}
            >
              Register
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
