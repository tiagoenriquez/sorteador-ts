import './index.css';

interface THeadProps {
    titulos: string[];
};

const THead: React.FC<THeadProps> = ({ titulos }) => {
    return (
        <thead>
            <tr>
                {
                    titulos.map((titulo, index) => 
                        <td
                            key={index}
                        >
                            {titulo}
                        </td>
                    )
                }
            </tr>
        </thead>
    );
}

export default THead;