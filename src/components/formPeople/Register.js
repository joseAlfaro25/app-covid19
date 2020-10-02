import React, { Fragment, useState  } from 'react';
import app from '../../services/auth/base'
import { usePosition } from 'use-position';
import swal from 'sweetalert2'

const Registrar = (props) => {
    const watch = true;
    const {
        latitude,
        longitude,
    } = usePosition(watch);

    const [numeroT,setNumeroT]=useState('')
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
               
 
            } catch (error) {
            
            }
       
            try {
                const newRef = app.storage().ref('fotos').child(Imagen.name); // nombre del archivo
                setRef(newRef);
                await newRef.put(Imagen);
                let photoUrl = await newRef.getDownloadURL()
                console.log('la ul de la imagen es' + photoUrl);

                const nuevoRegistro = {
                    nombre: nombre,
                    email: email,
                    numeroID: numeroID,
                    detalles: detalles,
                    longitude: longitude,
                    latitude: latitude,
                    photoUrl: photoUrl,
                    numeroT:numeroT
               
                }
                await app.firestore().collection('datos').add(nuevoRegistro)
                await swal.fire({
                    icon: 'success',
                    text: 'Se ha Guardo',
                    confirmButtonColor: "#00B0FF",
                })

            
            } catch (error) {
            
            }
            
        
        }
        setNombre('')
        setNumero('')
        setEmail('')
        setDetalles('')
        setLongitud('')
        setLatitud('')
        setphotoUrl('')
        setNumeroT('')
        setImagen()
        setRef(null)

       

    
    }


    return (
        <Fragment>
            <div className="container col-md-8 mt-2">
                <div className="abs-center">
                    <div className=" col-md-8">
                        
                        <div className></div>
                        
                            <h3 className="text-center ">Regitrar Caso</h3>
                            <div>
                            
                            <form onSubmit={Datos}>
                               <h5>Correo</h5>
                                <input
                                    type="email"
                                    className="form-control "
                                   
                                    onChange={e => setEmail(e.target.value)}
                                    name="email"
                                    value={email}
                                />
                                <h5>Identificacion</h5>
                                <input
                                    name="numeroID"
                                    type="text"
                                    className="form-control mb-2"
                                   
                                    onChange={e => setNumero(e.target.value)}
                                    value={numeroID}
                                />
                                <h5>Nombre Completo</h5>
                                <input
                                    name="nombre"
                                    type="text"
                                    className="form-control"
                                   
                                    onChange={e => setNombre(e.target.value)}
                                    value={nombre}
                                />
                                <h5>Numero Telefonico</h5>
                                <input
                                    name="numeroT"
                                    type="number"
                                    className="form-control"

                                    onChange={e => setNumeroT(e.target.value)}
                                    value={numeroT}
                                />

                                <h5>Detalles</h5>
                                <textarea rows="3" required
                                    type="text-area"
                                    className="form-control mb-2"
                                    onChange={e => setDetalles(e.target.value)}
                                    value={detalles}
                                >

                                </textarea>
                                
                                <div>
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
                                 </div>

                                


                                <div>
                                    <input className="col-6" type="file" name="imagen" onChange={changeImagen} />
                                    <button 
                                        className="btn btn-primary col-6"
                                        type="submit"
                                    >
                                        Enviar
                                </button></div>
                               
                                
                               
                               
                                

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