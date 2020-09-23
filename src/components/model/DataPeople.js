import React, { } from 'react'


const DataPeople = () => {
    const [tareas, setTareas] = React.useState([])

    React.useEffect(() => {

        const obtenerDatos = async () => {
            const db = app.firestore()
            try {
                const data = await db.collection('datos').get()
                const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                console.log(arrayData)
                setTareas(arrayData)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerDatos()

    }, [])
    return (
        <Fragment>

        </Fragment>
    );
}
 
export default DataPeople;
