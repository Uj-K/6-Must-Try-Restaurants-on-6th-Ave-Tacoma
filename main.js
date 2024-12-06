var map = L.map('map').setView([47.2556264656504, -122.470873908048], 14.5);

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
        name: "La Cà Bar",
        lat: 47.254969451498376,
        lng: -122.47515606626546,
    },
    {
        name: "State Street",
        lat: 47.255866307900185,
        lng:  -122.46611616001823,
    },
    {
        name: "Shakabrah",
        lat: 47.25604968807254, 
        lng: -122.47119693277527,
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
    iconUrl: 'pic/restaurant.png',
    iconSize: [37, 42],
});

restaurants.forEach(function(restaurant) {
    var marker = L.marker([restaurant.lat, restaurant.lng], {icon: myIcon}).addTo(map);
    marker.bindPopup("<b>" + restaurant.name + "</b><br>");
});