import React, { useState, useEffect } from 'react';
import app from '../../services/auth/base';
import MapPeople from './MapPeople';
const { APP_VAPID_PUBLIC_KEY } = process.env;
const DataPeople = () => {
    const [datos, setDatos] = useState([])

    useEffect(() => {

        const obtenerDatos = async () => {
            const db = app.firestore()

            const data = await db.collection('datos').get()
            const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
            alert(arrayData)
            setDatos(arrayData)
            console.log(error)

        }
        obtenerDatos()

    }, [])

    const pacientes = datos.map((data, i) => {


        return (



            <div
                lat={parseFloat(data.latitud)}
                lng={parseFloat(data.longitude)}
                style={{
                    color: "black",
                    backgroundColor: "white",
                    height: "25px",
                    width: "35px",


                }
                }


            >

                {data.nombre}
            </div>



        )
    })
    return (
        <Fragment>
           

        </Fragment>
    );
}

export default DataPeople;
