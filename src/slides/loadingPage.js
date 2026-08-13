import loadHomePage from '../slides/home.js'; 

export default function loadLoadingPage(city) {

    const content = document.getElementById('content');
    content.innerHTML = '';

    const loading =  loadLoading(city);
    content.appendChild(loading);

    bindEventListeners();
}

function loadLoading(city) {
    const main = document.createElement('main');
    main.classList.add('mainLoading');
    main.innerHTML = `
    <section class="city-context">
        <div class="location">
            <span class="pin">⌖
            </span>
            <div>
                <div class="city">${city || ' '}</div>
                </div>
                </div>
                <a class="change" href="#" id="backBtn">Change city</a>
    </section>
    <section class="load-card" data-component="loading-progress">
        <div class="atmosphere" aria-hidden="true">
            <span class="ring one">
            </span>
            <span class="ring two">
            </span>
            <span class="ring three">
            </span>
            <div class="sky-orb">
                <span class="sun">
                </span>
                <span class="cloud">
                </span>
            </div>
        </div>
        <div class="eyebrow">Updating forecast
        </div>
        <h1>Checking the sky in <strong>${city || ' '}
        </strong></h1>
        <p class="status">Preparing current conditions, temperature, and hourly forecast.
        </p>
        <div class="bar" role="progressbar" aria-label="Preparing the forecast" aria-valuetext="Checking current conditions">
            <i>
            </i>
        </div>
        <div class="steps">
            <span class="step done">Location confirmed</span>
            <span class="step done">Current conditions</span>
            <span class="step">Hourly forecast</span>
        </div>
        <p class="reassure">This usually takes only a few seconds.</p>
    </section>
    `;
    return main;
}

function bindEventListeners() {
    const changeCityLink = document.getElementById('backBtn');

    changeCityLink.addEventListener('click', loadHomePage);
}