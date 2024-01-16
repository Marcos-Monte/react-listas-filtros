import React from 'react';

import './style.css';

function ItemJogos({ nome, plataforma, imagem }) {

    return (

        <div className="jogo">

            <img className="jogo-logo" src={imagem} title={plataforma} alt={`Logotipo da plataforma ${plataforma}`} />

            <div className="jogo-nome">
                <p>{nome}</p>
            </div>

        </div>
    )

}

export default ItemJogos;