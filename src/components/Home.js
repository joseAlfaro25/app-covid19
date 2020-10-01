import React, { Fragment } from 'react';
import CardMaps from './model/CardMap';
import DatosColombia from './model/DatosColombia'


const Home = () => {
    return (
      <Fragment>
      
       < div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        
        <div className="carousel-item active">
          <img
                src="https://i.ibb.co/VYhWMgC/service.png"
            className="d-block w-100"
            width="350"
                height="350"
                alt=""
          />
          <div className="carousel-caption d-none d-md-block"></div>
        </div>
        <div className="carousel-item">
          <img
                src="https://i.ibb.co/6sR40nV/1.png"
            className="d-block w-100"
            width="350"
                height="350"
                alt=""
          />
          <div className="carousel-caption d-none d-md-block"></div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
        
                 
          <h3 className="text-center">Mundo</h3>
            <CardMaps />
            <h3 className="text-center">Colombia</h3>
            <DatosColombia/>
       </Fragment>
     );
}
 
export default Home;