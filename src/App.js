import React from "react"
import Navbar from "./components/Navbar"
import {Route, Switch} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Experience from "./components/Experience"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"

function App() {

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/experience">
          <Experience />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
