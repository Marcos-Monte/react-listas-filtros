export default function Lista(props) {

    return (
        <div className="lista">

            <h1 className="lista-titulo">
                Lista de Jogos Exclusivos
            </h1>

            <div className="lista-conteudo">
                {props.children}
            </div>

        </div>
    )

}