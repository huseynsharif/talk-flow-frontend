import React from 'react';

const LeftMessage = ({ senderName, messageText }) => {
    return (
        <div className="card">
            <p className="card-title">{senderName}</p>
            <p className="small-desc">{messageText}</p>
            <div className="go-corner">
                <div className="go-arrow" />
            </div>
        </div>
    );
};

export default LeftMessage;