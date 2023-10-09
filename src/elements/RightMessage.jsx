import React from 'react';

const RightMessage = ({ senderName, messageText }) => {
    return (
        <div className="card right-card">
            <p className="card-title right-title">{senderName}</p>
            <p className="small-desc">{messageText}</p>
            <div className="go-corner-right"/>
        </div>
    );
};

export default RightMessage;