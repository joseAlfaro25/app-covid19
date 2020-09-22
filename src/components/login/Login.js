import React, { Fragment, useState } from 'react';
import {auth } from '../../services/firebaseConfig'




const Login = (props) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState(null)
 
   
   
    const login = (async (e) => {
       
        try {
         e.preventDefault()
          await auth.signInWithEmailAndPassword(email, pass)
            setEmail('')
            setPass('')
            setError(null)
            props.history.replace('/')
        } catch (error) {
            alert(error.message)
        }
    })

    return (
        <Fragment>
        
            <div className="container">
                <div className="row justify-content-center mt-1">
                    <div>
                        <img src="https://i.pinimg.com/564x/c5/df/28/c5df28bf40fde11cc5ad1149cb3d8d01.jpg" alt="100" width="180"
                            height="150" className="rounded-circle justify-content-center" style={{ index: "100" }}></img>
                    </div>
                  
                    <div className="jumbotron col-md-5 border mb-1">
                        
                        <h4 className="text-info text-center mb-2">Iniciar Sesion</h4>
                        <div>
                            <form onSubmit={login}>
                                {
                                    error ? (
                                        <div className="alert alert-danger">
                                            {error}
                                        </div>
                                    ) : null
                                }
                                <h6>Email</h6>
                                <input
                                    type="email"
                                    className="form-control mb-2"
                                    placeholder="Ingrese Email"
                                    onChange={e => setEmail(e.target.value)}
                                    value={email}
                                />
                                <h6>Contraseña</h6>
                                <input
                                    type="password"
                                    className="form-control mb-2"
                                    placeholder="Ingrese Contraseña"
                                    onChange={e => setPass(e.target.value)}
                                    value={pass}
                                />

                                <div className="">
                                    <button
                                        className="btn btn-primary mt-2 btn-lg "
                                        type="submit"
                                    >
                                        Iniciar Sesion
                                </button>
                                </div>
                               

                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    );
}
 
export default Login;