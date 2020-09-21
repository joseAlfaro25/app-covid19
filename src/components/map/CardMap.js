import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import Card from '../Card/Card';



const CardMaps = () => {

    const [latest, setLatest] = useState([])
    useEffect(() => {

        axios.get("https://corona.lmao.ninja/v3/covid-19/all")
            .then(res => {
                setLatest(res.data)

            }).catch()


    }, []);
        

    return (
    <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <Card title="Casos" cases={latest.cases} />
                    </div>
                    <div className="col-sm">
                        <Card title="Muertes" cases={latest.deaths} />
                    </div>
                    <div className="col-sm">
                        <Card title="Recuperados" cases={latest.recovered} />
                    </div>


                </div>

            </div>
        </Fragment>
    );
}
 
export default CardMaps;