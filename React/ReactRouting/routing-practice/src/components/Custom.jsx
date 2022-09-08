import { useParams } from "react-router";


const Custom = (props) => {
    const {word, color, background} = useParams();

    return (
        <h1 style={{color: {color}, backgroundColor: {background}}}>{word}</h1>
    );
}

export default Custom
