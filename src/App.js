import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
export default function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <img
        className="relative bottom-40"
        alt="Crater"
        src="https://i.imgur.com/kmQ9w2n.png"
      />
    </>
  );
}
