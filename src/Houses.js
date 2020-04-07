import React, {useState, useEffect} from 'react'
import HouseTile from './HouseTile';

function Houses() {
    const [houseJson, setHouseJson] = useState([]);

    useEffect(() => {
        getHouseList();
    },[]);

    const getHouseList = async () => {
        const response = await fetch('http://localhost:8080/kbk/HouseList');
        const data = await response.json();
        console.log(data);
        setHouseJson(data);
    } 

    return (
        <div className="houses">
            {houseJson.map(h => (
                <HouseTile
                    key={h.agency + h.price}
                    price={h.price}
                    agency={h.agency}
                    photos={h.photos}
                />
            ))}
        </div>
    );
}

export default Houses;