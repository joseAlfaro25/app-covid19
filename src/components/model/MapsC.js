import React, { useState, useEffect } from "react";
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
    InfoWindow
} from "react-google-maps";
import axios from 'axios';


function Map() {
    const [selectedCorona, setSelectedCorona] = useState(null);
    const [latest, setLatest] = useState([]);

    useEffect(() => {
        axios.get("https://disease.sh/v3/covid-19/jhucsse").then(res => {
            setLatest(res.data)
            console.log(res.data)

        }).catch((erro) => {
            console.log(erro)
        });
        const listener = e => {
            if (e.key === "Escape") {
                setSelectedCorona(null);
            }
        };
        window.addEventListener("keydown", listener);

        return () => {
            window.removeEventListener("keydown", listener);
        };
    }, []);

    return (
        <GoogleMap
            defaultZoom={3}
            defaultCenter={{ lat: 40.4211, lng: -70.6903 }}
            defaultOptions={{  }}
        >
            {latest.map((data, index) => (
                <Marker
                    key={index}

                    position={{
                        lat: parseFloat(data.coordinates.latitude),
                        lng: parseFloat(data.coordinates.longitude)
                    }}
                    onClick={() => {
                        setSelectedCorona(data);
                    }}
                    icon={{
                        url: `https://www.flaticon.com/svg/static/icons/svg/3017/3017381.svg`,
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
                        lat: parseFloat(selectedCorona.coordinates.latitude),
                        lng: parseFloat(selectedCorona.coordinates.longitude)
                    }}
                >
                    <div>
                        <h2>{selectedCorona.country}</h2>
                        <h5 className="text-center">{selectedCorona.stats.confirmed}</h5>
                        <p className="text-center">{selectedCorona.province}</p>
                    </div>
                </InfoWindow>
            )}
            
        </GoogleMap>
    );
}

const MapWr = withScriptjs(withGoogleMap(Map));

 function MapsC() {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <MapWr
                googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCSNjjdr6hW2qOVYI7n2SXlyb7-YAaYCSk"}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    );
}

export default  MapsC