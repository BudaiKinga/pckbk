import React, { useState } from 'react';
import axios from 'axios';

function UjHaz() {
    const [hazUrl, setHazUrl] = useState('');
    const updateHazUrl = e => {
        setHazUrl(e.target.value);
    };

    const magic = () => {
        console.log(hazUrl);
        
        
        var xhr = new XMLHttpRequest()

        // get a callback when the server responds
        xhr.addEventListener('load', () => {
        // update the state of the component with the result here
            console.log(xhr.responseText)
        })
        // open the request with the verb and the url
        xhr.open('GET', 'http://localhost:8080/kbk/')
        // send the request
        xhr.send()
    };

    return (
        <form>
            <input type="text" value={hazUrl} size="50" onChange={updateHazUrl} />
            <button type="button" onClick={magic}>VingardiumLeviosaaa</button>
        </form>
    );
}

export default UjHaz;