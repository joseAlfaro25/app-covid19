import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <Fragment>
           
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to='/'>GeoCovid</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link"  >Home</Link>
                           
                        </li>
                        <li className="nav-item">
                            <Link to="/maps" className="nav-link"> MAP</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">Formulario</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link"> MAP</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>

    );
}

export default NavBar;