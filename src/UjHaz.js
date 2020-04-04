import React, { useState } from 'react';

function UjHaz() {
    const [hazUrl, setHazUrl] = useState('https://www.imobiliare.ro/vanzare-case-vile/cluj-napoca/marasti/casa-de-vanzare-4-camere-X57Q11058?lista=5614675');
    const updateHazUrl = e => {
        setHazUrl(e.target.value);
    };

    const magic = () => {
        var xhr = new XMLHttpRequest()

        xhr.addEventListener('load', () => {
            console.log(xhr.responseText)
        })

        xhr.open('GET', 'http://localhost:8080/kbk/NewHouse?houseUrl=' + hazUrl)
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