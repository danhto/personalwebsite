import React from 'react';
import { MDBCard, MDBCardTitle, MDBCardText, MDBContainer } from "mdbreact";
import axios from 'axios'

type starship = {
    cargo_capacity: string, //The maximum number of kilograms that this starship can transport
    cost_in_credits: string, //The cost of this starship new, in galactic credits
    crew: string, // The number of personnel needed to run or pilot this starship
    length: string, //The length of this starship in meters
    model: string, //The model or official name of this starship
    name: string, //The name of this starship
    passengers: string, //The number of non-essential people this starship can transport
    starship_class: string //The class of this starship
}

type people = {
    birth_year: string,
    gender: string,
    hair_color: string,
    height: string,
    mass: string,
    name: string,
    skin_color: string,
    homeworld: planet,
    species: species,
}

type species = {
    name: string,
}

type planet = {
    climate: string,
    diameter: string,
    name: string,
    population: string,
    terrain: string,
}

interface Props {
    api: string,
}

interface State {
    index: number,
    dataRetrieved: boolean,
    planet: planet,
    person: people,
    starship: starship,
    errors: string
}

class MDBPanelStarwars extends React.Component<Props, State> {
    constructor(props) {
        super(props)
        this.state = {
            index: Math.floor(Math.random() * 40),
            dataRetrieved: false,
            planet: {} as planet,
            person: {} as people,
            starship: {} as starship,
            errors: "",
        } 
    }   

    getStarwarsData = () => {
        axios.get("https://swapi.py4e.com/api/"+this.props.api+"/"+this.state.index+"/")
        .then(response => {
            switch (this.props.api) {
                case "people": {
                    this.setState({
                        person: {
                            birth_year: response.data.birth_year,
                            gender: response.data.gender,
                            hair_color: response.data.hair_color,
                            height: response.data.height,
                            mass: response.data.mass,
                            name: response.data.name,
                            skin_color: response.data.skin_color,
                            homeworld: response.data.homeworld,
                            species: response.data.species,
                        },
                        dataRetrieved: true
                    })
                    return
                }
                case "planet": {
                    this.setState({
                        planet: {
                            climate: response.data.climate,
                            diameter: response.data.diameter,
                            name: response.data.name,
                            population: response.data.population,
                            terrain: response.data.terrain,

                        },
                        dataRetrieved: true
                    })
                    return
                }
                case "starships": {
                    this.setState({
                        starship: {
                            cargo_capacity: response.data.cargo_capacity, //The maximum number of kilograms that this starship can transport
                            cost_in_credits: response.data.cost_in_credits, //The cost of this starship new, in galactic credits
                            crew: response.data.crew, // The number of personnel needed to run or pilot this starship
                            length: response.data.length, //The length of this starship in meters
                            model: response.data.model, //The model or official name of this starship
                            name: response.data.name, //The name of this starship
                            passengers: response.data.passengers, //The number of non-essential people this starship can transport
                            starship_class: response.data.starship_class //The class of this starship
                        },
                        dataRetrieved: true
                    })
                    return
                }
            }
        })
        .catch(error => {
            this.setState({
                errors: "Something happened can't get Star Wars goodies :("
            })
        })
    }

    componentDidMount() {
        this.getStarwarsData()
    }

    render() {
        const {person, starship, dataRetrieved, errors} = this.state;
        const {api} = this.props;

        const getStarwarsContent = () => {
            switch (api) {
                case "people": {
                    const pData = person

                    return (
                        <>
                            <div className="starwars-person-title">
                                <h3 className="starwars-name">
                                    {pData.name}
                                </h3>
                                <img src="https://www.mcicon.com/wp-content/uploads/2021/01/People_Human_1-copy-8.jpg" className="starwars-content-person-icon" /> 
                            </div>
                            <p className="starwars-content-data">
                                {pData.name} was born in the year {pData.birth_year}.
                                {pData.gender === "male" ? " He " : " She "} weighs {pData.mass} kg and is {pData.height} cm tall. 
                            </p>
                        </>
                    )
                }
                case "starships": {
                    const sData = starship

                    return (
                        <>
                        <div className="starwars-person-title">
                            <h3 className="starwars-name">
                                {sData.name}
                            </h3>
                            <img src="https://www.mcicon.com/wp-content/uploads/2021/07/Rocket-08.jpg" className="starwars-content-starship-icon" /> 
                        </div>
                        <p className="starwars-content-data">
                            Cost in galatic credits {sData.cost_in_credits} <br/>
                            Crew size needed to run starship {sData.crew} <br/>
                            Length in meters {sData.length} m <br/>
                            Offical name {sData.model} <br/>
                            Starship class: {sData.starship_class} <br/>
                        </p>
                    </>
                    )
                }
            }            
        }

        return (
            <MDBContainer>
                <MDBCard className="card-body" style={{ width: "22rem", marginTop: "1rem" }}>
                    <MDBCardTitle className="panel-title">Star Wars: Random Daily Education!</MDBCardTitle>
                    <MDBCardText>
                        {   
                            dataRetrieved ?
                            <div className="starwars-content">
                                {getStarwarsContent()}
                            </div> :
                            <>{errors}</>
                        }
                    </MDBCardText>
                </MDBCard>
            </MDBContainer>
        )
    }
}

export default MDBPanelStarwars