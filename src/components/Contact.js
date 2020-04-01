import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

const Contact = (props) => {
    return <div className="Contact">
        <img className="avatar" src={props.imgAvatar} alt={props.name} />
        <div>
            <div className="name">
                {props.name}
            </div>
            <div className="status">
                <div className={props.isOnline ? 'status-online' : 'status-offline'}>
                </div>
                {props.isOnline ? "Online" : "Offline"}
            </div>
        </div>
    </div>

}

Contact.propTypes ={
    name: PropTypes.string.isRequired,
    imgAvatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}


export default Contact
