import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class AddContact extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
        errors: {}
    }

    // xrisimopoioyme to [e.target.name] gia na anathesoume dynamika kai na glitwsoume 3 calls
    // opws name : e.target.value, email: e.target.value, ktl
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (dispatch, e) => {
        e.preventDefault();
        const { name, email, phone } = this.state;

        // check for errors 
        if (name === '') {
            this.setState({
                errors: { name: 'Name is required' }
            })
            return;
        }
        if (email === '') {
            this.setState({
                errors: { email: 'email is required' }
            })
            return;
        }
        if (phone === '') {
            this.setState({
                errors: { phone: 'phone is required' }
            })
            return;
        }

        const newContact = {
            name,
            email,
            phone
        }

        // mazi me to post stelnoume kai to payload mas ekei poy theloume na apothikeytoyn oi times lliws epistrefei ena id mono
        axios.post('https://jsonplaceholder.typicode.com/users', newContact)
            .then(res => dispatch({
                type: 'ADD_CONTACT',
                payload: res.data
            }));


        // dispatch({
        //     type: 'ADD_CONTACT',
        //     payload: newContact
        // });

        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        });

        this.props.history.push('/')
    }

    render() {
        const { name, email, phone, errors } = this.state;


        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header">Add Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGroup label="Name" name="name" placeholder="Enter Name.." value={name} onChange={this.onChange} error={errors.name} />
                                    <TextInputGroup label="Email" type="email" name="email" placeholder="Enter Email.." value={email} onChange={this.onChange} error={errors.email} />
                                    <TextInputGroup label="Phone" name="phone" placeholder="Enter phone" value={phone} onChange={this.onChange} error={errors.phone} />
                                    <input type="submit" value="Add Contact" className="btn btn-light btn-block" />
                                </form>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default AddContact;