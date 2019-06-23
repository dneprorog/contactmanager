import React, { Component } from 'react';
import uuid from 'uuid';

import TextInputGroup from '../layout/TextInputGroup';
import { Consumer } from '../../context';

class AddContact extends Component {
    state ={
        name: '',
        email: '',
        phone: '',
        errors: {},
    };

    onSubmit = (dispatch, e) => {
        e.preventDefault();

        const { name, email, phone } = this.state

        //Check for Errors
        if(name === '') {
            this.setState({
                errors: {
                    name: 'Name is required'
                }
            });
            return;
        }

        if(email === '') {
            this.setState({
                errors: {
                    name: 'Email is required'
                }
            });
            return;
        }

        if(phone === '') {
            this.setState({
                errors: {
                    phone: 'Email is required'
                }
            });
            return;
        }


        const newContact = {
            id: uuid(),
            name,
            email,
            phone
        };

        dispatch({
            type: 'ADD_CONTACT',
            payload: newContact,
        });

        //Clear State
        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {},
        });

        this.props.history.push('/')
    };

    onChange = e => this.setState({
        [e.target.name]: e.target.value,
    });

    render() {
        const { name, email, phone, errors } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return(
                        <div className="card mb-3">
                            <div className="card-header">
                                Add Contact
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGroup
                                        label="Name"
                                        onChange={this.onChange}
                                        value={name}
                                        placeholder="Enter Name"
                                        name="name"
                                        error={errors.name}
                                    />

                                    <TextInputGroup
                                        label="Email"
                                        onChange={this.onChange}
                                        value={email}
                                        placeholder="Enter Email"
                                        name="email"
                                        error={errors.email}
                                    />

                                    <TextInputGroup
                                        label="Phone"
                                        onChange={this.onChange}
                                        value={phone}
                                        placeholder="Enter Phone"
                                        name="phone"
                                        error={errors.phone}
                                    />

                                    <input
                                        type="submit"
                                        value="Add Contact"
                                        className="btn btn-light btn-block"
                                    />
                                </form>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        );
    }
}

export default AddContact;
