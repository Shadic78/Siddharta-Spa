const map = L.map('map').setView([20.980372,-89.6180365], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    minZoom: 15,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([20.980301,-89.6179512]).addTo(map)
    .bindPopup('<h6><b>Siddharta Spa</b><h6>')
    .openPopup();