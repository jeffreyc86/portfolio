import React, { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ReactGA from "react-ga";
import { useSpring, animated } from "react-spring";

function App() {
  const [loaded, setLoaded] = useState(false);
  const props = useSpring({
    to: { opacity: 0 },
    from: { opacity: 1 },
    delay: 1900,
  });

  useEffect(() => {
    let timer = setTimeout(() => setLoaded(true), 2350);
    return () => {
      clearTimeout(timer);
    };
  }, [loaded]);

  // Google Analytics Set Up
  const gaTrackingId = "UA-197837085-1";
  ReactGA.initialize(gaTrackingId);
  ReactGA.pageview("/");

  return (
    <div className="app">
      {!loaded ? (
        <div className="loader">
          <animated.div style={props}>
            <Loader />
          </animated.div>
        </div>
      ) : (
        <>
          <Navbar />
          <Home />
          <About />
          <Portfolio />
          <Experience />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
