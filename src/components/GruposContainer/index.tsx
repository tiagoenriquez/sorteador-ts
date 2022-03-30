import { useContext } from 'react';
import SorteioContext from '../../context/Sorteio';
import ElementosTable from '../ElementosTable';
import Subtitle from '../Subtitle';
import './index.css';

const GruposContainer = () => {

    const { state } = useContext(SorteioContext);

    const titulos = ["Índice", "Nome", "Categoria"];

    return (
        <div className='grupos'>
            {
                state.grupos.map((grupo, index) => 
                    <div 
                        className='grupo'
                        key={index}
                    >
                        <Subtitle>{`Grupo ${grupo.numero.toString()}`}</Subtitle>
                        <ElementosTable
                            elementos={grupo.elementos}
                            titulos={titulos}
                        />
                    </div>
                )
            }
        </div>
    );
}

export default GruposContainer;