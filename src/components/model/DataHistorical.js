import React, { Fragment } from "react";


const DataHistorical = () => {
    const [latest, setLatest] = useState([])
    useEffect(() => {
        axios.get("//https://corona.lmao.ninja/v2/historical/all")

            .then(res => {
                setLatest(res.data)

            }).catch((erro) => {
                console.log(erro)
            });


    }, []);  

    const dataHis = latest.map(data => { 

       

    })
    
    return (
        <Fragment>
        
        </Fragment>
    );
}
 
export default DataHistorical;