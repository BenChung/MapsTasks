//Route finding task

//Task:
//Find a (walking) path between the waypoints found in userwps, and update based on those waypoints.

//Implementation:
//Use the directions service to find the path: https://developers.google.com/maps/documentation/javascript/directions
//You will want to make sure that userwps has more than 1 point.
//Then, use the first and last points as the origin and destination, and feed the ones in between into the waypoints for the query.
//Use the provided objects to request and display the directions.
//Note that, for each waypoint, you need to wrap the lat/lon object in an object of the form {location:[your lat/lon]}

//The route should be updated whenever the user adds a new destination. Use the MVCArray event 'insert_at' to update


function find_route(userwps, directionsService, directionsDisplay) {
  google.maps.event.addListener(userwps, 'insert_at', function (p) {
    if (p == 0) return;
    var intermediate = userwps.getArray().slice(0);
    intermediate.shift();
    intermediate.pop();
    var request = {
      origin: userwps.getAt(0),
      waypoints: intermediate.map(function (w) { return {location:w} }),
      destination: userwps.getAt(p),
      travelMode: google.maps.TravelMode.WALKING
    }
    directionsService.route(request, function (response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      }
    })
  });
}