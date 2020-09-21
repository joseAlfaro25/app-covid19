import React, { Fragment } from 'react'

const Card = (props) => {
    return (
        <Fragment  >
            <div   className="row mt-2 mb-2">
                <div className="col-sm">
                    <div className="card ">
                        <div className="card-body ">
                            <h3 >{props.title}</h3>
                            <h3 className="card-title text-center">{props.cases}</h3>

                        </div>
                    </div>
                </div>

            </div>

        </Fragment>
    );
}

export default Card;