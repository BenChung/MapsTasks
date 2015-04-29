//Places search and display task.

//Task: 
//Search for restaurants around a route and display a heatmap of them, updated as the path is generated.

//Implementation:
//You need to make a request to Google's places service, documented here: https://developers.google.com/maps/documentation/javascript/places
//Use radar search - we're interested in where the establishments are, not in what they do
//To make a LatLngBounds from the user's waypoints, make an empty LatLngBounds and then call extend for each waypoint
//To render the returned data, call heatmapLayer.setData with it - documentation for the heatmap can be found here: https://developers.google.com/maps/documentation/javascript/reference#HeatmapLayer

//The route should be updated whenever the user adds a new destination. Use the MVCArray event 'insert_at' to update

function search_places(userwps, placesService, heatmapLayer) {
  google.maps.event.addListener(userwps, 'insert_at', function (p) {
  	var bounds = new google.maps.LatLngBounds();
  	userwps.forEach(function (e) {bounds.extend(e)});
  	var request = {
  		bounds: bounds,
  		types: [ "restaurant" ]
  	};
  	function callback(results, status) {
  		if (status == google.maps.places.PlacesServiceStatus.OK) {
  			heatmapLayer.setData(results.map(function(place) {return {location:place.geometry.location}}))
  		}
  	}
  	placesService.radarSearch(request, callback);
  })
}