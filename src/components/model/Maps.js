import React, { Fragment} from 'react';
import GoogleMapReact from 'google-map-react';
import { usePosition } from 'use-position';





const Maps = (props) => {

    const handleApiLoaded = (map, maps) => {
        // use map and maps objects
    };
    
 const watch = true;
    const {
        latitude,
        longitude,
    } = usePosition(watch); 
    const lat =parseFloat(latitude)
    const lng= parseFloat(longitude)
    
    return (
        <Fragment>
            

            <div style={{ height: '100vh', width: '100%' }} >

                <GoogleMapReact
                    bootstrapURLKeys={{
                    key: [props.clave] ,
                        libraries: ['places'],
                        types: ['hospital']
                       
                    }
                    }
                    defaultCenter={{
                        lat: 30,
                        lng: 5
                    }
                        
                    }
                    defaultZoom={2}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}

                >
                    {props.obj}

                   
                   
                </GoogleMapReact>
                
            </div>


        </Fragment>
    );
}

export default Maps;



