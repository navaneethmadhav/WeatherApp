function Search() {
    country = c_Name.value;  //country=india
    console.log(country);


    fetch(`https://api.weatherapi.com/v1/current.json?key=643def91cb154a5391350822220312&q=${country}`)
        .then(res => res.json())
    .then(data => displayData(data)) //2nd function call

        .catch(error => {
            alert('Failed to fetch country data')
        })
}

//display data as card

function displayData(weatherDetails) {
    capital = weatherDetails['location'].country
    region = weatherDetails['location'].region
    temperature = weatherDetails['current'].temp_c
    temperature_f = weatherDetails['current'].temp_f
    humidity = weatherDetails['current'].humidity
    let htmlData = `

<div class="card-body">
<h3 class="card-title">Weather Details</h3>
</div>
<h4>Weather in ${country} is <span style="font-size: 35px;">${temperature}°C</span></h4>
<ul class="list-group list-group-flush">
<li class="list-group-item">Capital: ${capital}</li>
<li class="list-group-item">Region: ${region}</li>
<li class="list-group-item">Temperature in Farenheit: <span style="font-size: 20px;">${temperature_f}°F</span></li>
<li class="list-group-item">Humidity: <span style="font-size: 30px;">${humidity}%</span></li>
</ul>

`
result.innerHTML = htmlData
}