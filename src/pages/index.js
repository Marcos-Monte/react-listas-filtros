import Lista from '@/Componentes/Lista';
import ItemJogos from '../Componentes/ItemJogos';

import { retornarJogos } from '../Servico';


export default function Home() {

  const listaJogos = retornarJogos();

  return (
    <main >

      <Lista>
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
      </Lista>


    </main>
  );
}
