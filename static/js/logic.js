// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);
// let map = L.map('mapid').setView([34.0522, -118.2437], 14);
// Create the map object with a center and zoom level. 
// Useful when we need to add multiple tile layers, or a background image of our map(s)
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });


// We create the tile layer that will be the background of our map. streets-v11
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
//  Add a marker to the map for Los Angeles, California.
// An array containing each city's location, state, and population.
// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
	console.log(city)
	L.circleMarker(city.location, {
		radius: city.population/100000,
		color:"orange",
		fillcolor:"orange",
		fillOpacity: 0.2
	})
	.bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});
// L.circleMarker([34.0522, -118.2437], {
// 	radius: 300,
// 	color:"black",
// 	fillcolor:"canary",
//     fillOpacity: 0.5
//  }).addTo(map);
