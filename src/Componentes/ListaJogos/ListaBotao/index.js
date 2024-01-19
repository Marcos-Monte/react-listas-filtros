import React, { useState } from 'react';
import ItemJogos from '../../ItemJogos';

import { filtrarJogo, retornarJogos } from '../../../Servico';


import './style.css';

function ListaBotao() {

    // Variavel de Estado que recebe a coleção de dados 
    const [listaJogos, setListaJogos] = useState(retornarJogos());

    // Função que filtra baseado na ação do usuário
    function handleFiltrarJogo(filtro) {

        filtro ? setListaJogos(filtrarJogo(filtro)) : setListaJogos(retornarJogos())

    }

    return (

        <div className="lista">

            <h1 className="lista-titulo">
                Lista de Jogos Exclusivos
            </h1>

            <div className="container-botoes">

                <div className="botoes-plataformas">
                    {/* Cara botão recebe a  */}
                    <button className="botao xbox" onClick={() => handleFiltrarJogo('xbox')}>Xbox</button>
                    <button className="botao play" onClick={() => handleFiltrarJogo('playstation')}>Playstation</button>
                    <button className="botao nintendo" onClick={() => handleFiltrarJogo('nintendo')}>Nintendo</button>
                </div>

                <button className="botao-limpar" onClick={() => handleFiltrarJogo()}>Limpar Busca</button>

            </div>

            <div className="lista-conteudo">

                {
                    // Recebe variável de estado como 'array' para executar a função nativa '.map'
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

export default ListaBotao;