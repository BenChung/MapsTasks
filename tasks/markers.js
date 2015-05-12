//Markers task

//Description:
//Every time a new user point is added to user_waypoints, add a new marker at that position.

//Implementation:
//See the template file for instructions on how to watch for events on user_waypoints
//Documentation for markers can be found here: https://developers.google.com/maps/documentation/javascript/reference#Marker

//map : Map https://developers.google.com/maps/documentation/javascript/reference#Map
//user_waypoints : MVCArray of LatLon https://developers.google.com/maps/documentation/javascript/reference#MVCArray
function add_markers(map, user_waypoints) {
	google.maps.event.addListener(user_waypoints, "insert_at", function (index) {

	})
}