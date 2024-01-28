import '@/style/globals.css';
import React, { useState } from 'react';
import Header from '../../Componentes/Header';


function App({ Component, pageprops }) {

  const claro = 'light';
  const escuro = 'dark';

  const [estilo, setEstilo] = useState(false);

  function alterarEstilo() {

    setEstilo(!estilo)


  }



  return (

    <div className={`${style.body} ${estilo ? escuro : claro}`}>

      {/* <BrowserRouter> */}

      <Header
        imagemBotao={estilo}
        estilo={estilo ? claro : escuro}
        trocarEstilo={alterarEstilo}
      />

      {/* <Routes>
          <Route exact path="/" element={<ListaCompleta />} />
          <Route path="/botao" element={<ListaBotao />} />
          <Route path="/pesquisa" element={<ListaCampoPesquisa />} />
        </Routes>

      </BrowserRouter> */}

      <Componente {...pageProps} />

    </div>

  );
}

export default App;
