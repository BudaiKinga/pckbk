import React from 'react'
import HouseTile from './HouseTile';

function Houses() {
    return (
        <div className="houses">
            <HouseTile price="100.000" />
            <HouseTile price="110.000" />
            <HouseTile price="90.000" />
            <HouseTile price="130.000" />
            <HouseTile price="130.000" />
            <HouseTile price="130.000" />
            <HouseTile price="130.000" />
            <HouseTile price="130.000" />
        </div>
    );
}

export default Houses;