const result = document.getElementById('info');
const api = 'https://www.whenisthenextmcufilm.com/api';

function getMCU(){
    fetch(api)
        .then(res => res.json())
        .then(data => {
            result.innerHTML = 
            `
            <img src='${data.poster_url}'/>
            <span class="text">
                <h1>${data.title} | ${data.type}</h1>
                <p>${data.overview}</p>
                <p>Release Date: ${data.release_date}</p>
                <p>Days until release: ${data.days_until}</p>
            </span>
            `;
    })
}

/* works without using <body onload="getMCU()">
getMCU(api);

function getMCU(api) {
    fetch(api)
        .then(res => res.json())
        .then(data => {
            result.innerHTML =
                `
            <img src='${data.poster_url}'/>
            <span class="text">
                <h1>${data.title} | ${data.type}</h1>
                <p>${data.overview}</p>
                <p>Release Date: ${data.release_date}</p>
                <p>Days until release: ${data.days_until}</p>
            </span>
            `;
            document.div.appendChild(result);
        })
}
*/
