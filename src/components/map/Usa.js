import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios'
import Maps from './Maps';
const { APP_VAPID_PUBLIC_KEY } = process.env;


const Hospital = () => {
    const [latest, setLatest] = useState([])

    useEffect(() => {
        axios.get("")

            .then(res => {
                setLatest(res.data)

            }).catch((erro) => {
                console.log(erro)
            });


    }, []);
    
    const Hospitales = latest.map((data, i) => {


        return (



            <div
                lat={parseFloat(data.latitud)}
                lng={parseFloat(data.longitud)}
                municipio={data.municipio}
                nombre={data.nombre}
                nivel={data.nivel}
                style={{
                    color: "black",
                    backgroundColor: "white",
                    height: "25px",
                    width: "35px",


                }
                }


            >
               
            </div>


        )
    })
    return (
        <Fragment>
            <Maps clave={APP_VAPID_PUBLIC_KEY} obj={Hospitales}/>  
        
        </Fragment>
    );
}
 
export default Hospital;