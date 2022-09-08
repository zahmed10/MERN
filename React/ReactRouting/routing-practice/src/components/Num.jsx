import { useParams } from "react-router";

const Num = (props) => {
    const {num} = useParams();

    return (
        <div>
            <h1>The number is: {num}</h1>
            
        </div>
    )
}

export default Num
