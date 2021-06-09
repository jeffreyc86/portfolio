import React from "react"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Experience from "./components/Experience"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ReactGA from "react-ga";

function App() {

  // Google Analytics Set Up
  const gaTrackingId = "UA-197837085-1";
  ReactGA.initialize(gaTrackingId);
  ReactGA.pageview("/");

  return (
    <div className="app">
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
