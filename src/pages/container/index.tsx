import React, { useEffect } from 'react';
import L from 'leaflet';

const Mapa = () => {
  useEffect(() => {
    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);

    const address = '1600 Pennsylvania Avenue NW, Washington, DC 20500, USA';

    fetch(`https://nominatim.openstreetmap.org/search?q=${address}&format=json`)
      .then((response) => response.json())
      .then((data) => {
        const { lat, lon } = data[0];

        const marker = L.marker([lat, lon]).addTo(map);
        marker.bindPopup(address).openPopup();
      });
  }, []);

  return <div id="map" style={{ height: '400px' }} />;
};

export default Mapa;
