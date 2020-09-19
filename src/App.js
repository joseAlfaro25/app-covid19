import React from 'react';
import ROUTES from './Routes/Router'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";





function App() {
  return (
    <Router>
      <Switch>{
        ROUTES.map((r => <Route component={r.component} exact={r.exact}  key="index"/>))
      }
      </Switch>
    </Router>
    


  );
}

export default App;
