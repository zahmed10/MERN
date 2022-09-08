import { useParams } from "react-router";
import Num from "./Num";
import Word from "./Word";

const Test = (props) => {
    const {num} = useParams();
    return (
        <div>

        {
            
            isNaN({num}) ? 
            <Word>{num}</Word>:
            <Num>{num}</Num>
        }
        </div>
    )
}

export default Test
