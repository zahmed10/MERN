import React, { useState } from 'react';

const MessageForm = (props) => {
    const [color, setColor] = useState("");
    const [colorList, setColorList] = useState([]);

    const handleColor = (e) => {
        setColor(e.target.value);
    }

    
    
    const handleForm = (e) => {
        e.preventDefault();
        setColorList([color, ...colorList]);


    }

    return (

        <div class="container">


    <form onSubmit={ handleForm }>
            <div>
                {/* {JSON.stringify(colorList)} */}
                <label>Color: </label>
                <input type="text" onChange={ handleColor } value={color} />
                {/* {
                    firstError ?
                    <p style={{color:'red'}}>{ firstError }</p> :
                    ''
                } */}
            </div>
            <input type="submit" value="Submit" />
        </form>
        <div class="d-flex justify-content-evenly">

        { colorList.map( (color, i) => {
            return <div key={i} style={{backgroundColor: color, width:70, height:70}}></div>
        })
        }
        </div>
        </div>

        
    )

    
        
    

    


}

export default MessageForm;