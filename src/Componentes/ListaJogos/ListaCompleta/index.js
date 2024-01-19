import React from 'react';
import ItemJogos from '../../ItemJogos';

import './style.css';

import { retornarJogos } from '../../../Servico';

function ListaCompleta() {

    const listaJogos = retornarJogos();

    return (


        <div className="lista">

            <h1 className="lista-titulo">
                Lista de Jogos Exclusivos
            </h1>

            <div className="lista-conteudo">

                {
                    listaJogos.map(
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

export default ListaCompleta;