import React, {useState} from 'react';
import Houses from './Houses';

function Home() {

    const [response, setresponse] = useState('');

    const listHouses = () => {
        var xhr = new XMLHttpRequest()

        xhr.addEventListener('load', () => {
            setresponse(xhr.responseText)
        })

        xhr.open('GET', 'http://localhost:8080/kbk/HouseList')
        xhr.send()
    } 
    listHouses()

    return (
        <div>
            <p>{response}</p>
            <Houses />
        </div>
    );
}
export default Home;