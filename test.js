// Initialize and center the map
function initMap() {
  const mapOptions = {
    zoom: 12,
    center: { lat: 37.7749, lng: -122.4194 }, // Example: San Francisco coordinates
  };
  const map = new google.maps.Map(document.getElementById("map"), mapOptions);

  // Define the list of points with latitude, longitude, and titles
  const points = [
    { name: "Point A", latitude: 37.7749, longitude: -122.4194, title: "Company 1", Employees:"5020" },
    { name: "Point B", latitude: 37.7831, longitude: -122.4039, title: "Company 2", Employees:"15020" },
    { name: "Point C", latitude: 37.7914, longitude: -122.4080, title: "Company 3", Employees:"5200" },
    // Add more points as needed
  ];

  // Add markers for each point with titles
  points.forEach((point) => {
    const marker = new google.maps.Marker({
      position: { lat: point.latitude, lng: point.longitude },
      map: map,
      title: point.title,
    });

    // Add a click event listener to display the title as an info window
    marker.addListener("click", function () {
      const infowindow = new google.maps.InfoWindow({
        content: '<div class="info-window">Company Name :' + point.title + '<br>Employee Count:' + point.Employees + '</div>',
      });
      infowindow.open(map, marker);
    });
  });
}

initMap()
