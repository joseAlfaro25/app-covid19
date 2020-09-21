import React, { Fragment } from 'react';


const Registrar = () => {
    return (
        <Fragment>
            {/* <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="jumbotron col-md-8">
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
                                    type="text"
                                    className="form-control mb-2"
                                    placeholder="Ingrese Contraseña"
                                    onChange={e => setPass(e.target.value)}
                                    value={pass}
                                />
                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    placeholder="Ingrese Contraseña"
                                    onChange={e => setPass(e.target.value)}
                                    value={pass}
                                />
                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    placeholder="Ingrese Contraseña"
                                    onChange={e => setPass(e.target.value)}
                                    value={pass}
                                />
                                <button
                                    className="btn btn-primary"
                                    type="submit"
                                >
                                   Enviar
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
             </div> */}
        </Fragment>
    );
}
 
export default Registrar;