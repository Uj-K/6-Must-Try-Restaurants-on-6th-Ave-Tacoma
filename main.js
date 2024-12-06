var map = L.map('map').setView([47.25, -122.48], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var restaurants = [
    {
        name: "BURGER SEOUL",
        lat: 47.25687308003812,
        lng: -122.4615809305217,
    },
    {
        name: "Cuerno Bravo",
        lat: 47.2582716481405, 
        lng: -122.44299593620235,
    },
    {
        name: "Outpost Sandwiches",
        lat: 47.25369974049884,
        lng: -122.43727585264476,
    },
    {
        name: "KIMCHI BOX",
        lat: 47.233645026792736, 
        lng: -122.5035077446855,
    },
    {
        name: "Wooden City Tacoma",
        lat: 47.256876343657254, 
        lng: -122.43962678760512,
    },
    {
        name: "State Street",
        lat: 47.255866307900185,
        lng:  -122.46611616001823,
    },
    {
        name: "Salamone’s Pizza",
        lat: 47.265355619446396, 
        lng: -122.4474922807633,
    },
    {
        name: "Field Bar & Bottle Shop",
        lat: 47.25552427471303, 
        lng: -122.47090430419273,
    },
    {
        name: "Balcon Express",
        lat: 47.25560123551875, 
        lng: -122.4764313911152,
    },
];

var myIcon = L.icon({
    iconUrl: 'restaurant.png',
    iconSize: [37, 42],
});

restaurants.forEach(function(restaurant) {
    var marker = L.marker([restaurant.lat, restaurant.lng], {icon: myIcon}).addTo(map);
    marker.bindPopup("<b>" + restaurant.name + "</b><br>");
});