import Lista from '@/Componentes/Lista';
import { useState } from 'react';
import ImagemLupa from '../../public/assets/lupa.png';
import ItemJogos from '../Componentes/ItemJogos';

import Image from 'next/image';

import { buscarJogo, filtrarJogo, retornarJogos } from '../Servico';

import styleBotao from '../styles/ListaBotao.module.css';
import style from '../styles/ListaPesquisa.module.css';

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

        <Lista>
            <>
                <div className={styleBotao.container_botoes}>

                    <div className={styleBotao.botoes_plataformas}>
                        {/* Cara botão recebe a  */}
                        <button className={`${styleBotao.botao} ${styleBotao.xbox}`} onClick={() => handleFiltrarBotao('xbox')}>Xbox</button>
                        <button className={`${styleBotao.botao} ${styleBotao.play}`} onClick={() => handleFiltrarBotao('playstation')}>Playstation</button>
                        <button className={`${styleBotao.botao} ${styleBotao.nintendo}`} onClick={() => handleFiltrarBotao('nintendo')}>Nintendo</button>
                    </div>

                    <button className={styleBotao.botao_limpar} onClick={() => limparBotao()}>Limpar Busca</button>

                </div>

                <div className={style.container_pesquisa}>

                    <Image
                        className={style.imagem}
                        src={ImagemLupa} alt="lupa"
                    />

                    <input
                        type="text"
                        placeholder="Pesquisa um jogo ou plataforma"

                        onChange={(event) => handleBuscarJogo(event.target.value)}

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

                </div></>
        </Lista>

    )
}

export default ListaCampoPesquisa;