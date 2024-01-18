import React from 'react';
import { Link } from 'react-router-dom';

import Lua from '../../assets/moon.png';
import Sol from '../../assets/sun.png';


import './style.css';

const Header = (props) => (
    <header>
        <button className="botao-topo" onClick={props.trocarEstilo}>

            <img src={props.imagemBotao ? Sol : Lua} alt="Imagem que refere ao estilo de cores do site" />

        </button>

        <div className="container-links">
            <Link className="link" to='/'>Completa</Link>
            <Link className="link" to='/botao'>Filtro Botão</Link>
            <Link className="link" to='/pesquisa'>Campo Pesquisa</Link>
        </div>

    </header>
)

export default Header;