import { getWeatherByCity, getWeatherByCurrentLocation, Weather } from '../assets/js/getWeather.js'; 

import loadNavBarPage from '../components/navBar.js'; 

import weatherIcons from '../assets/js/weatherIcon.js';


export default function loadHomePage() { 

    const content = document.getElementById('content');

    const body = createBody();
    content.appendChild(body);

    bindEventListeners();

}


function createBody() {
    const main = document.createElement('div');
    main.classList.add('main');
    main.innerHTML = `
        <div class="left">
            <div class="badge-tag"><span class="badge-tag-dot"></span>Live weather · API updated</div>
            <h1 class="hero-title">The weather of<br><span>any city</span><br>in an instant</h1>
            <p class="hero-sub">Type your city name and get temperature, humidity, wind, and forecast in seconds.</p>

            <div class="descriptionSection">
                <div class="globe-wrap">
                <div class="globe-sphere">
                    <img src="${weatherIcons["clear-day"]}" alt="Weather Icon" class="weather-icon">
                </div>
                <div class="globe-cloud">
                    <img src="${weatherIcons["clear-day"]}" alt="Weather Icon" class="weather-icon">
                    <span id="conditions"></span>
                </div>
                <div class="globe-temp">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="5" fill="rgba(255,255,255,0.8)"></circle><path d="M12 2v2M12 20v2M2 12h2M20 12h2" stroke="rgba(255,255,255,0.8)" stroke-width="2" stroke-linecap="round"></path></svg>
                    <span id="city"></span>
                    <span id="temp"></span>
                </div>
                </div>
                <div class="weatherSection">
                    <span id="descriptionWeather"></span>
                </div>
            </div>
            
            <div class="stats-row">
            <div class="stat-pill">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" stroke="#0EA5E9" stroke-width="2"></path></svg>
                Humidity <span class="stat-pill-val" id="humidity"></span>
            </div>
            <div class="stat-pill">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" stroke="#0EA5E9" stroke-width="2" stroke-linecap="round"></path></svg>
                Wind <span class="stat-pill-val" id="wind"></span>
            </div>
            <div class="stat-pill">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="5" fill="#FCD34D"></circle><path d="M12 2v2M12 20v2M2 12h2M20 12h2" stroke="#FCD34D" stroke-width="2" stroke-linecap="round"></path></svg>
                UV <span class="stat-pill-val" id="uvindex"></span>
            </div>
            </div>
        </div>
        
        <div class="right">
            <div class="search-card">
            <div class="sc-eyebrow">Search city</div>
            <h2 class="sc-title">Where do you want to see the weather?</h2>
            <p class="sc-sub">Enter the city name and press search.</p>

            <div class="input-row">
                <div class="input-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" class="search-ico" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#38BDF8" stroke-width="2.2" stroke-linecap="round"></path>
                    <path d="M21 21L16.65 16.65" stroke="#38BDF8" stroke-width="2.2" stroke-linecap="round"></path>
                </svg>
                <input class="city-input" id="city-input" type="text" placeholder="Example: Madrid, Buenos Aires, Tokyo…" aria-label="City name">
                </div>
                <button class="search-btn" id="weatherBtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" stroke-width="2" stroke-linecap="round"></path><path d="M21 21L16.65 16.65" stroke="white" stroke-width="2" stroke-linecap="round"></path></svg>
                Search
                </button>
            </div>

            <div class="divider">
                <div class="divider-line"></div>
                <span class="divider-text">Recent searches</span>
                <div class="divider-line"></div>
            </div>

            <p class="rc-title">Recent cities</p>
            <div class="rc-list">
                <div class="rc-item">
                <div class="rc-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="5" fill="#FCD34D"></circle><path d="M12 2v2M12 20v2M2 12h2M20 12h2" stroke="#FCD34D" stroke-width="2" stroke-linecap="round"></path></svg>
                </div>
                <div class="rc-info"><div class="rc-city">Madrid</div><div class="rc-country">España · hace 2 h</div></div>
                <div class="rc-temp">23°</div>
                </div>
                <div class="rc-item">
                <div class="rc-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" fill="#CBD5E1"></path></svg>
                </div>
                <div class="rc-info"><div class="rc-city">Buenos Aires</div><div class="rc-country">Argentina · ayer</div></div>
                <div class="rc-temp">18°</div>
                </div>
                <div class="rc-item">
                <div class="rc-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="5" fill="#FCD34D"></circle><path d="M12 2v2M12 20v2M2 12h2M20 12h2" stroke="#FCD34D" stroke-width="2" stroke-linecap="round"></path></svg>
                </div>
                <div class="rc-info"><div class="rc-city">Ciudad de México</div><div class="rc-country">México · ayer</div></div>
                <div class="rc-temp">22°</div>
                </div>
            </div>

            <button class="btn-gps">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#0EA5E9" opacity=".3"></path><circle cx="12" cy="9" r="3" fill="#0EA5E9"></circle></svg>
                Use my current location
            </button>

            <div class="tip">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" style="flex-shrink:0;margin-top:1px"><circle cx="12" cy="12" r="10" stroke="#0EA5E9" stroke-width="2"></circle><path d="M12 8v4M12 16h.01" stroke="#0EA5E9" stroke-width="2" stroke-linecap="round"></path></svg>
                <span>Press <kbd>Enter</kbd> to search quickly.</span>
            </div>
            </div>
        </div>

    `;
    return main;
}

async function handleWeatherButtonClick() {
    const cityInput = document.getElementById('city-input');
    const city = (cityInput?.value || '').trim();

    if (!city) return;

    const words = city.split(" ");
    let formattedCity = "";

    for (const word of words) {
        formattedCity += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + " ";
    }

    //getWeather(city);
    const weather = await getWeatherByCity(formattedCity);
    
    loadWeatherData(weather);

}


async function handleWeatherLiveLocation() {
    
const weather = await getWeatherByCurrentLocation();

loadWeatherData(weather);

}

function bindEventListeners() {
    const weatherBtn = document.getElementById('weatherBtn');
    weatherBtn.addEventListener('click', handleWeatherButtonClick);

    const liveLocationBtn = document.querySelector('.btn-gps');
    liveLocationBtn.addEventListener('click', async () => {
        handleWeatherLiveLocation();
    });
}

function loadWeatherData(weather) {
    //Declaramos variables para los input del DOM y enviamos los valores
    const cityDisplay = document.getElementById('city');
    const weatherIcon = document.querySelectorAll('.weather-icon');
    const descriptionWeather = document.getElementById('descriptionWeather');
    const conditionsInput = document.getElementById('conditions');
    const tempInput = document.getElementById('temp');
    const humidityInput = document.getElementById('humidity');
    const windInput = document.getElementById('wind');
    const uvindexInput = document.getElementById('uvindex');

    cityDisplay.innerHTML = weather.city;
    weatherIcon.forEach(icon => {
        icon.src = weatherIcons[weather.icon];
    });
    descriptionWeather.innerHTML = weather.description;
    conditionsInput.innerHTML = weather.conditions;
    tempInput.innerHTML = `${weather.temp}°C`;
    humidityInput.innerHTML = `${weather.humidity}%`;
    windInput.innerHTML = `${weather.wind} km/h`;
    uvindexInput.innerHTML = weather.uvindex;
}



