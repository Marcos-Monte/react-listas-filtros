import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ListaCompleta from '../Componentes/ListaJogos/ListaCompleta';

function Rotas() {
    return (

        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<ListaCompleta />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;