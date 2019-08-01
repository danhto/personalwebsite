import React from 'react'
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBProgress, MDBBadge } from "mdbreact";
import { CarouselProvider, Slider, Slide, ImageWithZoom, Dot } from 'pure-react-carousel';
const robot = require('../../assets/irobot.jpg')
const knowledge = require('../../assets/knowledge.png')
const cat = require('../../assets/cat.jpg')
const grandcanyon = require('../../assets/grandcanyon.jpg')
const iceland = require('../../assets/iceland.jpg')
const japan = require('../../assets/japan.jpg')
const leafs = require('../../assets/leafs.jpg')
const prague = require('../../assets/prague.jpg')
const snowboarding = require('../../assets/snowboarding.jpg')

interface Props {
    display: number,
    title: string
}

interface State {
    text: string,
    autoPlay: boolean,
    counter: number
}

const descriptionArray = [
    "My dog, Cat!",
    "Hockey: The Toronto Maple Leafs!",
    "Snowboarding!",
    "Traveling: Japan!",
    "Traveling: Prague!",
    "Traveling: Iceland!",
    "Traveling: Grand Canyon!",
]

class MDBJumbotronV2 extends React.Component<Props,State> {
    constructor (props) {
        super(props)
        this.state = {
            text: descriptionArray[0],
            autoPlay: true,
            counter: 0,
        }
    }

    getLeadContent = () => {
        if (this.props.display === 1) {
            //return <p className='lead'>DAN TO</p>
        }
        else if (this.props.display === 2) {
            return (
                <div className="skill-title-content">
                    <p>
                        My proficiencies are many, but here are a few of my more notable ones!
                        <br />
                        Each skill is conveniently paired with an indicator of my comfort with it.
                    </p>
                    <img src={knowledge} />
                </div>
            )
        }
        else if (this.props.display === 3) {
            return (
                <p>
                    These are some of the things that fuel my soul!
                </p>
            )
        }
    }

    handleCat = () => {
        this.setState({
            text: "My dog, Cat!",
            counter: 0
        })
    }

    handleLeafs = () => {
        this.setState({
            text: "Hockey: The Toronto Maple Leafs!",
            counter: 1
        })
    }

    handleSnowboarding = () => {
        this.setState({
            text: "Snowboarding!",
            counter: 2
        })
    }

    handleJapan = () => {
        this.setState({
            text: "Traveling: Japan!",
            counter: 3
        })
    }

    handleIceland = () => {
        this.setState({
            text: "Traveling: Iceland!",
            counter: 5
        })
    }

    handlePrague = () => {
        this.setState({
            text: "Traveling: Prague!",
            counter: 4
        })
    }

    handleCanyon = () => {
        this.setState({
            text: "Traveling: Grand Canyon!",
            counter: 6
        })
    }

    updateHeader = () => {
        console.log("Updating header...")
        var ct = this.state.counter == 6 ? 0 : this.state.counter + 1

        this.setState({
            counter: ct,
            text: descriptionArray[ct]
        })
    }

    componentDidMount() {
        setInterval(this.updateHeader, 7500)
    }

    getBodyContent = () => {
        if (this.props.display === 1) {
            return (
                <div>
                    <p>
                        I was born and raised in Toronto, Canada. I graduated from 
                        York University with a Bachelor of Engineering in Computer Engineering 
                        and a Bachelor of Arts in Psychology. With these experiences I 
                        have obtained a certain set of skills, that many often describe 
                        as giving me special, nearly unfair, mastery over all things 
                        <b> human</b> and <b>machine</b>!
                    </p>
                    <img src={robot} />
                </div>
            )
        }
        else if (this.props.display === 2) {
            return (
                <div className="skill-summary">
                    <div className="skill-languages">
                        <h4>Java</h4>
                        <MDBProgress value={80} color="red" className='my-2' />
                        <h4>HTML/CSS</h4>
                        <MDBProgress value={60} className='my-2' />
                        <h4>Go Lang</h4>
                        <MDBProgress value={50} className='my-2' />
                        <h4>React</h4>
                        <MDBProgress value={40} className='my-2' />
                        <h4>Typescript/JS</h4>
                        <MDBProgress value={30} className='my-2' />
                        <h4>Python</h4>
                        <MDBProgress value={30} className='my-2' />
                    </div>
                    <div className="skill-others">
                        <h4>Agile</h4>
                        <MDBProgress value={90} className='my-2' />
                        <h4>REST</h4>
                        <MDBProgress value={65} className='my-2' />
                        <h4>Docker</h4>
                        <MDBProgress value={60} className='my-2' />
                        <h4>Design</h4>
                        <MDBProgress value={60} className='my-2' />    
                        <h4>Travis</h4>
                        <MDBProgress value={30} className='my-2' />
                        
                    </div>
                </div>
            )
        }
        else if (this.props.display === 3) {
            return (
                <div>
                    <div>
                    <MDBBadge className="mdb-badge-header" color="primary">{this.state.text}</MDBBadge>
                    </div>
                    <CarouselProvider
                        naturalSlideWidth={750}
                        naturalSlideHeight={475}
                        totalSlides={7}
                        isPlaying={this.state.autoPlay}
                        interval={7500}
                        >
                        <Dot slide={0} onClick={this.handleCat}>{}</Dot>
                        <Dot slide={1} onClick={this.handleLeafs}>{}</Dot>
                        <Dot slide={2} onClick={this.handleSnowboarding}>{}</Dot>
                        <Dot slide={3} onClick={this.handleJapan}>{}</Dot>
                        <Dot slide={4} onClick={this.handlePrague}>{}</Dot>
                        <Dot slide={5} onClick={this.handleIceland}>{}</Dot>
                        <Dot slide={6} onClick={this.handleCanyon}>{}</Dot>
                        <Slider>
                            <Slide className="slide-image-holder" index={0}>
                                <ImageWithZoom src={cat} />
                            </Slide>
                            <Slide className="slide-image-holder" index={1}>
                                <ImageWithZoom src={leafs} />
                            </Slide>
                            <Slide className="slide-image-holder" index={2}>
                                <ImageWithZoom src={snowboarding} />
                            </Slide>
                            <Slide className="slide-image-holder" index={3}>
                                <ImageWithZoom src={japan} />
                            </Slide>
                            <Slide className="slide-image-holder" index={4}>
                                <ImageWithZoom src={prague} />
                            </Slide>
                            <Slide className="slide-image-holder" index={5}>
                                <ImageWithZoom src={iceland} />
                            </Slide>
                            <Slide className="slide-image-holder" index={6}>
                                <ImageWithZoom src={grandcanyon} />
                            </Slide>
                        </Slider>
                    </CarouselProvider>
                </div>
            )
        }
    }
    

    render () {
        const leadContent = this.getLeadContent()
        const bodyContent = this.getBodyContent()

        return (
            <MDBContainer className="mt-5 text-center">
            <MDBRow>
              <MDBCol>
                <MDBJumbotron>
                    <h2 className="h1 display-3">{this.props.title}</h2>
                    {leadContent}
                    <hr className="my-2" />
                    {bodyContent}
                </MDBJumbotron>
              </MDBCol>
            </MDBRow>
          </MDBContainer>            
        )
    }
}

export default MDBJumbotronV2