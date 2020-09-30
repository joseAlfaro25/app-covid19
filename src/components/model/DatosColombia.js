import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import Card from '../Card/Card';

const Datos = () => {
    
    const [latest, setLatest] = useState([])
    //https://corona.lmao.ninja/v3/covid-19/countries/colombia
    useEffect(() => {
        axios.get("https://corona.lmao.ninja/v3/covid-19/countries/colombia")

            .then(res => {
                setLatest(res.data)

            }).catch((erro) => {
                console.log(erro)
            });


    }, []);

   

    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <Card title="Casos" cases={latest.cases} newCase={latest.todayCases}/>
                    </div>
                    <div className="col-sm">
                        <Card title="Muertes" cases={latest.deaths} newCase={latest.todayDeaths}/>
                    </div>
                    <div className="col-sm">
                        <Card title="Recuperados" cases={latest.recovered} newCase={latest.todayRecovered}/>
                    </div>


                </div>

            </div>





        </Fragment>
    );
}
 
export default Datos;