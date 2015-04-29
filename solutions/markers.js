//Markers task

//Description:
//Every time a new user point is added to userwps, add a new marker at that position.

//Implementation:
//See the template file for instructions on how to watch for events on userwps
//Documentation for markers can be found here: https://developers.google.com/maps/documentation/javascript/markers

function add_markers(map, userwps) {
    var markers = new google.maps.MVCArray();

    google.maps.event.addListener(userwps, 'insert_at', function (p) {
      markers.push(new google.maps.Marker({
        position: userwps.getAt(p),
        map: map
      }))
    });
}