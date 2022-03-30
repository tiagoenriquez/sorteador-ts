import ElementoType from "../../models/Elemento";
import TBody from "./TBody";
import THead from "./THead";
import './index.css';

interface ElementosTabelProps {
    elementos: ElementoType[];
    titulos: string[];
};

const ElementosTable: React.FC<ElementosTabelProps> = ({ elementos, titulos }) => {

    if (elementos.length > 0) {
        return (
            <table>
                <THead titulos={titulos} />
                <TBody elementos={elementos} />
            </table>
        );
    } else {
        return null;
    }

}

export default ElementosTable;