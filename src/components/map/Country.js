import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios'
import Maps from './Maps';
const { APP_VAPID_PUBLIC_KEY } = process.env;

const Country = () => {
    

    const [latest, setLatest] = useState([])
   
    useEffect(() => {
        axios.get("https://corona.lmao.ninja/v2/countries")
        
            .then(res => {
                setLatest(res.data)

            }).catch()


    }, []); 
    
    const paises = latest.map((data) => {
        return (
            
           
       
                <div
                    lat={data.countryInfo.lat}
                    lng={data.countryInfo.long}
                    style={{
                        color: "black",
                        backgroundColor: "white",
                        height: "25px",
                        width: "35px",
                        borderRadius: "5px"

                    }
                    }
                    key={data.id}
                    className="text-center"
            >
                <img height="10px" alt="10" src={data.countryInfo.flag} >
                </img>
                    {data.cases}
                </div>
                
                
        )
    })
    

    return (
        <Fragment>
            <Maps clave={APP_VAPID_PUBLIC_KEY} pais={paises}>  
                
            </Maps>
              
               
               
            

    </Fragment>
    );
}
 
export default Country;