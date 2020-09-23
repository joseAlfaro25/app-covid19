import React, { Fragment, useState } from 'react';
import app from '../../services/auth/base'

import { usePosition } from 'use-position';

const Registrar = (props) => {
    const watch = true;
    const {
        latitude,
        longitude,
    } = usePosition(watch);

    
    const [nombre, setNombre] = useState('')
    const [numeroID, setNumero]= useState('')
    const [email, setEmail] = useState('')
    const [detalles, setDetalles] = useState('')
    const [longitud, setLongitud] = useState('')
    const [latitud, setLatitud] = useState('')
    const [photoUrl,setphotoUrl]= useState('')
    const [Imagen, setImagen] = useState();
    const [ref, setRef] = useState(null);

    const changeImagen = e => {
        setImagen(e.target.files[0]);
    }
    
    const Datos = async (e) => {
        e.preventDefault();

        if (detalles !=='') {
            try {
                const newRef = app.storage().ref('fotos').child(Imagen.name); // nombre del archivo
                setRef(newRef);
                await newRef.put(Imagen);
                let photoUrl = await newRef.getDownloadURL()
                console.log('la ul de la imagen es' + photoUrl);
 
            } catch (error) {
            
            }
       
            try {
                const nuevoRegistro = {
                    nombre: nombre,
                    email: email,
                    numeroID: numeroID,
                    detalles: detalles,
                    longitude: longitude,
                    latitude: latitude,
                    photoUrl:photoUrl
               
                }
                await app.firestore().collection('datos').add(nuevoRegistro)
            
            } catch (error) {
            
            }
            
        
        }
        

    
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
                                <div>
                                    <div>
                                        <input name="nombre"
                                            type="text"
                                            className="invisible"
                                            placeholder="Nombre Completo"
                                            onChange={e => setLongitud(e.target.value)}
                                            value={longitud} />

                                    </div>
                                    <div>
                                        <input name="nombre"
                                            type="text"
                                            className="invisible"
                                            placeholder="Nombre Completo"
                                            onChange={e => setLatitud(e.target.value)}
                                            value={latitud} />

                                    </div>
                                    <div>

                                    </div>
                                 </div>

                                


                                
                                <input type="file" name="imagen" onChange={changeImagen} />
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