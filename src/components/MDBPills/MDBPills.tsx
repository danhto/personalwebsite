import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import MDBJumbotron from '../MDBJumbotron/MDBJumbotron'

class Pills extends Component {
  state = {
    items: {
      default: "1",
    }
  };

  togglePills = (type, tab) => e => {
    console.log("Toggling pill to state " + tab)
    console.log(this.state)
    console.log(this.state.items['default'] === "3")
    //e.preventDefault();
    if (this.state.items[type] !== tab) {
      let items = { ...this.state.items };
      items[type] = tab;
      this.setState({
        items
      });
    }
  };

  render() {
    return (
      <MDBContainer className="mt-4">
          <MDBRow>
            <MDBCol md="12">
              <h2>All things Dan To</h2>
              <MDBNav className="mt-5 nav-pills">
                <MDBNavItem>
                  <MDBNavLink to="#" active={this.state.items["default"] === "1"} onClick={this.togglePills("default", "1")} >
                    Quick Bio
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#" active={this.state.items["default"] === "2"} onClick={this.togglePills("default", "2")} >
                    Skills
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#" active={this.state.items["default"] === "3"} onClick={this.togglePills("default", "3")} >
                    Interests
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNav>
              <MDBTabContent activeItem={this.state.items["default"]} className="mdb-tab-content">
                <MDBTabPane tabId="1">
                  <MDBJumbotron title="Hello Me!" display={1}/>
                </MDBTabPane>
                <MDBTabPane tabId="2">
                  <MDBJumbotron title="Hello Skills!" display={2}/>
                </MDBTabPane>
                <MDBTabPane tabId="3">
                  <MDBJumbotron title="Hello Interests!" display={3}/>
                </MDBTabPane>
              </MDBTabContent>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      );
    }
}

export default Pills;