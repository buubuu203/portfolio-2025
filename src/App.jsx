import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Resume,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer,
} from "./components";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <BrowserRouter>
      {/* 🔔 Toast container */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#151030",
            color: "#fff",
            borderRadius: "12px",
          },
        }}
      />

      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Resume />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
