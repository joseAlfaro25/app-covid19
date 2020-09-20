import React, { Fragment } from 'react';





const Login = () => {
    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [error, setError] = React.useState(null)

    const Datos = e => {
        e.preventDefault()
        if (!email.trim() || !pass.trim()) {
            console.log('Datos vacíos email!')
            setError('Datos vacíos email!')
            return
        }
        if (!pass.trim()) {
            console.log('Datos vacíos pass!')
            setError('Datos vacíos pass!')
            return
        }
        

    }

    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="jumbotron col-md-5">
                        <div>
                            <form onSubmit={Datos}>
                                {
                                    error ? (
                                        <div className="alert alert-danger">
                                            {error}
                                        </div>
                                    ) : null
                                }
                                <input
                                    type="email"
                                    className="form-control mb-2"
                                    placeholder="Ingrese Email"
                                    onChange={e => setEmail(e.target.value)}
                                    value={email}
                                />
                                <input
                                    type="password"
                                    className="form-control mb-2"
                                    placeholder="Ingrese Contraseña"
                                    onChange={e => setPass(e.target.value)}
                                    value={pass}
                                />
                                <button
                                    className="btn btn-lg btn-dark btn-block"
                                    type="submit"
                                >
                                    Iniciar Sesion
                     </button>

                            </form>
                        </div>
                        </div>
                </div>
        
        </div>
    </Fragment> );
}
 
export default Login;