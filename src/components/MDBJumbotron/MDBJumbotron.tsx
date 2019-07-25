import React from 'react'
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBProgress } from "mdbreact";

interface Props {
    display: number
}

interface State {

}

class MDBJumbotronV2 extends React.Component<Props,State> {

    getLeadContent = () => {
        if (this.props.display === 1) {
            //return <p className='lead'>DAN TO</p>
        }
        else if (this.props.display === 2) {
            return (
                <div>
                    Sample skill at max proficiency:
                    <MDBProgress value={100} className='my-2' />
                </div>
            )
        }
    }

    getBodyContent = () => {
        if (this.props.display === 1) {
            return (
                <p>
                    I was born and raised in Toronto, Canada. I graduated from 
                    York University with a Computer Engineering degree. I had also 
                    previously obtained a Psychology degree from York University. 
                    With these experiences I have attained a certain set of skills, 
                    that many often describe as giving me special, nearly unfair, 
                    mastery over all things <b>human</b> and <b>machine</b>!
                </p>
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
    }

    render () {
        const leadContent = this.getLeadContent()
        const bodyContent = this.getBodyContent()

        return (
            <MDBContainer className="mt-5 text-center">
            <MDBRow>
              <MDBCol>
                <MDBJumbotron>
                    <h2 className="h1 display-3">Hello, world!</h2>
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