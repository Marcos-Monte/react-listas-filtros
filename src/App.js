import './App.css';

import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './Componentes/Header';
import ListaBotao from './Componentes/ListaJogos/ListaBotao';
import ListaCampoPesquisa from './Componentes/ListaJogos/ListaCampoPesquisa';
import ListaCompleta from './Componentes/ListaJogos/ListaCompleta';

function App() {

  const [estilo, setEstilo] = useState('light');

  function alterarEstilo() {

    if (estilo === 'light') {
      setEstilo('dark')
    } else {
      setEstilo('light')
    }


  }

  return (

    <div className={`App ${estilo}`}>

      <BrowserRouter>
        <Header
          estilo={estilo}
          trocarEstilo={alterarEstilo}
        />
        <Routes>
          <Route exact path="/" element={<ListaCompleta />} />
          <Route path="/botao" element={<ListaBotao />} />
          <Route path="/pesquisa" element={<ListaCampoPesquisa />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
