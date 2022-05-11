const result = document.getElementById('result');

function getMCU(){
    fetch('https://www.whenisthenextmcufilm.com/api')
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
            `
    })
}