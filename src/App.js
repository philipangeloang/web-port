import LandingPage from "./pages/LandingPage";
import Navbar from "./pages/Navbar";
import UnevenDivider from "./components/UnevenDivider";
import Capabilities from "./pages/Capabilities";
export default function App() {
  return (
    <>
      <input type="checkbox" id="navToggle" className="hidden" />
      <Navbar />
      <LandingPage />
      <UnevenDivider />
      <Capabilities />
    </>
  );
}
