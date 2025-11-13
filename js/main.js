
let locationn = document.querySelector('.location');
let todayTemprature = document.getElementById('todayTemperature');
let todayStatus = document.getElementById('todayStatus');
let todayIcon = document.getElementById('todayIcon');
let umbrella = document.getElementById('umbrella');
let speed = document.getElementById('speed'); 
let direction = document.getElementById('direction'); 
let nextDayIcon = document.getElementById('nextDayIcon'); 
let nextMaxDegree = document.getElementById('nextMaxDegree'); 
let nextMinDegree = document.getElementById('nextMinDegree'); 
let nextDayStatus = document.getElementById("nextDayStatus")
let thirdDayIcon = document.getElementById('thirdDayIcon'); 
let thirdDayMax = document.getElementById('thirdDayMax'); 
let thirdDayMin = document.getElementById('thirdDayMin'); 
let thirdDayStatus = document.getElementById('thirdDayStatus'); 

let searchWeather = document.getElementById('searchWeather');




let TodayDateDay =document.getElementById('TodayDateDay');
let TodayDateNumber =document.getElementById('TodayDateNumber');
let todayDateMonth =document.getElementById('todayDateMonth');
let tomorrowDate =document.getElementById('tomorrowDate');
let thirdDay =document.getElementById('thirdDay');






searchWeather.addEventListener('input', function () {
    getWeather(searchWeather.value);
})


getWeather('london');



let todayDate = new Date();


console.log(todayDate);

console.log( todayDate.getDate());
console.log( todayDate.toLocaleDateString( "en-US" , {weekday:"long"}));
console.log( todayDate.toLocaleDateString( "en-US" , {month:"long"}));
 


async function getWeather(location) {
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=05805354ff5f47b9ab7182733242101&q=${location}&days=7`);
    if (response.ok) {
        let data = await response.json();
        console.log(data);
        let weather = data;
        displayWeather(weather)

    }
}

function displayWeather(arr){

    let tomorrow = new Date(arr.forecast.forecastday[1].date) ;
    let nextTomorrow = new Date(arr.forecast.forecastday[2].date) ;
    console.log(tomorrow);
    console.log(nextTomorrow);
    

tomorrowDate.innerHTML = tomorrow.toLocaleDateString('en-US' , {weekday:"long"});
thirdDay.innerHTML = nextTomorrow.toLocaleDateString('en-US' , {weekday:"long"});





    locationn.innerHTML = arr.location.name ;
    todayTemprature.innerHTML = arr.current.temp_c + "<sup>o</sup>C" ;
    todayStatus.innerHTML = arr.current.condition.text ; 
    todayIcon.setAttribute("src", `https:${arr.current.condition.icon}`);
    umbrella.innerHTML = arr.current.humidity ;
    speed.innerHTML = arr.current.wind_kph ;
    direction.innerHTML = arr.current.wind_dir ; 

    nextDayIcon.setAttribute("src" , ` https:${arr.forecast.forecastday[1].day.condition.icon}` );
    nextMaxDegree.innerHTML = arr.forecast.forecastday[1].day.maxtemp_c +"<sup>o</sup>C" ;
    nextMinDegree.innerHTML = arr.forecast.forecastday[1].day.mintemp_c + "<sup>o</sup>C" ;
    nextDayStatus.innerHTML = arr.forecast.forecastday[1].day.condition.text;

    thirdDayIcon.setAttribute("src" , ` https:${arr.forecast.forecastday[2].day.condition.icon}` );
    thirdDayMax.innerHTML = arr.forecast.forecastday[2].day.maxtemp_c +"<sup>o</sup>C" ;
    thirdDayMin.innerHTML = arr.forecast.forecastday[2].day.mintemp_c + "<sup>o</sup>C" ;
    thirdDayStatus.innerHTML = arr.forecast.forecastday[2].day.condition.text;

    // Date
    TodayDateDay.innerHTML = todayDate.toLocaleDateString( "en-US" , {weekday:"long"});
    TodayDateNumber.innerHTML = todayDate.getDate();
    todayDateMonth.innerHTML = todayDate.toLocaleDateString( "en-US" , {month:"long"})





     console.log(arr.forecast.forecastday[1].day.icon);
     
}


