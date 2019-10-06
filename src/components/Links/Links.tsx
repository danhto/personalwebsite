import React from 'react'
import {MDBBtn, MDBContainer} from 'mdbreact'

const Links = () => {

    return (
        <MDBContainer className="links-content">
            <h2 className="links-header">Want to know even more? <br/>
                Try the links below if you couldn't find your answer here! <br/>
                Thanks for visiting!</h2>
            <MDBBtn className="links-linkedin" color="primary" href="https://www.linkedin.com/in/danhto">
                LinkedIn
            </MDBBtn>
            <br/>
            <MDBBtn className="links-github" color="secondary" href="https://github.com/danhto">
                Github
            </MDBBtn>
        </MDBContainer>
    )
    
}

export default Links