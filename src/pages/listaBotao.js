import React, { useState } from 'react';
import ItemJogos from '../Componentes/ItemJogos';

import { filtrarJogo, retornarJogos } from '../Servico';


import style from '../styles/ListaBotao.module.css';

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

            <div className={style.container_botoes}>

                <div className={style.botoes_plataformas}>
                    {/* Cara botão recebe a  */}
                    <button className={`${style.botao} ${style.xbox}`} onClick={() => handleFiltrarJogo('xbox')}>Xbox</button>
                    <button className={`${style.botao} ${style.play}`} onClick={() => handleFiltrarJogo('playstation')}>Playstation</button>
                    <button className={`${style.botao} ${style.nintendo}`} onClick={() => handleFiltrarJogo('nintendo')}>Nintendo</button>
                </div>

                <button className={style.botao_limpar} onClick={() => handleFiltrarJogo()}>Limpar Busca</button>

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