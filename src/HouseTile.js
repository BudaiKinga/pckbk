import React from 'react'

function HouseTile(props) {
    return (
        <div className="houseTile">
            <h3>HouseName:</h3>
            <p> description</p>
            <p> price: {props.price} EUR </p>
            <p> agency: {props.agency} </p>
            <div className="imgContainer">
                <img src={props.photos[0]} alt=""></img>
            </div>
        </div>
    );
}

export default HouseTile;