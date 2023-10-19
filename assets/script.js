// user will search for a city

// user needs a searchbar and search button

// add event listener for search button 
var searchBar = $("#searchBar")
var searchButton = $("#searchButton")
var apiKey = "cb94559ccc9a2bc218cdf00db20e4853"
function searchHandler(){
    // get value of searchbar 
    var cityName = searchBar.val()
getWeather(cityName)
// store all serched cities in local sotage

}

function getWeather(city){
    // call api and search for desired city
var apiLink = "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&appid=" + apiKey + "&units=imperial"
fetch(apiLink)
.then(function(response){
return response.json()
})
.then(function(data){
    // display data on screen
console.log(data)
})
}





searchButton.on("click", searchHandler)