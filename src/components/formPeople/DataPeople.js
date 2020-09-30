import React, { useState, useEffect, Fragment } from 'react';
import app from '../../services/auth/base';
import Maps from '../model/Maps';


const DataPeople = () => {
    const [datos, setDatos] = useState([])

    useEffect(() => {

        const obtenerDatos = async () => {
            const db = app.firestore()

            const data = await db.collection('datos').get()
            const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
            alert(arrayData)
            setDatos(arrayData)
           

        }
        obtenerDatos()

    }, [])

    const pacientes = datos.map((data, i) => {


        return (



            <div
                lat={data.latitude}
                lng={data.longitude}
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

            <Maps clave={process.env.APP_VAPID_PUBLIC_KEY} obj={pacientes} />
           

        </Fragment>
    );
}

export default DataPeople;
