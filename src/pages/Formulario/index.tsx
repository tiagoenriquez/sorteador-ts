import { ChangeEvent, useContext } from "react";
import './index.css';
import { Button, CategoriasSelector, ElementosTable, Input, NovoElemento, Title } from "../../components";
import { sortear } from "../../services/SorteioService";
import SorteioContext from "../../context/Sorteio";

const Formulario = () => {
    
    const { state, setState } = useContext(SorteioContext);

    const titulosElementosTable = ["Índice", "Nome", "Categoria"];

    let numeroDeGrupos = state.numeroDeGrupos !== 0 ? state.numeroDeGrupos.toString() : "";

    function editarNumeroDeGrupos(event: ChangeEvent<HTMLInputElement>): void {
        setState({
            ...state,
            numeroDeGrupos: event.target.value !== "" ? parseInt(event.target.value) : 0
        });
    }

    function enviarParaSorteio(): void {
        setState({
            ...state,
            grupos: sortear(state.categorias, state.elementos, state.numeroDeGrupos)
        });
    }

    if (state.grupos.length > 0) {
        return null;
    } else {
        return (
            <div className="formulario">
                <Title>Bem vindo ao nosso sorteador</Title>
                <CategoriasSelector />
                <NovoElemento />
                <Input
                    autoFocus={false}
                    onChange={editarNumeroDeGrupos}
                    placeholder="Número de grupos"
                    readOnly={false}
                    value={numeroDeGrupos}
                />
                <Button
                    largo={true}
                    onClick={enviarParaSorteio}
                >Sortear</Button>
                <ElementosTable 
                    elementos={state.elementos}
                    titulos={titulosElementosTable}
                />
            </div>
        );
    }

}

export default Formulario;