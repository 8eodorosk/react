import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  state = {
    showContacInfo: true
  };

  onShowClick = e => {
    this.setState({ showContacInfo: !this.state.showContacInfo });
  };

  render() {
    const { name, email, phone } = this.props.contact;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name}
          <i
            className="fas fa-sort-down"
            // prepei na kanw to bind ama de xrisimopoiisw arrow function
            // stis custom methodous poy ftiaxnw
            // onClick={this.onShowClick.bind(this)}
            onClick={this.onShowClick}
          />
        </h4>
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
