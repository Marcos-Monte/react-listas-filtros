import React from 'react';

import LogoNintendo from '../../assets/nintendo.jpg';
import LogoPlay from '../../assets/playstation.jpg';
import LogoXbox from '../../assets/xbox.png';

import './style.css';

function ItemJogos({ nome, plataforma }) {

    function imagem(plataforma) {

        switch (plataforma) {
            case 'xbox':
                return LogoXbox;

            case 'playstation':
                return LogoPlay;

            default:
                return LogoNintendo;
        }
    }

    return (

        <div className="jogo">

            <img className="jogo-logo" src={imagem(plataforma)} title={plataforma} alt={`Logotipo da plataforma ${plataforma}`} />

            <div className="jogo-nome">
                <p>{nome}</p>
            </div>

        </div>
    )

}

export default ItemJogos;