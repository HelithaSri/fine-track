import CustomButton from "./components/CustomButton/CustomButton";
import Footer from "./components/Footer/Footer";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import TryRoundedIcon from "@mui/icons-material/TryRounded";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div>
      {/* <CustomButton
        style={{
          backgroundColor: "rgba(25, 118, 210, 0.95)",
          width: "100%",
          textTransform: "none",
        }}
        endIcon={<AccessibilityNewIcon />}
      >
        Hello World
      </CustomButton>

      <Footer />

      <div className="p-9"></div>

      <Footer>
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
          startIcon={<TryRoundedIcon fontSize={"large"} />}
        >
          Feedback
        </CustomButton>
      </Footer> */}
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
