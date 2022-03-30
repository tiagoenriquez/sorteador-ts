import { useContext, useState } from 'react';
import SorteioContext from '../../context/Sorteio';
import './index.css';

const CategoriasSelector = () => {

    const { state, setState } = useContext(SorteioContext);
    const [selecionado, setSelecionado] = useState(false);

    function selecionarSeletor(): void {
        if (selecionado) {
            setSelecionado(false);
        } else {
            setSelecionado(true);
        }
    }

    function selecionarCategoria(event: any): void {
        setState({
            ...state,
            categoria: event.target.firstChild.textContent
        });
        setSelecionado(false);
    }

    if (state.categorias.length > 0) {
        return (
            <div className='selector-container'>
                <div 
                    className='title-selector'
                    onClick={selecionarSeletor}
                >
                    Selecione uma categoria
                </div>
                {
                    selecionado &&
                        <div>
                            <ul>
                                {
                                    state.categorias.map((categoria, index) => 
                                        <li
                                            key={index}
                                            value={categoria.nome}
                                            onClick={selecionarCategoria}
                                        >
                                            {categoria.nome} - {categoria.ocorrencias}
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                }
            </div>
        );
    } else {
        return null;
    }

}

export default CategoriasSelector;