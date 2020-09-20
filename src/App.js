import React from 'react';
import NavBar from './components/nav/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Maps from './components/map/Maps';
import Home from './components/Home';
import Login from './components/login/Login'








function App() {
  return (

    <div>
      
      <Router>
        <NavBar />
        <Switch>
         
          <Route exact path='/' component={Home} />
          <Route exact path='/maps' component={Maps} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Router>
    </div>
    
    


  );
}

export default App;
