import { ChangeEvent, useContext } from "react";
import SorteioContext from "../../context/Sorteio";
import CategoriaType from "../../models/Categoria";
import ElementoType from "../../models/Elemento";
import Button from "../Button";
import Input from "../Input";
import './index.css';

const NovoElemento = () => {

    const { state, setState} = useContext(SorteioContext);

    function editarElemento(event: ChangeEvent<HTMLInputElement>): void {
        setState({
            ...state,
            elemento: event.target.value
        });
    }

    function editarCategoria(event: ChangeEvent<HTMLInputElement>): void {
        setState({
            ...state,
            categoria: event.target.value
        });
    }

    function verificarCategoria(categorias: CategoriaType[]): number {
        let indice = -1
        categorias.forEach((categoria, index) => {
            if (categoria.nome === state.categoria) {
                indice = index;
            }
        });
        return indice;
    }

    function atualizarCategorias(categorias: CategoriaType[], indice: number): CategoriaType {
        let categoria: any = {};
        if (indice > -1) {
            let categoriaExistente = categorias[indice];
            categoriaExistente.ocorrencias++;
            categoria = categoriaExistente;
            categorias[indice] = categoria;
        } else {
            categoria = {
                nome: state.categoria,
                ocorrencias: 1
            };
            categorias.push(categoria);
        }
        setState({
            ...state,
            categorias: categorias
        });
        return categoria;
    }

    function adicionarElemento(categoria: CategoriaType, elementos: ElementoType[]): void {
        elementos.push({
            nome: state.elemento,
            categoria: categoria
        });
        setState({
            ...state,
            elementos: elementos
        });
    }

    function adicionarDados(): void {
        let categoriasIncrementado = state.categorias;
        let indice = verificarCategoria(categoriasIncrementado);
        let categoria = atualizarCategorias(categoriasIncrementado, indice);
        let elementosIncrementado = state.elementos;
        adicionarElemento(categoria, elementosIncrementado);
        setState({
            ...state,
            categoria: "",
            elemento: ""
        });
        document.getElementById("elemento-novo")?.focus();
    }

    return (
        <div className="novo-elemento">
            <Input
                autoFocus={true}
                id="elemento-novo"
                onChange={editarElemento}
                placeholder="Nome"
                readOnly={false}
                value={state.elemento}
            />
            <Input
                autoFocus={false}
                onChange={editarCategoria}
                placeholder="Categoria"
                readOnly={false}
                value={state.categoria}
            />
            <Button
                largo={false}
                onClick={adicionarDados}
            >
                +
            </Button>
        </div>
    );

}

export default NovoElemento;