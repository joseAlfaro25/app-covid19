import React, { useState, useEffect } from 'react'
import app  from '../../services/auth/base'

const DataPeople = () => {
    const [datos, setDatos] = useState([])

    useEffect(() => {

        const obtenerDatos = async () => {
      let db =  app.firestore()
          
                const data = await db.collection('datos').get()
                const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                console.log(arrayData)
                setDatos(arrayData)
                console.log(error)
            
        }
        obtenerDatos()

    }, [])

    const pacientes = datos.map((data, i) => {


        return (



            <div
                lat={parseFloat(data.latitud)}
                lng={parseFloat(data.longitud)}
                style={{
                    color: "black",
                    backgroundColor: "white",
                    height: "25px",
                    width: "35px",


                }
                }


            >
                <img height="10px" alt="10" src={data.countryInfo.flag} >
                </img>

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
