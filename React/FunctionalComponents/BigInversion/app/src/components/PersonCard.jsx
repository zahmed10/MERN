import React from 'react';
const PersonCard = props => {
    return (
        <div>
            <h1>{props.last}, {props.first}</h1>
            <h3>Age: {props.age}</h3>
            <h3>Hair Color: {props.color}</h3>

        </div>
    );

}
export default PersonCard;