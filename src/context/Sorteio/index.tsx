import React, { createContext, useState } from "react";
import CategoriaType from "../../models/Categoria";
import ElementoType from "../../models/Elemento";
import GrupoType from "../../models/Grupo";

type SorteioType = {
    categoria: string;
    categorias: CategoriaType[];
    elemento: string;
    elementos: ElementoType[];
    grupos: GrupoType[];
    numeroDeGrupos: number;
};

type PropsSorteioContext = {
    state: SorteioType;
    setState: React.Dispatch<React.SetStateAction<SorteioType>>;
};

let categorias: CategoriaType[] = [];
let elementos: ElementoType[] = [];
let grupos: GrupoType[] = [];

const DEFAUL_VALUE = {
    state: {
        categoria: '',
        categorias: categorias,
        elemento: '',
        elementos: elementos,
        grupos: grupos,
        numeroDeGrupos: 0,       
    },
    setState: () => {},
};

const SorteioContext = createContext<PropsSorteioContext>(DEFAUL_VALUE);

const SorteioContextProvider: React.FC = ({ children }) => {
    const [state, setState] = useState(DEFAUL_VALUE.state);
    return (
        <SorteioContext.Provider
            value={{
                state,
                setState
            }}
        >
            {children}
        </SorteioContext.Provider>
    );
}

export { SorteioContextProvider };

export default SorteioContext;