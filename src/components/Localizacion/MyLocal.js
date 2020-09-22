import React, { Fragment } from 'react';
import { usePosition } from 'use-position';
import Registrar from '../formPeople/Register';

const MyLocal = () => {
    const watch = true;
    const {
        latitude,
        longitude,
        timestamp,
        accuracy,
        error,
    } = usePosition(watch);

    return (
        <Fragment>
           
            <Registrar lat={latitude} log={longitude}/>
            <MapsPeople lat={latitude} log={longitude}/>
                    
           

            latitude: {latitude}<br />
      longitude: {longitude}<br />
      timestamp: {timestamp}<br />
      accuracy: {accuracy && `${accuracy}m`}<br />
      error: {error}
           
        </Fragment>
        
    );
};

export default MyLocal