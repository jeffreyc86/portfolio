import React from 'react'
import Navbar from './components/Navbar'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'

function App() {

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
