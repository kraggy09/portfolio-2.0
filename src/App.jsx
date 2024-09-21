import { useContext } from "react";
import { BgContext } from "./context/BgContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Suspense, lazy } from "react";
import AboutPage from "./pages/AboutPage";
gsap.registerPlugin(useGSAP);
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Works from "./pages/Works";
const Home = lazy(() => import("./pages/Home"));

const App = () => {
  const { isDarkMode } = useContext(BgContext);

  useGSAP(() => {
    // Define background properties for light and dark modes
    const darkModeBackground = `
        linear-gradient(rgba(0, 0, 0, 0.94), rgba(0, 0, 0, 0.94)), 
        url("https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png")
      `;
    const lightModeBackground = `
        linear-gradient(rgba(255, 255, 255, 0.94), rgba(255, 255, 255, 0.94)), 
        url("https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png")
      `;

    // Use GSAP to animate the background transition
    gsap.to(document.body, {
      background: isDarkMode ? darkModeBackground : lightModeBackground,
      backgroundSize: "64px",
      backgroundRepeat: "repeat",
      backgroundColor: isDarkMode ? "#000" : "#fff",
      duration: 0.3, // Duration of the background transition
      ease: "power3.inOut",
    });
  }, [isDarkMode]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<>Loading....</>}>
              <Home />
            </Suspense>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work/:id" element={<Works />} />
      </Routes>
    </Router>
  );
};

export default App;
