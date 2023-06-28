let newYorkCoords = [40.73, -74.0059];
let mapZoomLevel = 12;

let myMap = L.map("map-id", {
  center: newYorkCoords,
  zoom: mapZoomLevel
});

// Create the createMap function.

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

let bikeURL = 'https://gbfs.citibikenyc.com/gbfs/en/station_information.json'
  // Create the tile layer that will be the background of our map.

d3.json(bikeURL).then(function(data) {

  console.log(data.data)
  for (let i = 0; i< 100; i++) {
    let location = [data.data.stations[i].lat,data.data.stations[i].lon]
    var bikeMarkers = []
    bikeMarkers.push(
      L.marker([data.data.stations[i].lat,data.data.stations[i].lon])
      .addTo(myMap)
      .bindPopup(`<h2>Station: ${data.data.stations[i].name} </h2><br />
                  <h4>Capacity: ${data.data.stations[i].capactiy}</h4>`)
    )
    
  }
  
})

// Create a baseMaps object to hold the lightmap layer.


  // Create an overlayMaps object to hold the bikeStations layer.


  // Create the map object with options.


  // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.

// Create the createMarkers function.



  // Pull the "stations" property from response.data.

  // Initialize an array to hold the bike markers.

  // Loop through the stations array.
    // For each station, create a marker, and bind a popup with the station's name.

    // Add the marker to the bikeMarkers array.

  // Create a layer group that's made from the bike markers array, and pass it to the createMap function.


// Perform an API call to the Citi Bike API to get the station information. Call createMarkers when it completes.
