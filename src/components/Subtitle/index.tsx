import './index.css';

interface SubtitleProp {
    children: string;
}

const Subtitle = (prop: SubtitleProp) => {
    return (
        <h2>{prop.children}</h2>
    );
}

export default Subtitle;