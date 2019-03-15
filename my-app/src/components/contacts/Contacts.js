import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends Component {

  render() {
    return (
      <Consumer>
        {/* to value erxetai apo ton consumer */}
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2"><span className="text-danger">Contact</span> List</h1>
              {contacts.map((contact) => (
                <Contact
                  // pername ta props sto contact component to opoio thelei ena key gia kapoio logo 
                  key={contact.id}
                  contact={contact}
                />
              ))}
            </React.Fragment>
          )
        }}
      </Consumer>
    )
  }
}

export default Contacts;
