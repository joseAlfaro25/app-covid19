import React, { useEffect, useState } from 'react';
import NavBar from './components/nav/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/login/Login'
import Registrar from './components/formPeople/Register';
import { AuthProvider } from "./services/auth/Auth";
import PrivateRoute from  "./services/auth/PrivateRoute";
import CasesColombia from "./components/Estadisticas/CasesColombia";
import DataPeople from './components/formPeople/DataPeople';
import MapsC from './components/model/MapsC';
import Direccion from './components/model/Direccion';







function App() {
  return(    

   
    <div>
      
      <AuthProvider>
        <Router>
        <NavBar />
     
          <PrivateRoute exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <PrivateRoute exact path='/register' component={Registrar} />
          <PrivateRoute exact path='/cases-colombia' component={CasesColombia} />
          <PrivateRoute exact path='/data-people' component={DataPeople} />
          <PrivateRoute exact path='/maps-country' component={MapsC} />
          <PrivateRoute exact path="/maps-covid-people" component={Direccion} />
         
        
      </Router>
      </AuthProvider>
    
    </div>
    
    


  ) 
}


export default App;
