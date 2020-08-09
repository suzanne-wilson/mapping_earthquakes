// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([40.7, -94.5], 4);

// Create the map object with a center and zoom level.
// Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.6213, -122.3790], 14);
// let map = L.map('mapid').setView([34.0522, -118.2437], 14);
// Create the map object with a center and zoom level. 
// Useful when we need to add multiple tile layers, or a background image of our map(s)
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });
// Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.5, -122.5], 10);

// Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// Grabbing our GeoJSON data.
// L.geoJson(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//       console.log(feature);
// 	  return L.marker(latlng)
// 	  .bindPopup("<h2>" + feature.properties.name+ "</h2> <hr> <h3>" + feature.properties.city + ", " + feature.properties.country + "</h3>");
//     }

//   }).addTo(map);

//   L.geoJson(sanFranAirport, {
//     onEachFeature: function(feature, layer) {
// 	  console.log(feature);
//       layer.bindPopup();
//      }
// }).addTo(map);
// L.geoJson(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//       console.log(feature);
// 	  return L.marker(latlng)
// 	  .bindPopup("<h3>" + "Airport code: " + feature.properties.faa + "</h3> <hr> <h3>Airport name: " + feature.properties.name + "</h3>");
//     }

//   }).addTo(map);

// Create the map object with center and zoom level.
let map = L.map('mapid').setView([30, 30], 2);

// We create the tile layer that will be the background of our map. streets-v11 dark-v10 satellite-streets-v11 navigation-preview-night-v2
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,
	accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);


// Accessing the airport GeoJSON URL

// let airportData = "https://github.com/suzanne-wilson/mapping_earthquakes/tree/master/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(majorAirports).then(function(data) {
    console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data).addTo(map);
});

//  Add a marker to the map for Los Angeles, California.
// An array containing each city's location, state, and population.
// Get data from cities.js
// let cityData = cities;

// Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
// 	console.log(city)
// 	L.circleMarker(city.location, {
// 		radius: city.population/100000,
// 		color:"orange",
// 		fillcolor:"orange",
// 		fillOpacity: 0.2
// 	})
 	// .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//   .addTo(map);
// });

// Coordinates for each point to be used in the line.
// Coordinates for each point to be used in the polyline.
// let line = [
// 	// SFO to JFK with two stops, Austin-Bergstrom (AUS) and Toronto Pearson (YYZ)
// 	[37.6213, -122.3790],
// 	[30.1975,  -97.6664],
// 	[43.6532,  -79.3832],
// 	[40.6413,  -73.7781]
//   ];

// // Create a polyline using the line coordinates and make the line black.
// L.polyline(line, {
// 	color: "blue",
// 	weight: '4', 
// 	strokeOpacity: 0.2,
// 	dashArray: '5, 10'
//  }).addTo(map);
// L.circleMarker([34.0522, -118.2437], {
// 	radius: 300,
// 	color:"black",
// 	fillcolor:"canary",
//  fillOpacity: 0.5
//  }).addTo(map);
