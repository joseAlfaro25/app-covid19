import React, { Fragment } from 'react';
import { usePosition } from 'use-position';
import Registrar from '../formPeople/Register';



const MyLocal = () => {
    const watch = true;
    const {
        latitude,
        longitude,
    } = usePosition(watch);

    return (
        <Fragment>
           
                    
            <Registrar lat={latitude} lng={longitude}/>
           
        </Fragment>
        
    );
};

export default MyLocal