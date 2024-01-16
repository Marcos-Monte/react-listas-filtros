import React from 'react';
import { Link } from 'react-router-dom';


import './style.css';

const Header = () => (
    <header>
        <Link className="link" to='/'>Completa</Link>
        <Link className="link" to='/botao'>Filtro-Botão</Link>
    </header>
)

export default Header;