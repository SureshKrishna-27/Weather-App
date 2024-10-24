// http://api.weatherapi.com/v1/current.json?key=ed7759971c8b4f47844141151240710&q=Chennai&aqi=no

// let temperaturefield = document.querySelector(".weather-temperature");
// let locationfield = document.querySelector(".time-location p")
// let datefield = document.querySelector(".time-location span")
// let weatherfield = document.querySelector(".weather-status p")
// let search = document.querySelector(".search")
// let form = document.querySelector("form")




// let target ="Chennai";


//  const fetchresults = async(targetlocation) =>{

//     let url = `http://api.weatherapi.com/v1/current.json?key=ed7759971c8b4f47844141151240710&q=${targetlocation}&aqi=no`

//     const res = await fetch(url)
//     const data = await res.json();

//     console.log(data);

//     let locationname = data.location.name
//     let time = data.location.localtime
//     let temp = data.current.temp_c

//     let condition = data.current.condition.text;
    
   
//  }
 
// // Handle form submission to search for a new location
// function searchLocation(e) {
//     e.preventDefault();
//     target = search.value;
//     fetchResults(target);
// }

//     form.addEventListener("submit", searchLocation)

// fetchresults(target)


let temperatureField = document.querySelector(".weather-temperature");
let locationField = document.querySelector(".time-location p");
let dateField = document.querySelector(".time-location span");
let weatherField = document.querySelector(".weather-status p");
let searchField = document.querySelector(".search");
let form = document.querySelector("form");

let target = "Chennai";

// Fetch weather results based on the target location
const fetchResults = async (targetLocation) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=ed7759971c8b4f47844141151240710&q=${targetLocation}&aqi=no`;

    const res = await fetch(url);
    const data = await res.json();

    console.log(data);

    let locationName = data.location.name;
    let time = data.location.localtime;
    let temp = data.current.temp_c;
    let condition = data.current.condition.text;

    // // Update the UI with the fetched data
    locationField.textContent = locationName;
    dateField.textContent = time;
    temperatureField.textContent = `${temp} °C`;
    weatherField.textContent = condition;
};

// Handle form submission to search for a new location
function searchLocation(e) {
    e.preventDefault();
    target = searchField.value;
    fetchResults(target);
}

// Set up the event listener
form.addEventListener("submit", searchLocation);

// Initial fetch for the default target location
fetchResults(target);

