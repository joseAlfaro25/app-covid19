import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
  DirectionsRenderer,
} from "react-google-maps";
import swal from "sweetalert2";
import app from "../../services/auth/base";


/* global google */

const Map = (props) => {
    

    const [datos, setDatos] = useState([]);
    const [selectedCorona, setSelectedCorona] = useState(null);
    const [state, setstate] = useState(null);

    useEffect(() => {
        const obtenerDatos = async () => {
            const db = app.firestore();
            try {
                const data = await db.collection("datos").get();
                const arrayData = data.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                console.log(arrayData);
                setDatos(arrayData);
            } catch (error) {
                console.log(error);
            }
        };
        obtenerDatos();
      
        const listener = (e) => {
            if (e.key === "Escape") {
                setSelectedCorona(null);
            }
        };
        window.addEventListener("keydown", listener);

        return () => {
            window.removeEventListener("keydown", listener);
        };
        //--
    }, []);

    const onClickModalI = async () => {
      const result= await swal.fire({
            title: "Informacion del Usuario",

            html: `<p>
              <h5>${`${selectedCorona.nombre} ${selectedCorona.email}`}</h5>
            <img  width="250"
                height="350" src=${selectedCorona.photoUrl || ""} alt=""></img>
                <h6>${selectedCorona.detalles}</h6>
            </p>`,
        });


    };

    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: 10.39972, lng: -75.51444 }}
            defaultOptions={{}}
        >


            {datos.map((data, index) => (
                <Marker //Marca principal
                    key={data.id}
                    position={{
                        lat: parseFloat(data.latitude),
                        lng: parseFloat(data.longitude),
                    }}
                    onClick={() => {
                        setSelectedCorona(data);
                    }}
                    icon={{
                        url: `https://www.flaticon.com/svg/static/icons/svg/3210/3210025.svg`,
                        scaledSize: new window.google.maps.Size(25, 25),
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
                        lng: parseFloat(selectedCorona.longitude),
                    }}
                >
                    <div>
                        <h4>{selectedCorona.nombre}</h4>
                        <a href={`mailto:${selectedCorona.email}`}>
                            {selectedCorona.email}
                        </a>
                        <div className="text-center mt-2"> <a href={`tel:${selectedCorona.numeroT}`}>
                            {selectedCorona.numeroT}
                        </a></div>

                        <h5 className="text-center"></h5>
                        <h6 onClick={onClickModalI} className="nav-link text-center">
                           
              Detalles
            </h6>
                    </div>
                </InfoWindow>
            )}
            <MapDirectionsRenderer
                places={datos}
                travelMode={google.maps.TravelMode.DRIVING}
            />

        </GoogleMap>
    );
};

const MapDirectionsRenderer = (props) => {
    const [directions, setDirections] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
       

        const waypoints =  props.places.map((data) => ({
           
            location: { lat: data.latitude, lng:data.longitude },
            stopover: false
        }));
        
        const origin = google.maps.LatLng(waypoints.location);
        const destination = google.maps.LatLng(waypoints.location);


        const directionsService = new google.maps.DirectionsService();
        directionsService.route(
            {
                origin: origin,
                destination: destination,
                travelMode: google.maps.TravelMode.DRIVING,
                waypoints: waypoints
            },
            (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    setDirections({
                        directions: result
                    });
                } else {
                    setError({ error: result });
                }
            }
        );
    },[]);

    if (error) {
        return <h1>{error}</h1>;
    }
    return (
        directions && (
            <DirectionsRenderer directions={directions} />
        )
    );



}





const MapW = withScriptjs(withGoogleMap(Map));

function Direccion() {
   

   
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <MapW
        googleMapURL={
          "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places/nearbysearch/json?location=10.3997200,-75.5144400&radius=2500&type=hospital&key=AIzaSyCSNjjdr6hW2qOVYI7n2SXlyb7-YAaYCSk"
        }
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default Direccion;
