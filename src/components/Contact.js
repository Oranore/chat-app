import React from 'react';
import './Contact.css';

const imgAvatar = 'https://randomuser.me/api/portraits/men/13.jpg';
const nameAvatar = 'Oranore';
const isOnline = true;

const Contact = () => {
    return <div className="Contact">
        <img className="avatar" src={imgAvatar} />
        <div>
            <div className="name">
                {nameAvatar}
            </div>
            <div className="status">
                <div className="status-online">
                </div>
                {isOnline ? "Online" : "Offline"}
            </div>
        </div>
    </div>

}

export default Contact
