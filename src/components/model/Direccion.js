import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';



const Dirreccion = () => {
    
    useEffect(() => {

        const obtenerDatos = async () => {
            const db = app.firestore()
            try {
                const data = await db.collection('datos').get()
                const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                console.log(arrayData)
                setPacientes(arrayData)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerDatos()

    }, [])
    return ( <div></div> );
}
 
export default Dirreccion;