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
import Country from './components/model/Country';
import Hospital from './components/model/Usa';

import { AuthProvider } from "./services/auth/Auth";
import PrivateRoute from  "./services/auth/PrivateRoute";







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
          <PrivateRoute exact path='/hopital' component={Hospital} />
          
        
      </Router>
      </AuthProvider>
    
    </div>
    
    


  ) 
}


export default App;
