import React, { Fragment } from 'react';
import GoogleMapReact from 'google-map-react';



const handleApiLoaded = (map, maps) => {
    // use map and maps objects
};

const Maps = () => {
    return (
        <Fragment>


            <div style={{ height: '100vh', width: '100%' }}>

                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDFDfpqPGMa3nhYq4mH19sBaTExV_3JVN8' }}
                    defaultCenter={{
                        lat: 59.95,
                        lng: 30.33
                    }
                    }
                    defaultZoom={10}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                >
                    <div
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    >Mi Localizacion</div>

                </GoogleMapReact>
            </div>

         
        </Fragment>
    );
}
 
export default Maps;



