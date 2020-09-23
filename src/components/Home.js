import React, { Fragment } from 'react';
import CardMaps from './model/CardMap';
import DatosColombia from './model/DatosColombia'


const Home = () => {
    return (
        <Fragment>
          <h3 className="text-center">Mundo</h3>
            <CardMaps />
            <h3 className="text-center">Colombia</h3>
            <DatosColombia/>
       </Fragment>
     );
}
 
export default Home;