mapboxgl.accessToken = 'pk.eyJ1IjoiZ2F1cmF2bmciLCJhIjoiY20xdGx3ODhuMDNzNTJ0cHI2YWphY2p1ZCJ9.DCncOYgA91GXOkejz0CilQ';

const pexelsApiKey = '2LFJPIrvoT8OjnKDqJDES7pWP1UsebbVnaEOmAWTR9Bic1HgHRkbXch7';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-74.5, 40],
    zoom: 9
});

map.addControl(new mapboxgl.NavigationControl(), 'top-right');

map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
}));

const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
    unit: 'metric',
    profile: 'mapbox/driving'
});
map.addControl(directions, 'top-left');

navigator.geolocation.getCurrentPosition(async (position) => {
    const { latitude, longitude } = position.coords;
    map.setCenter([longitude, latitude]);

    new mapboxgl.Marker({ color: 'green' })
        .setLngLat([longitude, latitude])
        .setPopup(new mapboxgl.Popup().setText('Your current location'))
        .addTo(map);

    const selectedCategory = document.getElementById('place-category').value;
    const nearbyPlacesResponse = await fetchNearbyPlaces([longitude, latitude], selectedCategory);
    displayNearbyPlaces(nearbyPlacesResponse.features, [longitude, latitude]);

    const weatherInfo = await fetchWeatherByCoords(latitude, longitude);
    displayWeatherInfo(weatherInfo);
});

document.getElementById('search-btn').addEventListener('click', async () => {
    const locationInput = document.getElementById('location-input').value;
    const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(locationInput)}.json?access_token=${mapboxgl.accessToken}`);
    const data = await response.json();

    if (data.features.length > 0) {
        const locationCoords = data.features[0].geometry.coordinates;

        map.flyTo({ center: locationCoords, zoom: 14 });
        new mapboxgl.Marker().setLngLat(locationCoords).addTo(map);

        const selectedCategory = document.getElementById('place-category').value;
        const nearbyPlacesResponse = await fetchNearbyPlaces(locationCoords, selectedCategory);
        displayNearbyPlaces(nearbyPlacesResponse.features, locationCoords);

        const weatherInfo = await fetchWeatherByCoords(locationCoords[1], locationCoords[0]);
        displayWeatherInfo(weatherInfo);
    }
});

function showRoute(startCoords, endCoords, mode) {
    directions.setOrigin(startCoords);
    directions.setDestination(endCoords);
    directions.setProfile(`mapbox/${mode}`);
}

async function fetchNearbyPlaces(coords, category) {
    const [longitude, latitude] = coords;
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${category}.json?proximity=${longitude},${latitude}&access_token=${mapboxgl.accessToken}`;
    const response = await fetch(url);
    return await response.json();
}

function displayNearbyPlaces(places, centerCoords) {
    const placesList = document.getElementById('places-list');
    placesList.innerHTML = ''; 

    places.forEach(async (place) => {
        const { text, geometry } = place;
        const distance = calculateDistance(centerCoords, geometry.coordinates).toFixed(2);

        const listItem = document.createElement('li');
        const placeImage = await fetchImageForPlace(text);

        listItem.innerHTML = `
            <div class="place-container">
                <img src="${placeImage}" alt="${text}">
                <strong>${text}</strong>
                <span>${distance} km away</span>
            </div>
        `;
        placesList.appendChild(listItem);
    });
}

function calculateDistance(coords1, coords2) {
    const [lon1, lat1] = coords1;
    const [lon2, lat2] = coords2;
    const R = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}

async function fetchWeatherByCoords(lat, lon) {
    const apiKey = 'a80a3e5dedc0854d15ff497c0c98b874';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    const response = await fetch(url);
    return await response.json();
}

async function fetchImageForPlace(placeName) {
    const url = `https://api.pexels.com/v1/search?query=${placeName}&per_page=1`;
    const response = await fetch(url, {
        headers: {
            Authorization: pexelsApiKey
        }
    });
    const data = await response.json();
    return data.photos.length > 0 ? data.photos[0].src.medium : 'https://via.placeholder.com/100'; 
}

function displayWeatherInfo(weatherInfo) {
    const weatherContainer = document.getElementById('weather-info');
    const iconCode = weatherInfo.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

    const listItem = document.createElement('li');  
    listItem.innerHTML = `
        <div class="place-container">
            <img src="${iconUrl}" alt="Weather Icon">
            <strong>Weather</strong>
            <span>${weatherInfo.main.temp}°C - ${weatherInfo.weather[0].description}</span>
        </div>
    `;

    const placesList = document.getElementById('places-list');
    placesList.appendChild(listItem);  
}
