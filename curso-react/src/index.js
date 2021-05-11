import ReactDom from 'react-dom'
import React from 'react'

import './index.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

ReactDom.render(
    <div id="app">
        <Primeiro></Primeiro>
        <ComParametro titulo="Componente com Título" subtitulo="Subtitulo do componente"/>
    </div>,
    document.getElementById('root')
)