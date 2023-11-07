// user will search for a city

// user needs a searchbar and search button

// add event listener for search button
var searchBar = $("#searchBar");
var searchButton = $("#searchButton");
var apiKey = "cb94559ccc9a2bc218cdf00db20e4853";
var searchedCities = localStorage.getItem("cityName");
var todaysWeather = $("#todays-weather");
var futureweather = $("#future-weather");
var timeDisplayEl = $(".time-display");
var cityEl = $("#city-El");
var tempEl = $("#temp-El");
var humidityEl = $("#humidity-El");
var windEl = $("#wind");
var iconEl = $("#icon");
var day1El = $("#day-1");
var day2El = $("#day-2");
var day3El = $("#day-3");
var day4El = $("#day-4");
var day5El = $("#day-5");
function displayTime() {
  var rightNow = dayjs().format("MM/DD/YYYY");
  console.log(rightNow);
  timeDisplayEl.text(rightNow);
}

function searchHandler() {
  // get value of searchbar
  var cityName = searchBar.val();
  getWeather(cityName);
  getWeatherFiveDays(cityName);
  
  // store all serched cities in local sotage
  localStorage.setItem("cityName", cityName);
}

function getWeather(city) {
  // call api and search for desired city
  var apiLink =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    apiKey +
    "&units=imperial";
  fetch(apiLink)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // display data on screen
      // var cityNameEl = ("div").data.name
      cityEl.append(`City: ${data.name}`);
      tempEl.append(`Temp: ${Math.round(data.main.temp)} \xB0 F`);
      humidityEl.append(`Humidity: ${data.main.humidity}%`);
      windEl.append(`Wind Speed: ${data.wind.speed} mph`);
      iconEl.append(
        `<img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" />`
      );
    });
}


function getWeatherFiveDays(city) {
    var fiveDaysLink = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;

  fetch(fiveDaysLink)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // display data on screen
      // var cityNameEl = ("div").data.name
      console.log(data.list);
      day1El.append(`Day 1 Temp: ${Math.round(data.list[3].main.temp)} \xB0 F  `);
      day1El.append(`Humidity: ${data.list[3].main.humidity}%  `);
      day1El.append(`Wind Speed: ${data.list[3].wind.speed} mph`);
      day1El.append(
        `<img src="http://openweathermap.org/img/w/${data.list[3].weather[0].icon}.png" />`
      );
   
      //day 2 weather append
      day2El.append(`Day 2 Temp: ${Math.round(data.list[11].main.temp)} \xB0 F  `);
      day2El.append(`Humidity: ${data.list[11].main.humidity}%  `);
      day2El.append(`Wind Speed: ${data.list[11].wind.speed} mph`);
      day2El.append(
        `<img src="http://openweathermap.org/img/w/${data.list[11].weather[0].icon}.png" />`
      );
    
     //day 3 weather append
      day3El.append(`Day 3 Temp: ${Math.round(data.list[19].main.temp)} \xB0 F  `);
      day3El.append(`Humidity: ${data.list[19].main.humidity}%  `);
      day3El.append(`Wind Speed: ${data.list[19].wind.speed} mph`);
      day3El.append(
        `<img src="http://openweathermap.org/img/w/${data.list[19].weather[0].icon}.png" />`
      );
    
      //day 4 weather append
      day4El.append(`Day 4 Temp: ${Math.round(data.list[27].main.temp)} \xB0 F  `);
      day4El.append(`Humidity: ${data.list[27].main.humidity}%  `);
      day4El.append(`Wind Speed: ${data.list[27].wind.speed} mph`);
      day4El.append(
        `<img src="http://openweathermap.org/img/w/${data.list[27].weather[0].icon}.png" />`
      );
    
     //day 5 weather append
      day5El.append(`Day 5 Temp: ${Math.round(data.list[35].main.temp)} \xB0 F  `);
      day5El.append(`Humidity: ${data.list[35].main.humidity}%  `);
      day5El.append(`Wind Speed: ${data.list[35].wind.speed} mph`);
      day5El.append(
        `<img src="http://openweathermap.org/img/w/${data.list[35].weather[0].icon}.png" />`
      );
    })
      
}

displayTime();

searchButton.on("click", searchHandler);
