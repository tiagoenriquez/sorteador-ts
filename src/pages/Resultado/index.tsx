import { useContext } from "react";
import { Button, GruposContainer, Title } from "../../components";
import SorteioContext from "../../context/Sorteio";
import './index.css';

const Resultado = () => {
    
    const { state, setState } = useContext(SorteioContext);

    function resetar(): void {
        setState({
            categoria: "",
            categorias: [],
            elemento: "",
            elementos: [],
            grupos: [],
            numeroDeGrupos: 0
        });
    }

    if (state.grupos.length > 0) {
        return (
            <div className="resultado">
                <Title>Resultado</Title>
                <GruposContainer />
                <Button
                    largo={true}
                    onClick={resetar}
                >
                    Resetar
                </Button>
            </div>
        );
    } else {
        return null;
    }

}

export default Resultado;