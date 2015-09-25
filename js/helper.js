var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span class="role">&emsp;%data%</span>';

//TODO: put nav resources in JSON and build dynamically.
var HTMLdropdown = '<div class="dropdown fixed-right"><button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Resume Sections<span class="caret"></span></button><ul class="dropdown-menu dropdown-menu-right"><li><a href="#bioNav">Bio</a></li><li><a href="#workExperienceNav">Work Experience</a></li><li><a href="#educationNav">Education</a></li><li><a href="#onlineCoursesNav">Online Classes</a></li><li><a href="#projectsNav">Projects</a></li><li><a href="#volunteeringNav">Volunteering</a></li><li><a href="#mapNav">Map</a></li><li role="separator" class="divider"></li><li><a href="mailto:neilstrain@gmail.com">Let\'s Connect</a></li></ul></div><div><hr/></div>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="purple-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="purple-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="purple-text">email</span><a class="span" href="mailto:%data%"><span class="white-text">%data%</span></a></li>';
var HTMLtwitter = '<li class="flex-item"><span class="purple-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="purple-text">github</span><a class="span" href="%data%" target="_blank"><span class="white-text">%data%</span></a></li>';
var HTMLblog = '<li class="flex-item"><span class="purple-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="purple-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li id="skill"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#" target="_blank">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br/>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br/>%data%</p>';
var HTMLprojectImage = '<img class="proj-pic" src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#" target="_blank">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br/>Major: %data%</em><br/><br/>';

var HTMLonlineSchoolStart = '<div class="online-education-entry"></div>';
var HTMLonlineTitle = '<a href="#" target="_blank">%data%';
var HTMLonlineSchool = ' -- %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br/><a href="#" target="_blank">%data%</a><br/><br/>';

var HTMLvolunteeringStart = '<div class="volunteering-entry"></div>';
var HTMLvolunteeringTitle = '<a href="#" target="_blank">%data%</a>';
var HTMLvolunteeringDates = '<div class="date-text">%data%</div>';
var HTMLvolunteeringLocation = '<div class="location-text">%data%</div>';
var HTMLvolunteeringDescription = '<p><br/>%data%</p>';

var internationalizeButton = '<button class="internationalize">Internationalize</button>';
var googleMap = '<div id="map"></div>';


function inName(name) {
    var iName = name.trim().split(" ");
    iName[0] = iName[0][0].toUpperCase() +
        iName[0].slice(1).toLowerCase();
    iName[1] = iName[1].toUpperCase();
    return iName.join(" ");
}

$(document).ready(function() {
    $('.internationalize').click(function() {
        var iName = inName($("#name").text()) || function() {};
        $('#name').html(iName);
    });
});


clickLocations = [];

function logClicks(x, y) {
    clickLocations.push({
        x: x,
        y: y
    });
    console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
    logClicks(loc.pageX, loc.pageY);
});


// Neil's additional functions:

function appendToPage(content, htmlElement1, htmlElement2) {
    $(htmlElement1).append(content);
    $(htmlElement2).append(content);
}

function prependToPage(content, htmlElement1, htmlElement2) {
    $(htmlElement1).prepend(content);
    $(htmlElement2).prepend(content);
}

// Animate skills
$(document).ready(function() {
    $("*#skill", this).hover(function() {
        $(this).animate({
            borderWidth: "+=2px",
            fontSize: "+=3px",
            margin: "-=9px"
        }, "slow");
    }, function() {
        $(this).animate({
            borderWidth: "-=2px",
            fontSize: "-=3px",
            margin: "+=9px"
        }, "slow");
    });
});

/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map; // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

    var locations;

    var mapOptions = {
        disableDefaultUI: true
    };

    /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */
    map = new google.maps.Map(document.querySelector('#map'), mapOptions);


    /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
    function locationFinder() {

        // initializes an empty array
        var locations = [];

        // adds the single location property from bio to the locations array
        locations.push(bio.contacts.location);

        // iterates through school locations and appends each location to
        // the locations array
        for (var school in education.schools) {
            locations.push(education.schools[school].location);
        }

        // iterates through work locations and appends each location to
        // the locations array
        for (var job in work.jobs) {
            locations.push(work.jobs[job].location);
        }

        for (var location in otherLocations.locations) {
            locations.push(otherLocations.locations[location]);
        }

        return locations;
    }

    /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
    function createMapMarker(placeData) {

        // The next lines save location data from the search result object to local variables
        var lat = placeData.geometry.location.lat(); // latitude from the place service
        var lon = placeData.geometry.location.lng(); // longitude from the place service
        var name = placeData.formatted_address; // name of the place from the place service
        var bounds = window.mapBounds; // current boundaries of the map window

        // marker is an object with additional data about the pin for a single location
        var marker = new google.maps.Marker({
            map: map,
            position: placeData.geometry.location,
            title: name
        });

        // infoWindows are the little helper windows that open when you click
        // or hover over a pin on a map. They usually contain more information
        // about a location.
        var infoWindow = new google.maps.InfoWindow({
            content: name
        });

        // hmmmm, I wonder what this is about...
        google.maps.event.addListener(marker, 'click', function() {
            // your code goes here!
        });

        // this is where the pin actually gets added to the map.
        // bounds.extend() takes in a map location object
        bounds.extend(new google.maps.LatLng(lat, lon));
        // fit the map to the new marker
        map.fitBounds(bounds);
        // center the map
        map.setCenter(bounds.getCenter());
    }

    /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            createMapMarker(results[0]);
        }
    }

    /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
    function pinPoster(locations) {

        // creates a Google place search service object. PlacesService does the work of
        // actually searching for location data.
        var service = new google.maps.places.PlacesService(map);

        // Iterates through the array of locations, creates a search object for each location
        for (var place in locations) {

            // the search request object
            var request = {
                query: locations[place]
            };

            // Actually searches the Google Maps API for location data and runs the callback
            // function with the search results after each search.
            service.textSearch(request, callback);
        }
    }

    // Sets the boundaries of the map based on pin locations
    window.mapBounds = new google.maps.LatLngBounds();

    // locations is an array of location strings returned from locationFinder()
    locations = locationFinder();

    // pinPoster(locations) creates pins on the map for each location in
    // the locations array
    pinPoster(locations);
}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
    // Make sure the map bounds get updated on page resize
    map.fitBounds(mapBounds);
});
