import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import NumeroAleatorio from './components/basicos/NumeroAleatorio'
import Familia from './components/basicos/Familia'
import Membro from './components/basicos/MembroFamilia'
import Card from './components/layout/Card'

import './index.css'

export default () => (
    <div id="app">
        <h1>Fundamentos 3</h1>

        <div className="cards">
            <Card titulo="#04 - Componente com filhos" color="#00c8f8">
                <Familia sobrenome="Silva">
                    <Membro nome="Pedro"/>
                    <Membro nome="Ana"/>
                    <Membro nome="João"/>
                </Familia>
            </Card>

            <Card titulo="#03 - Desafio Aleatorio" color="#fa6900">
                <NumeroAleatorio min={1} max={20}/>
            </Card>

            <Card titulo="#02 - Componente com Parâmetro" color="#e94c6f">
                <ComParametro titulo="Componente com Título" subtitulo="Subtitulo do componente" />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#e8b71a">
                <Primeiro/>
            </Card>
        </div>
    </div>
);