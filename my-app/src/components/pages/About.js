import React from 'react';

export default (props) => {
    return (
        <div>
            <h1 className="display-4" >{props.match.params.id}</h1>
            <p className="lead"> Simple App to manage contacts</p>
            <p className="text-secondary">Version 0.0.1</p>
        </div>
    )
}