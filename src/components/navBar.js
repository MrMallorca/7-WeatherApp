import loadHomePage from '../slides/home.js'; 
import loadMapsPage from '../slides/maps.js'; 

export default function loadNavBarPage(activePage = 'search') {
    const content = document.getElementById('content');

    const navBar = loadNavBar(activePage);
    content.appendChild(navBar);

    bindEventListeners();

    return navBar;
}


function loadNavBar(activePage = 'search') {
    const nav = document.createElement('nav');
    nav.innerHTML = `
        <div class="nav-logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="10" r="7" fill="#E0F2FE"></circle>
            <circle d cx="12" cy="10" r="4" fill="#0EA5E9"></circle>
            <path d="M12 17v4" stroke="#0EA5E9" stroke-width="2" stroke-linecap="round"></path>
            </svg>
            <span class="nav-logo-dot"></span>WeatherApp
        </div>
        <div class="nav-links">
            <a href="#" class="nav-link ${activePage === 'search' ? 'active' : ''}" id="searchNavLink">Search</a>
            <a href="#" class="nav-link ${activePage === 'maps' ? 'active' : ''}" id="mapsNavLink">Maps</a>
        </div>
        <div>
        </div>
    `;


    return nav;
    
}


function bindEventListeners() {
    const searchNavLink = document.getElementById('searchNavLink');
    const mapsNavLink = document.getElementById('mapsNavLink');

    if (searchNavLink) {
        searchNavLink.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelectorAll('.nav-link').forEach((link) => link.classList.remove('active'));
            searchNavLink.classList.add('active');
            loadHomePage();
        });
    }

    if (mapsNavLink) {
        mapsNavLink.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelectorAll('.nav-link').forEach((link) => link.classList.remove('active'));
            mapsNavLink.classList.add('active');
            loadMapsPage();
        });
    }
}



