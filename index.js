lat = 37;
lng = 10;
var map = L.map("map").setView([lat, lng], 5);
//https://geojson.io/
//https://leaflet-extras.github.io/leaflet-providers/preview/

L.tileLayer(
  "https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}",
  {
    attribution:
      'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: "abcd",
    minZoom: 2,
    maxZoom: 15,
    ext: "jpg",
  }
).addTo(map);

L.geoJSON(countries, {
  style: {
    color: "#ff7800",
    weight: 1,
    opacity: 0.5,
    fillColor: "white",
    fillOpacity: 0.3,
  },
}).addTo(map);

document.getElementById("lat").textContent = lat;
document.getElementById("lng").textContent = lng;
marker1 = L.marker([lat, lng]).addTo(map);

map.on("click", function (e) {
  var lat = e.latlng.lat;
  var lng = e.latlng.lng;
  document.getElementById("lat").textContent = lat;
  document.getElementById("lng").textContent = lng;
  marker1.setLatLng([lat, lng]).update();
  found = false;
  if (found == false) {
    for (i = 1; i < countries.features.length; i++) {
      if (d3.geoContains(countries.features[i].geometry, [lng, lat]) == true) {
        document.getElementById("ctr").textContent =
          countries.features[i].properties.ADMIN;
        L.geoJSON(countries.features[i], {
          style: {
            color: "#ff7800",
            weight: 1,
            opacity: 0.5,
            fillColor: "cyan",
            fillOpacity: 0.5,
          },
        }).addTo(map);

        pastctr = i;
        found = true;
      }
    }
    if (found == false) {
      document.getElementById("ctr").textContent = "";
    }
  }
});

function hslToHex(h, s, l) {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0"); // convert to Hex and prefix "0" if needed
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

// Tiles: OpenTopoMap
