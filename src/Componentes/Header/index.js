import React from 'react';
import { Link } from 'react-router-dom';


import './style.css';

const Header = (props) => (
    <header>
        <button className="botao-topo" onClick={props.trocarEstilo}>{props.estilo}</button>

        <div className="container-links">
            <Link className="link" to='/'>Completa</Link>
            <Link className="link" to='/botao'>Filtro Botão</Link>
            <Link className="link" to='/pesquisa'>Campo Pesquisa</Link>
        </div>

    </header>
)

export default Header;