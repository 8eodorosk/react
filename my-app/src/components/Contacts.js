import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Jon Doe",
        email: "Jdoe@gmail.com",
        phone: "555-555-5555"
      },
      {
        id: 2,
        name: "Karen Smith",
        email: "ksmiht@gmail.com",
        phone: "555-555-5555"
      },
      {
        id: 3,
        name: "mitsos koouts",
        email: "mk@gmail.com",
        phone: "555-555-5555"
      }
    ]
  };

  render() {
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
