import './App.css';

import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './Componentes/Header';
import ListaBotao from './Componentes/ListaJogos/ListaBotao';
import ListaCampoPesquisa from './Componentes/ListaJogos/ListaCampoPesquisa';
import ListaCompleta from './Componentes/ListaJogos/ListaCompleta';

function App() {

  const claro = 'light';
  const escuro = 'dark';

  const [estilo, setEstilo] = useState(false);

  function alterarEstilo() {

    setEstilo(!estilo)


  }

  return (

    <div className={`App ${estilo ? escuro : claro}`}>

      <BrowserRouter>

        <Header
          estilo={estilo ? claro : escuro}
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
