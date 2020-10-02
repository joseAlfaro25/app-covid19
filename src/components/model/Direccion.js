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
import { usePosition } from "use-position";
import app from "../../services/auth/base";
import { getDistance } from "geolib";
/* global google */

const Map = (props) => {
  const watch = true;
  const { latitude, longitude } = usePosition(watch);

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
    //--Comportamiento de la ventana
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

  const _onClickModalI = async () => {
    await swal.fire({
      title: "Informacion del Usuario",

      html: `<p>
              <h5>${`${selectedCorona.nombre} ${selectedCorona.email}`}</h5>
            <img  width="250"
                height="350" src=${selectedCorona.photoUrl || ""} alt=""></img>
                <h6>${selectedCorona.detalles}</h6>
            </p>`,
    });

    const Localion = {
      latitude: latitude,
      longitude: longitude,
    };
  };

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 10.39972, lng: -75.51444 }}
      defaultOptions={{}}
    >
      {props.directions}

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
                      <div className="text-center mt-2"> <a  href={`tel:${selectedCorona.numeroT}`}>
                          {selectedCorona.numeroT}
                      </a></div>
           
            <h5 className="text-center"></h5>
            <h6 onClick={_onClickModalI} className="nav-link text-center">
              {" "}
              Detalles
            </h6>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

const MapWrapped = withScriptjs(withGoogleMap(Map));

function Direccion() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <MapWrapped
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
