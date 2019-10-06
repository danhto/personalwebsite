import React from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBContainer } from "mdbreact";
import {geolocated, GeolocatedProps} from 'react-geolocated'
import axios from 'axios'

type Weather = {
    locale: string,
    country: string,
    description: string,
    icon: string,
    temperature: number
}

interface State {
    weather: Weather,
    dataReady: boolean,
    errors: string
}

class PanelPage extends React.Component<GeolocatedProps> {
    state = {
        weather: {
            locale: "unknown",
            country: "unknown",
            description: "unknown",
            icon: "unknown",
            temperature: "unknown",
        },
        dataReady: false,
        errors: ""
    }    

    formatTemperature = (temperature) => {
        var color
        if (temperature >= 30) {
            color = "red"
        }
        else if (temperature >= 25 && temperature < 30) {
            color = "orange"
        }
        else if (temperature >= 15 && temperature < 25) {
            color = "green"
        }
        else if (temperature > 5 && temperature < 15) {
            color = "cyan"
        }
        else {
            color = "blue"
        }

        const pStyle = {
            color: color
        }

        return (
            <p className="temp-content-temperature" style={pStyle}>{temperature} °C</p>
        )
    }

    render() {
        const {dataReady, errors, weather} = this.state;
        const {coords, isGeolocationEnabled} = this.props;

        const getWeatherData = () => {
            console.log("Getting weather data with state...")
            console.log(this.state)
            if (coords && !dataReady && errors === "") {
                console.log("Making api call...")
                var lattlong = 'lat=' + coords.latitude + '&lon=' + coords.longitude
                var appId = "&units=metric&APPID=" + process.env.REACT_APP_WEATHER_API_KEY
                axios.get("https://api.openweathermap.org/data/2.5/weather?" + lattlong + appId)
                .then(response => {
                    console.log(response.data)
                    this.setState ({
                        weather: { 
                            locale: response.data.name,
                            country: response.data.sys.country,
                            description: response.data.weather[0].description,
                            icon: "http://openweathermap.org/img/wn/" + response.data.weather[0].icon + "@2x.png",
                            temperature: response.data.main.temp
                        },
                        dataReady: true
                    })
                })
                .catch(error => {
                    console.log(error)
                    if (error.response.status === 429) {
                        this.setState ({
                            errors: "Weather api request limits reached, cannot query local weather, but I hope it's pleasant!"
                        })
                    }
                })
            }

            return true
        }

        return (
            <MDBContainer>
                <MDBCard className="card-body" style={{ width: "22rem", marginTop: "1rem" }}>
                    <MDBCardTitle className="panel-title">Current Weather</MDBCardTitle>
                    <MDBCardText>
                        {   
                            isGeolocationEnabled && coords && getWeatherData() && dataReady ?
                            <div className="temp-content">
                                <p className="temp-content-location">The current temperature for {weather.locale} is:</p>
                                {this.formatTemperature(weather.temperature)}
                                <p className="temp-content-description">The overall forecast is {weather.description}:</p>
                                <img className="temp-content-icon" src={weather.icon} />
                            </div> :
                            <>No location data! {errors}</>
                        }
                    </MDBCardText>
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