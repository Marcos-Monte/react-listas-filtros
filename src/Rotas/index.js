import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ListaBotao from '../Componentes/ListaJogos/ListaBotao';
import ListaCompleta from '../Componentes/ListaJogos/ListaCompleta';

function Rotas() {
    return (

        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<ListaCompleta />} />
                <Route exact path="/botao" element={<ListaBotao />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;