const pName = document.querySelector('.name')
const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temprature =document.querySelector('.temprature');
const description =document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');


async function checkWeather(city){
   const API="cca8f199f064740a108998a9e79cdbaa";
   const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`;

   const weather_data = await fetch(`${url}`).then(response => response.json());

   console.log(weather_data);

   if(weather_data.cod ===`404`){
      location_not_found.style.display ="flex";
      weather_body.style.display = "none"
      console.log("error")
      return;
   }
   
   location_not_found.style.display ="none";
   weather_body.style.display = "flex";
   pName.innerHTML = `${weather_data.name}`;
   temprature.innerHTML = `${Math.round(weather_data.main.temp)}°C`;
   description.innerHTML =`${weather_data.weather[0].description}`;
   humidity.innerHTML =`${weather_data.main.humidity}%`;
   wind.innerHTML =`${weather_data.wind.speed}Km/H`

   switch(weather_data.weather[0].main){
        case 'Clouds':
        weather_img.src ="img/cloudy.svg";
        break;

        case 'Clear':
        weather_img.src ="img/day.svg";
        break;

        case 'Rain':
        weather_img.src ="img/rainy.svg";
        break;

        case 'Mist':
        weather_img.src ="img/haze.svg";
        break;

        case 'Snow':
        weather_img.src ="img/snow.svg";
        break;
   }
}


searchBtn.addEventListener('click', ()=>{
   checkWeather(inputBox.value);
});
