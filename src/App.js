import React from 'react'
import Navbar from './components/Navbar'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import About from "./components/About"

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
      </Switch>
    </div>
  );
}

export default App;
