var map = L.map('mijnMap').setView([51.229723, 4.41583], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

var marker = L.marker([51.229723, 4.41583]).addTo(map);
marker.bindPopup("<b>AP Hogeschool – Campus Spoor Noord</b><br>Ellermanstraat 33, 2060 Antwerpen").openPopup();