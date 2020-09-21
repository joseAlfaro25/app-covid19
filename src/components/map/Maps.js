import React, { Fragment, useEffect, useState} from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
import Card from './Card';








const Maps = () => {

    const [latest, setLatest] = useState([]);
    const [results, setRes] = useState([])
    const handleApiLoaded = (map, maps) => {
        // use map and maps objects
    };
    useEffect(() => {
        axios.all([
            axios.get("https://corona.lmao.ninja/v3/covid-19/all"),
            axios.get("https://corona.lmao.ninja/v2/countries")
        ])
            .then(res => {
                setLatest(res[0].data)
                setRes(res[1].data)

            }).catch()
        
       
    }, []);

    
    const paises = results.map((data, index) => { 
        return (
           
            <div
                lat={data.countryInfo.lat}
                lng={data.countryInfo.long}
                style={{
                    color: "black",
                    backgroundColor: "red",
                    height: "25px",
                    width: "35px",
                    borderRadius:"5px"

                }
                }
                key={index}
                className="text-center"
            >
                {data.cases}
            </div>
        )
    })
        

    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <Card title="Muertes" cases={latest.cases} />
                    </div>
                    <div className="col-sm">
                        <Card title="Recuperados" cases={latest.deaths} />
                    </div>
                    <div className="col-sm">
                        <Card title="Recuperados" cases={latest.recovered} />
                    </div>


                </div>

            </div>

            <div style={{ height: '100vh', width: '100%' }} className="mt-2">

                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCuLsH_VNmShryp2eV2vHdTKK6U_pxvBdM' }}// la Key esta aqui por cuestiones practiva pero en producion la colocaria en el .env
                    defaultCenter={{
                        lat: 30,
                        lng: 45
                    }
                    }
                    defaultZoom={-4}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}

                >

                    {paises}
                </GoogleMapReact>
            </div>


        </Fragment>
    );
}

export default Maps;



