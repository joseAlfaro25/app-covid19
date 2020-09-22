import React, { Fragment} from 'react';
import GoogleMapReact from 'google-map-react';
import CardMaps from './CardMap';





const Maps = (props) => {

    const handleApiLoaded = (map, maps) => {
        // use map and maps objects
    };
    
    
    
    

    return (
        <Fragment>
            <CardMaps/>

            <div style={{ height: '100vh', width: '100%' }} className="mt-2">

                <GoogleMapReact
                    bootstrapURLKeys={{ key:[props.clave]}}// la Key esta aqui por cuestiones practiva pero en producion la colocaria en el .env
                    defaultCenter={{
                        lat: 30,
                        lng: 45
                    }
                    }
                    defaultZoom={0}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}

                >
                    {props.pais}
                   
                </GoogleMapReact>
                
            </div>


        </Fragment>
    );
}

export default Maps;



