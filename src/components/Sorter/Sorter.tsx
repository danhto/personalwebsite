import React from 'react';

interface SorterProps {

}

interface SorterState {
    textValue: string,
    result: any,
    persons: Person[],
    rooms: number,
    roomSize: number,
    caseRooms: Room[],
}

type Room = {
    number: number,
    size: number,
    diversity: number,
    background: number,
    people: Person[],
}

type Person = {
    name: string,
    background: string,
    gender: string
}

class Sorter extends React.Component<SorterProps, SorterState> {
    constructor(props: SorterProps) {
        super(props);

        this.state = {
            textValue: "jim,tech,m\njohn,tech,m\ntish,bus,f\ncash,bus,m\nblip,bus,f\nchance,tech,f",
            result: "",
            persons: [],
            rooms: 0,
            roomSize: 0,
            caseRooms: []
        }
    }

    handleChange = (event) => {
        this.setState({
            textValue: event.target.value
        });
    }

    setSelectRooms = (event) => {        
        this.setState({
            rooms: event.target.value
        }, () => {
            // initialize case rooms
            if (this.state.roomSize > 0 && this.state.rooms > 0) {
                this.initializeCases();
            }
        });

    }

    setRoomSize = (event) => {
        this.setState({
            roomSize: event.target.value
        }, () => {           
            // initialize case rooms
            if (this.state.roomSize > 0 && this.state.rooms > 0) {
                this.initializeCases();
            }
        });
    }

    initializeCases = () => {
        let cases: Room[] = [];
        console.log("Initializing %s rooms with size %s", this.state.rooms, this.state.roomSize);
            
        for (let i = 0; i < this.state.rooms; i++) {
            const array = new Array<Person>(this.state.roomSize);

            const room: Room = {
                number: i,
                size: this.state.roomSize,
                diversity: 0,
                background: 0,
                people: array
            }

            cases.push(room);
        }

        this.setState({
            caseRooms: cases
        })

        console.log("Cases initialized");
        console.log(cases);
    }

    submitForm = () => {
        const {textValue} = this.state;
        
        let parse = textValue.split('\n');

        console.log("Parse result...")
        console.log(parse)

        parse.forEach(this.parseTextData)

        console.log("Further parse results...")
        console.log(this.state.persons)

        this.placePeopleInRoomsForCaseA();

        console.log("Creating persons")
        console.log(this.state.caseRooms);
    }

    parseTextData = (entry, index) => {
        let persons: Person[] = this.state.persons;
        const infoArray = entry.split(',');

        let newPerson: Person = {
            name: infoArray[0].trim(),
            background: infoArray[1].trim(),
            gender: infoArray[2].trim()
        }

        persons.push(newPerson);

        this.setState({
            persons: persons
        });
    }

    placePeopleInRoomsForCaseA = () => {
        console.log("Placing persons... %v", this.state.persons)
        for (let person of this.state.persons) {
            //let foundRoom = false;

            for (let room of this.state.caseRooms) {
                if (room.size - room.people.length !== 0) {
                    const res = this.checkRoomComposition(person, room);

                    if (res) {
                        break;
                    }
                }            
            }
        }
    }

    checkRoomComposition = (person: Person, room: Room) => {

        if (this.inBetween(room.diversity) === 2) {
            if (person.gender === "f") {
                room.diversity += 1;
                room.people.push(person);
                return true;                 
            }
        }
        
        if (this.inBetween(room.diversity) === -2) {
            if (person.gender === "m") {
                room.diversity -= 1;
                room.people.push(person);
                return true;
            }
        }

        if (this.inBetween(room.background) === 2) {
            if (person.background === "tech") {
                room.background += 1;
                room.people.push(person);
                return true;
            }
        }

        if (this.inBetween(room.background) === -2) {
            if (person.background === "bus") {
                room.background -= 1;
                room.people.push(person);
                return true;
            }
        }

        if (this.inBetween(room.background) === 1 && this.inBetween(room.diversity) === 1) {
            room.background += (person.background === "tech") ? 1 : -1;
            room.diversity += (person.gender === "f") ? 1 : -1;
            room.people.push(person);
            return true;
        }

        return false;
    }

    inBetween = (value) => {
        const {roomSize} = this.state;

        if (value >= 0) {
            if (value < roomSize - 2) {
                return 1;
            }

            return 2;
        }
        else if (value < 0) {
            if (Math.abs(value) < roomSize - 2) {
                return -1;
            }

            return -2;
        }

        return 0;
    }

    render() {
        if (true) {
            return (
                <div className="placeholder">
                    Not quite ready yet ...
                </div>
            )
        }

        return (
            <div className="wrapper">
                <div>
                    <p># of rooms</p>
                    <select onChange={item => this.setSelectRooms(item)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    <p>Size of each room</p>
                    <select onChange={item => this.setRoomSize(item)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <div>
                    <label>Enter values in this format: name, background, gender</label><br/>
                    <textarea value={this.state.textValue} cols={35} rows={100} onChange={this.handleChange} /> 
                    <input type="button" value="Submit" onClick={this.submitForm}/>
                </div>
                <div className="output">
                    <p>{this.state.result}</p>
                </div>
            </div>
        )
    }
}

export default Sorter;