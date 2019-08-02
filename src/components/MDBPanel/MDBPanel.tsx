import React from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBContainer } from "mdbreact";
import {geolocated, geoPropTypes, GeolocatedProps} from 'react-geolocated'
import propTypes from 'prop-types'

class PanelPage extends React.Component<GeolocatedProps> {

    render() {
        return (
            <MDBContainer>
                <MDBCard className="card-body" style={{ width: "22rem", marginTop: "1rem" }}>
                    <MDBCardTitle>Panel Title</MDBCardTitle>
                    <MDBCardText>
                        {   
                            this.props.isGeolocationEnabled && this.props.coords ?
                            <div>Your latitude {this.props.coords.latitude} and longitude {this.props.coords.longitude}!</div> :
                            <div>No location data!</div>
                        }
                    </MDBCardText>
                    <div className="flex-row">
                    <a href="#!">MDBCard link</a>
                    <a href="#!" style={{ marginLeft: "1.25rem" }}>Another link</a>
                    </div>
                </MDBCard>
            </MDBContainer>
        )
    }
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(PanelPage);