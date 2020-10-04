import React, { Fragment, useState, useEffect} from 'react';

import app from '../../services/auth/base';
const CasesColombia = () => {
    const [Pacientes, setPacientes] = useState([])

    useEffect(() => {

        const obtenerDatos = async () => {
            const db = app.firestore()
            try {
                const data = await db.collection('datos').get()
                const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                console.log(arrayData)
                setPacientes(arrayData)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerDatos()

    }, [])
       
    return (
        <div className="container mb-2">
            <table className="table mt-2">
                <thead>
                    <tr>
                        
                        <th scope="col">Nombre</th>
                        <th scope="col">Correo</th>
                       
                       
                    </tr>
                </thead>
                <tbody>
                    {
                        Pacientes.map(item => (
                            
                            <tr key={item.id}>
                                
                                <td>{item.nombre}</td>
                                <td>{item.email}</td>
                                
                    
                               
                            </tr>

                        ))
                    }
                </tbody>
            </table>




            
                       
              
                <div >
                    
        </div>
            </div>
        
    );
}
 
export default CasesColombia;