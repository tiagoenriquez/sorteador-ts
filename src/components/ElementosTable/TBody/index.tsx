import ElementoType from "../../../models/Elemento";
import './index.css';

interface TBodyProps {
    elementos: ElementoType[];
};

const TBody: React.FC<TBodyProps> = ({ elementos }) => {
    return (
        <tbody>
            {
                elementos.map((elemento, index) => 
                    <tr key={index}>
                        <td>{(index + 1).toString()}</td>
                        <td>{elemento.nome}</td>
                        <td>{elemento.categoria.nome}</td>
                    </tr>
                )
            }
        </tbody>
    );
}

export default TBody;