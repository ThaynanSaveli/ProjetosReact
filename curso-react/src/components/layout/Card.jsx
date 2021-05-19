import React from 'react';

import '../../assets/css/Card.css'

export default (props) => {
    return(
        <div>
            <div className="card">
                <div className="title">{props.titulo}</div>
                <div className="content">
                    {props.children}
                </div>
            </div>
        </div>
    )
}