
export default function loadHomePage() { 

    const content = document.getElementById('content');

    const navBar = createNavBar();
    content.appendChild(navBar);

    const body = createBody();
    content.appendChild(body);

    bindEventListeners();

}


function createNavBar() {
    const nav = document.createElement('nav');
    nav.innerHTML = `
        <div class="nav-logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="10" r="7" fill="#E0F2FE"></circle>
            <circle d cx="12" cy="10" r="4" fill="#0EA5E9"></circle>
            <path d="M12 17v4" stroke="#0EA5E9" stroke-width="2" stroke-linecap="round"></path>
            </svg>
            <span class="nav-logo-dot"></span>ClimaApp
        </div>
        <div class="nav-links">
            <a href="#" class="nav-link active">Buscar</a>
            <a href="#" class="nav-link">Mapas</a>
        </div>
        <div>

        </div>
    `;
    return nav;
    
}

function createBody() {
    const main = document.createElement('div');
    main.classList.add('main');
    main.innerHTML = `
        <div class="left" data-component="hero-panel">
            <div class="badge-tag"><span class="badge-tag-dot"></span>Tiempo real · API actualizada</div>
            <h1 class="hero-title">El clima de<br><span>cualquier ciudad</span><br>al instante</h1>
            <p class="hero-sub">Escribe el nombre de tu ciudad y obtén temperatura, humedad, viento y pronóstico de 5 días en segundos.</p>

            
            <div class="globe-wrap">
            <div class="globe-sphere">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                <circle cx="38" cy="32" r="14" fill="#FDE68A" stroke="#FBBF24" stroke-width="2.5"></circle>
                <line x1="38" y1="12" x2="38" y2="6" stroke="#FBBF24" stroke-width="2.5" stroke-linecap="round"></line>
                <line x1="55.6" y1="14.4" x2="59.8" y2="10.2" stroke="#FBBF24" stroke-width="2.5" stroke-linecap="round"></line>
                <line x1="62" y1="32" x2="68" y2="32" stroke="#FBBF24" stroke-width="2.5" stroke-linecap="round"></line>
                <line x1="20.4" y1="14.4" x2="16.2" y2="10.2" stroke="#FBBF24" stroke-width="2.5" stroke-linecap="round"></line>
                <line x1="14" y1="32" x2="8" y2="32" stroke="#FBBF24" stroke-width="2.5" stroke-linecap="round"></line>
                <ellipse cx="36" cy="54" rx="18" ry="10" fill="white"></ellipse>
                <ellipse cx="26" cy="56" rx="12" ry="8" fill="white"></ellipse>
                <ellipse cx="50" cy="56" rx="12" ry="8" fill="white"></ellipse>
                <ellipse cx="36" cy="48" rx="12" ry="9" fill="white"></ellipse>
                </svg>
            </div>
            <div class="globe-cloud">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" fill="#93C5FD"></path></svg>
                Parcialmente nublado
            </div>
            <div class="globe-temp">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="5" fill="rgba(255,255,255,0.8)"></circle><path d="M12 2v2M12 20v2M2 12h2M20 12h2" stroke="rgba(255,255,255,0.8)" stroke-width="2" stroke-linecap="round"></path></svg>
                27°C Sevilla
            </div>
            </div>

            
            <div class="stats-row">
            <div class="stat-pill">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" stroke="#0EA5E9" stroke-width="2"></path></svg>
                Humedad <span class="stat-pill-val">62%</span>
            </div>
            <div class="stat-pill">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" stroke="#0EA5E9" stroke-width="2" stroke-linecap="round"></path></svg>
                Viento <span class="stat-pill-val">18 km/h</span>
            </div>
            <div class="stat-pill">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="5" fill="#FCD34D"></circle><path d="M12 2v2M12 20v2M2 12h2M20 12h2" stroke="#FCD34D" stroke-width="2" stroke-linecap="round"></path></svg>
                UV <span class="stat-pill-val">Índice 8</span>
            </div>
            </div>
        </div>

        
        <div class="right" data-component="search-panel">
            <div class="search-card">
            <div class="sc-eyebrow">Buscar ciudad</div>
            <h2 class="sc-title">¿Dónde quieres ver el clima?</h2>
            <p class="sc-sub">Introduce el nombre de la ciudad y pulsa buscar.</p>

            <div class="input-row">
                <div class="input-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" class="search-ico" width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#38BDF8" stroke-width="2.2" stroke-linecap="round"></path>
                    <path d="M21 21L16.65 16.65" stroke="#38BDF8" stroke-width="2.2" stroke-linecap="round"></path>
                </svg>
                <input class="city-input" type="text" placeholder="Ej: Madrid, Buenos Aires, Tokyo…" aria-label="Nombre de la ciudad">
                </div>
                <button class="search-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" stroke-width="2" stroke-linecap="round"></path><path d="M21 21L16.65 16.65" stroke="white" stroke-width="2" stroke-linecap="round"></path></svg>
                Buscar
                </button>
            </div>

            <div class="divider">
                <div class="divider-line"></div>
                <span class="divider-text">Búsquedas recientes</span>
                <div class="divider-line"></div>
            </div>

            <p class="rc-title">Últimas ciudades</p>
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
                Usar mi ubicación actual
            </button>

            <div class="tip">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" style="flex-shrink:0;margin-top:1px"><circle cx="12" cy="12" r="10" stroke="#0EA5E9" stroke-width="2"></circle><path d="M12 8v4M12 16h.01" stroke="#0EA5E9" stroke-width="2" stroke-linecap="round"></path></svg>
                <span>Pulsa <kbd>Enter</kbd> para buscar rápidamente.</span>
            </div>
            </div>
        </div>

    `;
    return main;
}

function handleWeatherButtonClick() {
    const cityInput = document.getElementById('cityInput');
    const city = (cityInput?.value || '').trim();
    
        if (!city) return;
    getWeather(city);
}

function getWeather(city) {
    const fetchWeatherData = async (city) => {
        const apiKey = 'CWAX8Q2T2V7EC7T9T6XWMKDLX';
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(city)}/next7days?unitGroup=metric&key=${apiKey}&contentType=json`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log('Resolved Address:', data.resolvedAddress);
            console.log('Description:', data.description);
            data.days.forEach(day => {
                // You can process and display data here, e.g., console.log(data.days[0].tempmax);
                console.log(`Date: ${day.datetime}, Temp Max: ${day.tempmax}, Temp Min: ${day.tempmin}`);
            });
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };
    fetchWeatherData(city);
}

function bindEventListeners() {
    const weatherBtn = document.getElementById('weatherBtn');
    weatherBtn.addEventListener('click', handleWeatherButtonClick);
    
}

