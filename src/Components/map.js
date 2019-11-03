import React, { Component } from 'react'
import MapGL, { NavigationControl, Marker, Popup } from 'react-map-gl';
import { Icon } from 'semantic-ui-react';

const TOKEN = 'pk.eyJ1IjoibXVkaWRpIiwiYSI6ImNrMmhyY2w2NTEybGQzbXA1NGI3NzBiZGIifQ._Ombuao3cir9FFgWgE4fYg';
const navStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px'
};

const markerList = [
    {
        lat: 0.339597,
        long: 32.587132,
        info: 10
    }
];
class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: 0.339597,
                longitude: 32.587132,
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
                    {markerList.map((marker, index) => {
                        return (<div key={index} > <Marker longitude={marker.long} latitude={marker.lat}>
                            <Icon name='Arena Bar and Sports Lounge' size='big' onMouseEnter={() => this.setState({ popupInfo: true })} onMouseLeave={() => this.setState({ popupInfo: null })} />
                        </Marker> {this.renderPopup(index)}</div>);
                    }
                    )}
                </div>
            </MapGL>
        );
    }
}

export default Map;
