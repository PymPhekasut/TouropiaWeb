/* eslint-disable */
const locations = JSON.parse(
  document.getElementById('map').dataset.locations
);
console.log(locations);

mapboxgl.accessToken =
  'pk.eyJ1IjoiMTk5NzUyNzQiLCJhIjoiY2t1MmwyOGxxNDhsejJwcHFycG94d3owOCJ9.DhSo2yO_KxX8dkwZm4QkfQ';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/19975274/cku2mirkr4ys517n1gc8x7354',
  scrollZoom: false,
  // center: [-118.113491, 34.111745],
  // zoom: 10,
  // interactive: false
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach((loc) => {
  // create marker
  const el = document.createElement('div');
  el.className = 'marker';

  // Add marker
  new mapboxgl.Marker({
    element: el,
    anchor: 'bottom',
  })
    .setLngLat(loc.coordinates)
    .addTo(map);

  // Add popup
  new mapboxgl.Popup({
    offset: 30,
  })
    .setLngLat(loc.coordinates)
    .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
    .addTo(map);

  bounds.extend(loc.coordinates);
});

map.fitBounds(bounds, {
  padding: {
    top: 200,
    bottom: 150,
    left: 100,
    right: 100,
  },
});
