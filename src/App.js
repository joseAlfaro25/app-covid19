import React, { useEffect, useState } from 'react';
import NavBar from './components/nav/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import app from './services/auth/base'
import Home from './components/Home';
import Login from './components/login/Login'
import Registrar from './components/formPeople/Register';
import Country from './components/model/Country/Country';
import { AuthProvider } from "./services/auth/Auth";
import PrivateRoute from  "./services/auth/PrivateRoute";
import CasesColombia from "./components/Estadisticas/CasesColombia";

import DataPeople from './components/formPeople/DataPeople';
import MapsC from './components/model/MapsC';






function App() {
  return(    

   
    <div>
      
      <AuthProvider>
        <Router>
        <NavBar />
     
          <PrivateRoute exact path='/' component={Home} />
          <PrivateRoute exact path='/country' component={Country} />
          <Route exact path='/login' component={Login} />
          <PrivateRoute exact path='/register' component={Registrar} />
          <PrivateRoute exact path='/cases-colombia' component={CasesColombia} />
          <PrivateRoute exact path='/data-peoplo' component={DataPeople} />
          <PrivateRoute exact path='/maps-country' component={MapsC}/>
        
      </Router>
      </AuthProvider>
    
    </div>
    
    


  ) 
}


export default App;
