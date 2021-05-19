import React from 'react';

import '../../assets/css/Card.css'

export default (props) => {
    return(
        <div>
            <div className="teste">{props.titulo}</div>
            <div>Conteúdo</div>
        </div>
    )
}