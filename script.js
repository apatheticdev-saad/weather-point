const apiKey = config.API_KEY;
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    const data = await response.json();

    if(data.cod == "401"){
        alert("Invalid API key. Wait 10 minutes or generate a new one.");
        return;
    }

    if(data.cod == "404"){
        alert("City not found");
        return;
    }

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})