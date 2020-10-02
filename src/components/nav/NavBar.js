import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import app from '../../services/auth/base'

import { AuthContext } from "../../services/auth/Auth";
const NavBar = (props) => {


    const { currentUser } = useContext(AuthContext)
    
   
    return (
        <Fragment>

           
            <nav className="navbar navbar-lg navbar-light bg-primary ">
                GeoCovid
                 { currentUser &&
                 
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                }
               
                    <div className="collapse navbar-collapse " id="navbarNav">
                        

                            <ul className="navbar-nav ml-auto">



                            {currentUser && 
                                <li className="nav-item active">

                                    <Link to="/" className="nav-link" >Home</Link>

                                </li>
                            }
                            {currentUser && 
                                <li className="nav-item">
                            <Link to="/maps-country" className="nav-link">Mapa Global</Link>
                                </li>
                            }
                            {currentUser && 

                                <li className="nav-item">
                                    <Link to="/cases-colombia" className="nav-link">Pacientes</Link>
                                </li>
//
                        }
                        {currentUser &&
                            <li className="nav-item">
                            <Link to="/maps-covid-people" className="nav-link">Ubicacion de Pacientes</Link>
                            </li>

                        }
                            {currentUser && 
                            <li className="nav-item">
                                <Link to="/register" className="nav-link">Registro de casos</Link>
                            </li>

                        }
                        {currentUser && 
                        

                            <li className="nav-item">
                            <Link to="/maps-country" className="nav-link"></Link>
                            </li>

                        }
                            {currentUser && 

                            <li className="nav-item" onClick={() => app.auth().signOut()}>
                          
                               
                                Cerrar Sesión
                               </li>
                          
                                
                        }
                        
                              
                                


                            </ul>

                        

                    </div>


                
               
            </nav>
        </Fragment>

    );
}

export default NavBar;