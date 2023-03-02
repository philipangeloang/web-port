import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import UnevenDivider from "./components/UnevenDivider";
export default function App() {
  return (
    <>
      <input type="checkbox" id="navToggle" className="hidden" />
      <Navbar />
      <LandingPage />
      <UnevenDivider />
    </>
  );
}
