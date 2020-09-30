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
                                    <Link to="/country" className="nav-link">Mapa</Link>
                                </li>
                            }
                            {currentUser && 

                                <li className="nav-item">
                                    <Link to="/cases-colombia" className="nav-link">Pacientes</Link>
                                </li>

                            }
                            {currentUser && 
                            <li className="nav-item">
                                <Link to="/register" className="nav-link">Registro de casos</Link>
                            </li>

                        }
                        {currentUser && 
                        

                            <li className="nav-item">
                                <Link to="/statesmen" className="nav-link">Registro de casos</Link>
                            </li>

                        }
                            {currentUser && 

                            <li className="nav-item">
                            <li
                                className="nav-link "
                                onClick={() => app.auth().signOut()}
                            >
                                Cerrar Sesión
                               </li>
                                </li>
                                
                        }
                        
                              
                                


                            </ul>

                        

                    </div>


                
               
            </nav>
        </Fragment>

    );
}

export default NavBar;