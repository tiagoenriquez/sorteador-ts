import './index.css';

interface TitleProp {
    children: string;
}

const Title = (prop: TitleProp) => {
    return (
        <h1>{prop.children}</h1>
    );
}

export default Title;