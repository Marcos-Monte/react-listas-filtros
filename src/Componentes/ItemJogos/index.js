import React from 'react';

import Image from 'next/image';

import LogoNintendo from '../../../public/assets/nintendo.jpg';
import LogoPlay from '../../../public/assets/playstation.jpg';
import LogoXbox from '../../../public/assets/xbox.png';

import style from './style.module.css';

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

        <div className={style.jogo}>

            <Image className={style.jogo_logo} src={imagem(plataforma)} title={plataforma} alt={`Logotipo da plataforma ${plataforma}`} />

            <div className={style.jogo_nome}>
                <p>{nome}</p>
            </div>

        </div>
    )

}

export default ItemJogos;