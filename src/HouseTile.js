import React from 'react'

function HouseTile(props) {
    return (
        <div className="houseTile">
            <h3>HouseName</h3>
            <p> description</p>
            <p> price: {props.price} EUR </p>
        </div>
    );
}

export default HouseTile;