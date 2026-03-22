import "./App.css";
import { LoadingScreen } from "./conponents/LoadingScreen";
import "./index.css";
import { useState } from "react";
import { Navbar } from "./conponents/Navbar";
import { MobileMenu } from "./conponents/MobileMenu";
import { Home } from "./conponents/sections/Home";
import { About } from "./conponents/sections/About";
import { Projects } from "./conponents/sections/Projects";
import { Contact } from "./conponents/sections/Contact";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
export default App;
