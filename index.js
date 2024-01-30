const apiKey= "10d40d9d10770c2691fb562d68ed46ed";
const apiURL= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");

async function check_weather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    var data= await response.json();

    if(response.status == 404){
        document.querySelector(".error").style.display="block";
    }
    else{
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=  Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
        document.querySelector(".wind").innerHTML= data.wind.speed + "m/s";

        if(data.weather[0].main=="Clouds"){
            document.querySelector(".weather-app").src = "clouds.png";
        }
        else if(data.weather[0].main=="Clear"){
            document.querySelector(".weather-app").src = "clear.png";
        }
        else if(data.weather[0].main=="Rain"){
            document.querySelector(".weather-app").src = "rain.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            document.querySelector(".weather-app").src = "drizzle.png";
        }
        else if(data.weather[0].main=="Mist"){
            document.querySelector(".weather-app").src = "mist.png";
        }

        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    }
}


searchBtn.addEventListener("click", ()=>{
    check_weather(searchBox.value); 
});

// searchBtn.addEventListener('keypress', (e)=>{
//     if (e.key==='Enter'){
//         check_weather(searchBox.value);
//     }
// });
