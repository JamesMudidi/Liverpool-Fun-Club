import React, { Component } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl';

class Map extends Component {

    state = {
        viewport: {
            width: "50vw",
            height: "70vh",
            latitude: 0.339597,
            longitude: 32.587132,
            offsetLeft: -20,
            offsetTop: -10,
            zoom: 15
        }
    };

    render() {
        return (
            <ReactMapGL
                mapStyle="mapbox://styles/mapbox/streets-v11"
                mapboxApiAccessToken={"pk.eyJ1IjoibXVkaWRpIiwiYSI6ImNrMmhyY2w2NTEybGQzbXA1NGI3NzBiZGIifQ._Ombuao3cir9FFgWgE4fYg"}
                {...this.state.viewport}>
                <Marker latitude={0.339597} longitude={32.587132}>
                    <div>
                        <img src="images/pointer.png" alt="pointer" />
                        <strong>
                            Arena Sports Lounge
                        </strong>
                    </div>
                </Marker>
            </ReactMapGL>
        );
    }
}

export default Map;
