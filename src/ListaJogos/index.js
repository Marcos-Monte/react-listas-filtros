import React from 'react';
import ItemJogos from '../ItemJogos';
import jogosExclusivos from '../Jogos';

import LogoNintendo from '../assets/nintendo.jpg';
import LogoPlay from '../assets/playstation.jpg';
import LogoXbox from '../assets/xbox.png';


function ListaJogos() {

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
        <div className="lista">

            <h1 className="lista-titulo">
                Lista de Jogos Exclusivos
            </h1>

            <div className="lista-conteudo">

                {
                    jogosExclusivos.map(
                        (jogo) => (

                            <ItemJogos
                                key={jogo.id}
                                imagem={imagem(jogo.plataforma)}
                                nome={jogo.nome}
                                plataforma={jogo.plataforma}
                            />
                        )

                    )
                }

            </div>

        </div>
    )
}

export default ListaJogos;