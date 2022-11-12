const AaC = JSON.parse(localStorage.getItem("myObject")); //Adjectivals , colors and distance
sourceCountries = [];
Finder();
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

for (i = 1; i < countries.features.length; i++) {
  for (c in sourceCountries) {
    if (countries.features[i].properties.ADMIN == c) {
      if (sourceCountries[c] == "target") {
        L.geoJSON(countries.features[i], {
          style: {
            color: "#ff7800",
            weight: 1,
            opacity: 0.5,
            fillColor: "#242424",
            fillOpacity: 0.5,
          },
        }).addTo(map);
      } else {
        console.log(c, sourceCountries[c]);
        L.geoJSON(countries.features[i], {
          style: {
            color: "#ff7800",
            weight: 1,
            opacity: 0.5,
            fillColor: sourceCountries[c][0],
            fillOpacity: 0.5,
          },
        }).addTo(map);
      }
    }
  }
}

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
        try {
          document.getElementById("distance").textContent =
            sourceCountries[countries.features[i].properties.ADMIN][1];
        } catch (err) {
          document.getElementById("distance").textContent = "";
        }
        if (
          sourceCountries[countries.features[i].properties.ADMIN] == "target"
        ) {
          document.getElementById("distance").textContent = "target";
        }
        pastctr = i;
        found = true;
      }
    }
    if (found == false) {
      document.getElementById("ctr").textContent = "";
    }
  }
});

// Tiles: OpenTopoMap
function Finder() {
  for (A in AaC) {
    for (key in CaA) {
      //CaA: from Countries And Adjectivals.js
      if (typeof CaA[key] == "object") {
        for (LKey in CaA[key]) {
          if (CaA[key][LKey] == A) {
            //Found Object
            sourceCountries[key] = AaC[A];
          }
        }
      } else {
        if (CaA[key] == A) {
          //Found string
          sourceCountries[key] = AaC[A];
        }
      }
    }
  }
}
