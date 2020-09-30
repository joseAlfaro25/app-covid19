import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import Card from '../Card/Card';



const CardMaps = () => {

    const [latest, setLatest] = useState([])
    useEffect(() => {

        axios.get("https://api.covid19api.com/summary")
            .then(res => {
                setLatest(res.data.Global)

            }).catch()


    }, []);
        

    return (
    <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <Card title="Casos" cases={latest.TotalConfirmed} newCase={latest.NewConfirmed} />
                    </div>
                    <div className="col-sm">
                        <Card title="Muertes" cases={latest.TotalDeaths} newCase={latest.NewDeaths}/>
                    </div>
                    <div className="col-sm">
                        <Card title="Recuperados" cases={latest.TotalRecovered} newCase={latest.NewRecovered}  />
                    </div>


                </div>

            </div>
        </Fragment>
    );
}
 
export default CardMaps;