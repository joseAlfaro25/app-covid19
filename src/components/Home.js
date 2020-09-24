import React, { Fragment } from 'react';
import CardMaps from './model/CardMap';
import DatosColombia from './model/DatosColombia'


const Home = () => {
    return (
      <Fragment>
      
       < div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        
        <div class="carousel-item active">
          <img
                src="https://i.ibb.co/VYhWMgC/service.png"
            className="d-block w-100"
            width="350"
                height="350"
                alt=""
          />
          <div class="carousel-caption d-none d-md-block"></div>
        </div>
        <div class="carousel-item">
          <img
                src="https://i.ibb.co/6sR40nV/1.png"
            className="d-block w-100"
            width="350"
                height="350"
                alt=""
          />
          <div class="carousel-caption d-none d-md-block"></div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
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