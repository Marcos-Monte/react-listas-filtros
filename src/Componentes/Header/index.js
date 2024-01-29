import Image from 'next/image';

import Link from 'next/link';

import Lua from '../../../public/assets/moon.png';
import Sol from '../../../public/assets/sun.png';


import style from './style.module.css';

const Header = (props) => (

    <header className={style.topo}>
        <button className={style.botao_topo} onClick={props.trocarEstilo}>

            <Image
                className={style.imagem}
                src={props.imagemBotao ? Sol : Lua}
                alt="Imagem que refere ao estilo de cores do site"
            />

        </button>

        <div className={style.container_links}>
            <Link className={style.link} href='/'>Completa</Link>
            <Link className={style.link} href='/listaBotao'>Filtro Botão</Link>
            <Link className={style.link} href='/listaPesquisa'>Campo Pesquisa</Link>
        </div>

    </header>
)

export default Header;