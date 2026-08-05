class Weather {
    constructor(data) {
        this.city = data.resolvedAddress;
        this.temp = data.currentConditions.temp;
        this.icon = data.currentConditions.icon;
        this.humidity = data.currentConditions.humidity;
        this.wind = data.currentConditions.windspeed;
        this.conditions = data.currentConditions.conditions;
        this.description = data.description;
        this.uvindex = data.currentConditions.uvindex;
    }
}

export async function getWeatherByCity(city) {
  return fetchWeather(city);

}

async function getWeatherByCoords(longitude, latitude) {
  return fetchWeather(`${latitude},${longitude}`);
}

export async function fetchWeather(location) {
        const apiKey = 'CWAX8Q2T2V7EC7T9T6XWMKDLX';
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${apiKey}&contentType=json`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log('Resolved Address:', data.resolvedAddress);
            console.log('Description:', data.description);
            console.log('City:', data);
            return new Weather(data);

        } catch (error) {
            console.error('Fetch error:', error);
        }

}


function getLiveLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                resolve({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
            },
            (error) => reject(error)
        );
    });
  }

export async function getWeatherByCurrentLocation() {
    const { latitude, longitude } = await getLiveLocation();

    return await getWeatherByCoords(longitude, latitude);
}

