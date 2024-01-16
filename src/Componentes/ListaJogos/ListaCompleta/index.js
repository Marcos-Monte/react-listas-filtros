import React from 'react';
import jogosExclusivos from '../../../Dados';
import ItemJogos from '../../ItemJogos';

import './style.css';

function ListaJogos() {

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