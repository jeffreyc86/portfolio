import React from 'react'
import Navbar from './components/Navbar'
import {Route, Switch} from 'react-router-dom'

function App() {

  return (
    <div>
      <Navbar />
      <Switch>
        <Route
          path="/"
          exact
        >
            {/* component */}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
