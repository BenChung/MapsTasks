//Places search and display task.

//Task: 
//Search for restaurants around a route, defined by user_waypoints, and display a heatmap of them, updated as the path is generated.

//Implementation:
//You need to make a request to Google's places service, documented here: https://developers.google.com/maps/documentation/javascript/places
//Use radar search - we're interested in where the establishments are, not in what they do
//To make a LatLngBounds from the user's waypoints, make an empty LatLngBounds and then call extend for each waypoint
//To render the returned data, call heatmapLayer.setData with it - documentation for the heatmap can be found here: https://developers.google.com/maps/documentation/javascript/reference#HeatmapLayer

//The route should be updated whenever the user adds a new destination. Use the MVCArray event 'insert_at' to update

//user_waypoints : MVCArray of LatLon https://developers.google.com/maps/documentation/javascript/reference#MVCArray
//placesService : PlacesService https://developers.google.com/maps/documentation/javascript/reference#PlacesService
//heatmap_layer : HeatmapLayer https://developers.google.com/maps/documentation/javascript/reference#HeatmapLayer
function search_places(user_waypoints, places_service, heatmap_layer) {
	google.maps.event.addListener(user_waypoints, "insert_at", function (index) {
		
	})
}