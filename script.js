const api="const api="5e3e4b9ed8fa97d8b1aa477447020112";

async function getWeather(){

const city=document.getElementById("city").value;

const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api}`;

const response=await fetch(url);

const data=await response.json();

const weather=document.getElementById("weather");

if(data.cod=="404"){

weather.innerHTML="<h2>Місто не знайдено</h2>";

return;

}

weather.innerHTML=`

<h2>${data.name}, ${data.sys.country}</h2>

<h1>${Math.round(data.main.temp)}°C</h1>

<p>${data.weather[0].main}</p>

<p>💧 ${data.main.humidity}%</p>

<p>🌬 ${data.wind.speed} m/s</p>

`;

}";

async function getWeather(){

const city=document.getElementById("city").value;

const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api}`;

const response=await fetch(url);

const data=await response.json();

const weather=document.getElementById("weather");

if(data.cod=="404"){

weather.innerHTML="<h2>Місто не знайдено</h2>";

return;

}

weather.innerHTML=`

<h2>${data.name}, ${data.sys.country}</h2>

<h1>${Math.round(data.main.temp)}°C</h1>

<p>${data.weather[0].main}</p>

<p>💧 ${data.main.humidity}%</p>

<p>🌬 ${data.wind.speed} m/s</p>

`;

}
