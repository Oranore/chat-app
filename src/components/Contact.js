import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

const Contact = (props) => {
    return <div className="Contact">
        <img className="avatar" src={props.avatar} alt={props.name} />
        <div>
            <div className="name">
                {props.name}
            </div>
            <div className="status">
                <div className={props.online ? 'status-online' : 'status-offline'}>
                </div>
                {props.online ? "Online" : "Offline"}
            </div>
        </div>
    </div>

}

Contact.propTypes ={
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
}


export default Contact
