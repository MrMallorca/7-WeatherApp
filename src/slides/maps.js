import loadNavBarPage from '../components/navBar.js'; 

export default function loadMaps() { 

    const content = document.getElementById('content');
    content.innerHTML = '';

    const navBar = loadNavBarPage();

    content.appendChild(navBar);

}