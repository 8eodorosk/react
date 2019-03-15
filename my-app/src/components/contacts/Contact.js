import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from '../../context';
import axios from 'axios';

class Contact extends Component {
  state = {
    showContacInfo: false
  };

  onShowClick = e => {
    this.setState({ showContacInfo: !this.state.showContacInfo });
  };

  onDeleteClick = (id, dispatch) => {

    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => dispatch({
        type: 'DELETE_CONTACT',
        payload: id
      }))
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContacInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}
                <i
                  className="fas fa-sort-down"
                  // prepei na kanw to bind ama de xrisimopoiisw arrow function
                  // stis custom methodous poy ftiaxnw
                  // onClick={this.onShowClick.bind(this)}
                  onClick={() =>
                    this.setState({ showContacInfo: !this.state.showContacInfo })
                  }
                  style={{ cursor: "pointer" }}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
              </h4>
              {showContacInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          )
        }}
      </Consumer>




    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
