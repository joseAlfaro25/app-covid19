import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../services/firebaseConfig'

const NavBar = (props) => {



    const cerrarSesion = () => {
        try {
            auth.signOut()
                .then(() => {
                    props.history.push('/login')
                })
        }
        catch (err) { 
            alert(err)
        }
       
    }
    return (
        <Fragment>

           
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to='/'>GeoCovid</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse " id="navbarNav">
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
                                className="btn btn-dark"
                                onClick={() => cerrarSesion()}
                            >
                                Cerrar Sesión
                         </button>
                                
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </Fragment>

    );
}

export default NavBar;