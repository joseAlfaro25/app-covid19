import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios'
import Maps from './Maps';
const { APP_VAPID_PUBLIC_KEY } = process.env;

const Country = () => {
    

    const [latest, setLatest] = useState([])
//https://corona.lmao.ninja/v3/covid-19/countries/colombia
    useEffect(() => {
        axios.get("https://corona.lmao.ninja/v2/countries")
        
            .then(res => {
                setLatest(res.data)

            }).catch((erro) => {
                console.log(erro)
            });


    }, []); 
    
    const paises = latest.map((data, i) => {
      
        
        return (
            
          
       
                <div
                lat={parseFloat(data.countryInfo.lat)}
                lng={parseFloat(data.countryInfo.long)}
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
                    
                {data.cases}
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