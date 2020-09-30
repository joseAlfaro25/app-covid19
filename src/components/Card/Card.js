import React, { Fragment } from 'react'

const Card = (props) => {
    return (
        <Fragment  >
            <div className="row mt-2 mb-2 " >
                
                <div className="col-sm">
                    <div className="card  bg-light ">
                        <div className="card-body ">
                            <h3 >{props.title} </h3>
                            <div className="row">
                                <h3 className="card-title text-center col-7">{props.cases}</h3>
                                <h4>+</h4>

                                <h6 className="card-title text-center col-4 mt-2 text-success">({props.newCase})</h6>


                            </div>
                                    </div>
                    </div>
                </div>

            </div>

        </Fragment>
    );
}

export default Card;