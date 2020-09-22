import React, { Fragment, useState } from 'react';



const Registrar = (props) => {

    const [nombre, setNombre] = useState('')
    const [numeroID, setNumero]= useState('')
    const [email, setEmail] = useState('')
    const [detalles, setDetalles] = useState('')
    // const [logitud, setLogitud] = useState('')
    // const [latitud, setLatitud] = useState('')

    const Datos=() => {
    
    }


    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="card body col-md-6 border">
                        <div className=" ">
                            <h3 className="text-center font-weight-bold mt-3">Regitrar Caso</h3>
                            <form onSubmit={Datos}>
                               
                                <input
                                    type="email"
                                    className="form-control mb-2"
                                    placeholder="Ingrese Email"
                                    onChange={e => setEmail(e.target.value)}
                                    name="email"
                                    value={email}
                                />
                                <input
                                    name="numeroID"
                                    type="text"
                                    className="form-control mb-2"
                                    placeholder="Identificacion"
                                    onChange={e => setNumero(e.target.value)}
                                    value={numeroID}
                                />
                                <input
                                    name="nombre"
                                    type="text"
                                    className="form-control mb-2"
                                    placeholder="Nombre Completo"
                                    onChange={e => setNombre(e.target.value)}
                                    value={nombre}
                                />

                                <textarea  rows="3" placeholder="Detalles" required
                                    type="text-area"
                                    className="form-control mb-2"
                                    onChange={e => setDetalles(e.target.value)}
                                    value={detalles}
                                >

                                </textarea>

                                

                                <input class="btn btn-primary" type="button" value="Subir Imagen"></input>
                                
                               
                                <button
                                    className="btn btn-primary"
                                    type="submit"
                                >
                                    Enviar
                                </button>
                                
                               
                               
                                

                            </form>
                            <br></br>
                        </div>
                    </div>
                </div>
             </div>
        </Fragment>
    );
}
 
export default Registrar;