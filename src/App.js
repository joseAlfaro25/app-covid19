import React from 'react';
import NavBar from './components/nav/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Home from './components/Home';
import Login from './components/login/Login'
import Registrar from './components/formPeople/Register';
import Country from './components/map/Country';









function App() {
  return (

    <div>
      
      <Router>
        <NavBar />
        <Switch>
         
          <Route exact path='/' component={Home} />
          <Route exact path='/country' component={Country} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Registrar} />
        </Switch>
      </Router>
    </div>
    
    


  );
}

export default App;
