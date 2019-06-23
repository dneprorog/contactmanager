import React, {Component} from 'react';
import { Consumer } from '../../context';

import PropTypes from 'prop-types';

class Contact extends Component {
    state = {
        showContactInfo: false
    };

    onDeleteClick = (id, dispatch) => {
        dispatch({
            type: 'DELETE_CONTACT',
            payload: id,
        });
    };

    onShowClick = e => {
        this.setState({
            showContactInfo: !this.state.showContactInfo
        })
    };

    render() {
        const { id, name, email, phone } = this.props.contact;
        const { showContactInfo } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return(
                        <div className="card card-body mb-3">
                            <h4>
                                {name}
                                <i
                                    onClick={this.onShowClick.bind(this)}
                                    className="fas fa-sort-down"
                                    style={{cursor: 'pointer'}}
                                />
                                <i
                                    className="fas fa-times"
                                    style={{
                                        cursor: 'pointer',
                                        color:'red',
                                        float: 'right'
                                    }}
                                    onClick={this.onDeleteClick.bind(this, id, dispatch,)}
                                />
                            </h4>
                            {showContactInfo ?
                                <ul className="list-group">
                                    <li className="list-group-item">Email: {email}</li>
                                    <li className="list-group-item">Phone: {phone}</li>
                                </ul>
                                : null
                            }
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
};

export default Contact;
