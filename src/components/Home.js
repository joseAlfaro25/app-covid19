import React, { Fragment } from 'react';

const Home = () => {
    return (
        <Fragment>

            <div className="">
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">

                        <div className="carousel-item active">
                            <img
                                src={"https://i.ibb.co/j54gjcV/Logo.jpg"}
                                className="d-block w-100"
                                width="780"
                                height="350"
                            />
                            <div className="carousel-caption d-none d-md-block"></div>
                        </div>
                        <div className="carousel-item">
                            <img
                                src="https://i.ibb.co/LQpxwP0/compu1.gif"
                                className="d-block w-100"
                                width="780"
                                height="350"
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
                </div>
       </Fragment>
     );
}
 
export default Home;