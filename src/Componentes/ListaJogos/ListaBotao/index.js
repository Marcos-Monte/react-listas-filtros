import React from 'react';
import jogosExclusivos from '../../../Dados';
import ItemJogos from '../../ItemJogos';

import Header from '../../Header';

import './style.css';

function ListaBotao() {

    const jogosFiltrados = jogosExclusivos.filter(
        (jogo) => jogo.plataforma === 'xbox'
    )

    return (
        <div>
            <Header />

            <div className="lista">

                <h1 className="lista-titulo">
                    Lista de Jogos Exclusivos
                </h1>

                <div className="lista-conteudo">

                    {
                        jogosFiltrados.map(
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
        </div>
    )
}

export default ListaBotao;