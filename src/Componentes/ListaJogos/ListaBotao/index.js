import React, { useState } from 'react';
import jogosExclusivos from '../../../Dados';
import ItemJogos from '../../ItemJogos';

import Header from '../../Header';

import './style.css';

function ListaBotao() {

    // Variavel de Estado que recebe a coleção de dados 
    const [listaJogos, setListaJogos] = useState(jogosExclusivos);

    // Função que filtra baseado na ação do usuário
    function filtrarJogo(filtro) {

        // Se a 'filtragem' for feita, executar o bloco de código
        // 'State' da variável de estado recebe          
        // Lista de Jogos filtrada 
        // comparação feita em cada jogo da lsita
        // propriedade 'plataforma' é identica a opção de filtro do usuário
        // Se o filtro, indicado pelo usuário estiver vazio. A lista completa deve aparecer
        // Condicional Ternária.
        filtro ? setListaJogos(jogosExclusivos.filter((jogo) => jogo.plataforma === filtro)) : setListaJogos(jogosExclusivos)



    }

    return (
        <div>
            <Header />

            <div className="lista">

                <h1 className="lista-titulo">
                    Lista de Jogos Exclusivos
                </h1>

                <div className="container-botoes">

                    <div className="botoes-plataformas">
                        {/* Cara botão recebe a  */}
                        <button className="botao xbox" onClick={() => filtrarJogo('xbox')}>Xbox</button>
                        <button className="botao play" onClick={() => filtrarJogo('playstation')}>Playstation</button>
                        <button className="botao nintendo" onClick={() => filtrarJogo('nintendo')}>Nintendo</button>
                    </div>

                    <button className="botao-limpar" onClick={() => filtrarJogo()}>Limpar Busca</button>

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
        </div>
    )
}

export default ListaBotao;