import React from 'react'

export default (params) => {
    const numero = Math.floor(Math.random() * (params.max - params.min)) + params.min;
    return (
        <div>
            <h3>Valor mínimo: {params.min}</h3>
            <h3>Valor Máximo: {params.max}</h3>
            <h3>Numero Gerado: {numero}</h3>
        </div>
    )
};