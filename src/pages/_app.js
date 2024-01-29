import { useState } from 'react';
import Header from '../Componentes/Header';
import '../styles/globals.css';

import Head from 'next/head';

import Icone from '../../public/assets/icons8-controle-50.png';


function App({ Component, pageProps }) {

  const claro = 'light';
  const escuro = 'dark';

  const [estilo, setEstilo] = useState(false);

  function alterarEstilo() {

    setEstilo(!estilo)


  }

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href={Icone} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Web site created using create-react-app" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <title>Listas de Jogos - Dinâmica</title>
      </Head>

      <div className={`body ${estilo ? escuro : claro}`}>


        <Header
          imagemBotao={estilo}
          estilo={estilo ? claro : escuro}
          trocarEstilo={alterarEstilo}
        />

        <Component {...pageProps} />;

      </div>
    </>
  );
}

export default App;
