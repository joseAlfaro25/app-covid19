import React, { useState, useEffect } from "react";
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
    InfoWindow,
    DirectionsRenderer
} from "react-google-maps";
import app from '../../services/auth/base'
/* global google */

const MapDirectionsRenderer =()=> {
    const [datos, setDatos] = useState([])
    const [directions, setDirections] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
       
        const obtenerDatos = async () => {
            const db = app.firestore()
            try {
                const data = await db.collection('datos').get()
                const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                console.log(arrayData)
                setDatos(arrayData)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerDatos()

        const waypoints = datos.map(p => ({
            location: { lat: p.latitude, lng: p.longitude },
            stopover: true
        }));
        const origin = waypoints.shift().location;
        const destination = waypoints.pop().location;

        const directionsService = new google.maps.DirectionsService();
        directionsService.route(
            {
                origin: origin,
                destination: destination,
                travelMode:  google.maps.TravelMode.DRIVING ,
                waypoints: waypoints
            },
            (result, status) => {
                console.log(result)
                if (status === google.maps.DirectionsStatus.OK) {
                    setDirections(result);
                } else {
                    setError(result);
                }
            }
        );
    });

    if (error) {
        return <h1>{error}</h1>;
    }
    return (
        directions && (
            <Map directions={directions} />
        )
    );
}


const Map = (props) => {

    const [datos, setDatos] = useState([])
    const [selectedCorona, setSelectedCorona] = useState(null);
    
    useEffect(() => {

        const obtenerDatos = async () => {
            const db = app.firestore()
            try {
                const data = await db.collection('datos').get()
                const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                console.log(arrayData)
                setDatos(arrayData)
            } catch (error) {
                console.log(error)
            }
        }
        obtenerDatos()
        //--Comportamiento de la ventana
        const listener = e => {
            if (e.key === "Escape") {
                setSelectedCorona(null);
            }
        };
        window.addEventListener("keydown", listener);

        return () => {
            window.removeEventListener("keydown", listener);
        };
        //--
        

    }, [])

   
    
    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 10.3997200, lng: -75.5144400 }}
            defaultOptions={{}}
        >
            
            {props.directions}
             


            {datos.map((data, index) => (
                <Marker //Marca principal
                   
                    key={data.id}

                    position={{
                        lat: parseFloat(data.latitude),
                        lng: parseFloat(data.longitude)
                    }}
                    onClick={() => {
                        setSelectedCorona(data);
                    }}
                    icon={{
                        url: `https://www.flaticon.com/svg/static/icons/svg/929/929426.svg`,
                        scaledSize: new window.google.maps.Size(25, 25)
                    }}
                />
                
            ))}
            
            {selectedCorona && (
                <InfoWindow
                    onCloseClick={() => {
                        setSelectedCorona(null);
                    }}
                    position={{
                        lat: parseFloat(selectedCorona.latitude),
                        lng: parseFloat(selectedCorona.longitude)
                    }}
                >
                    <div>
                        <h4>{selectedCorona.nombre}</h4>
                        <h5 className="text-center">{selectedCorona.email}</h5>
                        <img  width="150"
                            height="150" src={selectedCorona.photoUrl} ></img>
                        

                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

function Direccion() {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <MapWrapped
                googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places/nearbysearch/json?location=-33.8670522,151.1957362&radius=2500&type=restaurant&key=AIzaSyCSNjjdr6hW2qOVYI7n2SXlyb7-YAaYCSk"}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    );
}


 
export default Direccion;