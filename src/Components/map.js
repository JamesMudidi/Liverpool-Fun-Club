import React, { Component } from 'react'
import MapGL, { NavigationControl, Marker, Popup } from 'react-map-gl';

const TOKEN = 'pk.eyJ1IjoibXVkaWRpIiwiYSI6ImNrMmhyY2w2NTEybGQzbXA1NGI3NzBiZGIifQ._Ombuao3cir9FFgWgE4fYg';
const navStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px'
};

const markerList = [
    {
        lat:0.339340,
        long: 32.587149,
        info: 10
    }
];
class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: 0.339340,
                longitude: 32.587149,
                zoom: 15,
                bearing: 0,
                pitch: 0,
                width: "50vw",
                height: "70vh",
            },
            popupInfo: null
        };
    }

    renderPopup(index) {
        return this.state.popupInfo && (
            <Popup tipSize={5}
                anchor="bottom-right"
                longitude={markerList[index].long}
                latitude={markerList[index].lat}
                onMouseLeave={() => this.setState({ popupInfo: null })}
                closeOnClick={true}>
                <p>Available beds:{markerList[index].info}</p>
            </Popup>
        )
    }

    render() {
        const { viewport } = this.state;
        return (
            <MapGL
                {...viewport}
                onViewportChange={(viewport) => this.setState({ viewport })}
                mapStyle="mapbox://styles/mapbox/streets-v10"
                mapboxApiAccessToken={TOKEN} >
                <div className="nav" style={navStyle}>
                    <NavigationControl onViewportChange={(viewport) => this.setState({ viewport })} />
                    <Marker latitude={0.339340} longitude={32.587149}>
                    <div>
                        <img src="images/pointer.png" alt="pointer" />
                        <strong>
                            Arena Sports Lounge
                        </strong>
                    </div>
                </Marker>
                </div>
            </MapGL>
        );
    }
}

export default Map;
