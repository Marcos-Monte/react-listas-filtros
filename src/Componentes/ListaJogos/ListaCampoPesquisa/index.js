import React, { useState } from 'react';
import ImagemLupa from '../../../assets/lupa.png';
import ItemJogos from '../../ItemJogos';

import { buscarJogo, filtrarJogo, retornarJogos } from '../../../Servico';

import './style.css';

function ListaCampoPesquisa() {

    const [listaJogos, setListaJogos] = useState(retornarJogos());

    const [textoBusca, setTextoBusca] = useState("");

    function handleFiltrarBotao(filtro) {

        setListaJogos(filtrarJogo(filtro))
        setTextoBusca("")
    }

    // Função atribuída ao botão de limpar pesquisa
    function limparBotao() {

        setListaJogos(retornarJogos())
        setTextoBusca("")
    }

    // Função que recebe 'String' do Input de Busca do usuário
    function handleBuscarJogo(textoUsuario) {

        setTextoBusca(textoUsuario);

        setListaJogos(buscarJogo(textoUsuario))

    }

    return (

        <div className="lista">

            <h1 className="lista-titulo">
                Lista de Jogos Exclusivos
            </h1>

            <div className="container-botoes">

                <div className="botoes-plataformas">
                    <button className="botao xbox" onClick={() => handleFiltrarBotao('xbox')}>Xbox</button>
                    <button className="botao play" onClick={() => handleFiltrarBotao('playstation')}>Playstation</button>
                    <button className="botao nintendo" onClick={() => handleFiltrarBotao('nintendo')}>Nintendo</button>
                </div>

                <button className="botao-limpar" onClick={() => limparBotao()}>Limpar Busca</button>

            </div>

            <div className="container-pesquisa">

                <img src={ImagemLupa} alt="lupa" />

                <input
                    type="text"
                    placeholder="Pesquisa um jogo ou plataforma"

                    // Evento que capta letra por letra que o usuario escreve
                    onChange={(event) => handleBuscarJogo(event.target.value)}

                    // Campo de busca recebe o valor do 'State'
                    value={textoBusca}
                />

            </div>

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

export default ListaCampoPesquisa;