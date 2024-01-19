import React, { useState } from 'react';
import jogosExclusivos from '../../../Dados';
import ItemJogos from '../../ItemJogos';


import './style.css';

import ImagemLupa from '../../../assets/lupa.png';

function ListaCampoPesquisa() {

    const [listaJogos, setListaJogos] = useState(jogosExclusivos);

    // Variavel de Estado com valor 'vazio'
    const [textoBusca, setTextoBusca] = useState("");

    function filtrarBotao(filtro) {

        setListaJogos(

            jogosExclusivos.filter(
                (jogo) => jogo.plataforma === filtro
            )

        )

        // Sempre que um botão que tenha esse 'evento Click' for acionado:
        // O valor do 'input' de pesquisa será apagado
        setTextoBusca("")
    }

    // Função atribuída ao botão de limpar pesquisa
    function limparBotao() {

        setListaJogos(jogosExclusivos)
        // Sempre que um botão que tenha esse 'evento Click' for acionado:
        // O valor do 'input' de pesquisa será apagado
        setTextoBusca("")
    }

    // Função que recebe 'String' do Input de Busca do usuário
    function buscarJogo(textoUsuario) {


        // Se o 'State' não receber o valor do Input, a escrita não aparece no campo enquanto o usuário escreve
        setTextoBusca(textoUsuario);

        // State da Lista de Jogos recebe
        setListaJogos(


            // Coleção de jogos filtrada em cada jogo
            jogosExclusivos.filter((jogo) =>

                // Verificando em, uma OU outra, propriedades de cada jogo (nome e plataforma) 
                // Se o que o 'usuario está digitando' existe dentro delas.
                jogo.nome.toLowerCase().includes(textoUsuario.toLowerCase()) ||
                jogo.plataforma.toLowerCase().includes(textoUsuario.toLowerCase())

            )

        )
    }


    return (



        <div className="lista">

            <h1 className="lista-titulo">
                Lista de Jogos Exclusivos
            </h1>

            <div className="container-botoes">

                <div className="botoes-plataformas">
                    <button className="botao xbox" onClick={() => filtrarBotao('xbox')}>Xbox</button>
                    <button className="botao play" onClick={() => filtrarBotao('playstation')}>Playstation</button>
                    <button className="botao nintendo" onClick={() => filtrarBotao('nintendo')}>Nintendo</button>
                </div>

                <button className="botao-limpar" onClick={() => limparBotao()}>Limpar Busca</button>

            </div>

            <div className="container-pesquisa">

                <img src={ImagemLupa} alt="lupa" />

                <input
                    type="text"
                    placeholder="Pesquisa um jogo ou plataforma"

                    // Evento que capta letra por letra que o usuario escreve
                    onChange={(event) => buscarJogo(event.target.value)}

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