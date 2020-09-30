import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios'
import Maps from '../Maps';
const { APP_VAPID_PUBLIC_KEY } = process.env;

const Country = () => {
    
    
    const [latest, setLatest] = useState([])

    useEffect(() => {
       
            axios.get("https://disease.sh/v3/covid-19/jhucsse").then(res => {
                setLatest(res.data)
                console.log(res.data)

            }).catch((erro) => {
                console.log(erro)
            });


    }, []); 
    
    const paises = latest.map((data, i) => {
      
        
        return (
            
          
       
           
            
                <div

                    lat={data.coordinates.latitude}
                    lng={data.coordinates.longitude}
                    style={{
                        color: "black",
                        backgroundColor: "red",
                        height: "25px",
                        width: "35px",
                  
                        borderRadius: 30


                    }
                    }


            >
                
                    <div>{data.stats.confirmed}</div>
                    {data.country}
                    {data.province}
              
                    
                </div>
               
               
                
                
                
        )
    })
    

    return (
        <Fragment>
            <Maps clave={APP_VAPID_PUBLIC_KEY} obj={paises}>  
                
            </Maps>
              
               
               
            

    </Fragment>
    );
}
 
export default Country;