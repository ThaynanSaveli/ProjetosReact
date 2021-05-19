import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import NumeroAleatorio from './components/basicos/NumeroAleatorio'
import Card from './components/layout/Card'

import './index.css'

export default () => (
    <div id="app">
        <h1>Fundamentos 3</h1>

        <Card titulo="Exemplo de Card"></Card>

        <NumeroAleatorio min={1} max={20}></NumeroAleatorio>
        <ComParametro titulo="Componente com Título" subtitulo="Subtitulo do componente" />
        <Primeiro></Primeiro>
    </div>
);