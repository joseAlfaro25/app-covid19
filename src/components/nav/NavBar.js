import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import app from '../../services/auth/base'

import { AuthContext } from "../../services/auth/Auth";
const NavBar = (props) => {


    const { currentUser } = useContext(AuthContext)
    if (currentUser) {



    }  
   
    return (
        <Fragment>

           
            <nav className="navbar navbar-primary-lg navbar-light bg-light ">
                GeoCovid
                 {currentUser &&
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                }
                {
                    currentUser && 
                    <div className="collapse navbar-collapse " id="navbarNav">
                        {

                            <ul className="navbar-nav ml-auto">




                                <li className="nav-item active">

                                    <Link to="/" className="nav-link" >Home</Link>

                                </li>
                                <li className="nav-item">
                                    <Link to="/country" className="nav-link">Mapa</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/register" className="nav-link">Registro de casos</Link>
                                </li>

                                <li>
                                    <button
                                        onClick={() => app.auth().signOut()}
                                    >
                                        Cerrar Sesión
                        </button>


                                </li>

                            </ul>

                        }

                    </div>


                }
               
            </nav>
        </Fragment>

    );
}

export default NavBar;