//Task: return an options object that defines the map.
//The map should be centered on 40.7127, -74.0059 at zoom level 15
//The map should not display the standard google UI

//Implementation:
//Return an instance of MapOptions, seen here https://developers.google.com/maps/documentation/javascript/reference#MapOptions

function get_options() {
	return {
		center: {lat:0, lng: 0},
		zoom:1
	};
}