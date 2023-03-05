import LandingPage from "./pages/LandingPage";
import Navbar from "./pages/Navbar";
import UnevenDivider from "./components/UnevenDivider";
import UnevenDividerFlipped from "./components/UnevenDividerFlipped";
import Capabilities from "./pages/Capabilities";
import MyWorks from "./pages/MyWorks";
export default function App() {
  return (
    <>
      <input type="checkbox" id="navToggle" className="hidden" />
      <Navbar />
      <LandingPage />
      <UnevenDivider />
      <Capabilities />
      <UnevenDividerFlipped />
      <MyWorks />
    </>
  );
}
