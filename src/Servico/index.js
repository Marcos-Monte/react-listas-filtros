import jogosExclusivos from "../Dados";

// Função: Retornar coleção de jogos exclusivos
export const retornarJogos = () => {
    return jogosExclusivos;
};

// Função: Filtrar coleção de dados por plataforma.
export const filtrarJogo = (plataforma) => {
    return jogosExclusivos.filter(
        (jogo) => jogo.plataforma === plataforma
    );
};

// Função: Recebe texto do usuário e filtra se existe essa informação nas 'propriedades' dos objetos da coleção de dados.
export const buscarJogo = (textoUsuario) => {
    return jogosExclusivos.filter(
        (jogo) =>
            jogo.nome.toLowerCase().includes(textoUsuario.toLowerCase()) ||
            jogo.plataforma.toLowerCase().includes(textoUsuario.toLowerCase())
    );
};