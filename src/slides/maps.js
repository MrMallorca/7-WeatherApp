import loadNavBarPage from '../components/navBar.js'; 

export default function loadMapsPage() { 

    const content = document.getElementById('content');
    content.innerHTML = '';

    const navBar = loadNavBarPage('maps');
    content.appendChild(navBar);
    
    const body = loadMaps();
    content.appendChild(body);

}

function loadMaps() {
    const main = document.createElement('div');
    main.classList.add('main');
    main.innerHTML = `
        <div class="left">
            <h1 class="hero-title">Weather Maps</h1>
            <p class="hero-sub">Explore weather conditions across the globe with our interactive weather maps. Visualize temperature, precipitation, wind patterns, and more in real-time.</p>
        </div>
        <div class="right">
            <div class="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d126743.123456789!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!
                2sus!4v1234567890123" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    `;
    return main;
}