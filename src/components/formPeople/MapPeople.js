import React, { Fragment } from 'react';
import GoogleMapReact from 'google-map-react';




const MapPeople = (props) => {
    const handleApiLoaded = (map, maps) => {
        
    };

    

    return (
        <Fragment>


            <div style={{ height: '100vh', width: '100%' }} >

                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: [props.clave],
                        libraries: ['places'],
                        types: ['hospital']

                    }
                    }
                    defaultCenter={{
                        lat: 30,
                        lng: 5
                    }

                    }
                    defaultZoom={10}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}

                >
                    {props.obj}



                </GoogleMapReact>

            </div>


        </Fragment>
    );
}
 
export default MapPeople;