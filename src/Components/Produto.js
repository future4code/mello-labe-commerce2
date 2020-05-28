import React from 'react';

function Produto (props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.imageURL} alt=""/>
            <p> {props.value}</p>
        </div>
    ); 
}

export default Produto;