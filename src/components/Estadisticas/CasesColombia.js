import React, { Fragment, useState} from 'react';

import app from '../../services/auth/base';
const CasesColombia = () => {
    const [Pacientes, setPacientes] = useState([])

    React.useEffect(() => {

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
            <div className="row">
                <div className="col-md-6">
                    <h3>Lista de Pacientes</h3>
                    <ul className="list-group">
                        {
                            Pacientes.map(item => (
                                <li className="list-group-item" key={item.id}>
                                    <span>{item.nombre}</span>
                                   
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="col-md-6">
                    
        </div>
            </div>
        </div>
    );
}
 
export default CasesColombia;