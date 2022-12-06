import { tempWeather } from './tempWeather';

const API = (() => {
  const key = '8be9a01f982df724981a18fb6ecd377c';
  return { key };
})();

export const Weather = (() => {
  let weatherInfo =
    localStorage.getItem('weather') == null
      ? tempWeather
      : JSON.parse(localStorage.getItem('weather'));

  let weatherUnit = weatherInfo.units == undefined ? 'imperial' : weatherInfo.units;

  const toggleUnit = () => {
    weatherUnit = weatherUnit == 'imperial' ? 'metric' : 'imperial';
    return weatherUnit;
  };

  const getIcon = async () => {
    let imgUrl = `https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@4x.png`;
    const response = await fetch(imgUrl);
    return await response.url;
  };

  const updateWeather = async () => {
    const location = Location.getLocation();
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${API.key}&units=${weatherUnit}`;
    const response = await fetch(url);
    weatherInfo = await response.json();
    weatherInfo['units'] = weatherUnit;
    localStorage.setItem('weather', JSON.stringify(weatherInfo));
  };

  const getWeather = () => {
    return weatherInfo;
  };

  function getWind() {
    const wind = Math.round(weatherInfo.wind.speed);
    return { value: wind, unit: weatherUnit == 'imperial' ? ' mph' : ' kmph' };
  }
  function getPressure() {
    const pressure = Math.round(100 * weatherInfo.main.pressure * 0.02953) / 100;
    return { value: pressure, unit: '' };
  }
  function getHumidity() {
    const humidity = weatherInfo.main.humidity;
    return { value: humidity, unit: '%' };
  }
  function getCloudCover() {
    const cloudCover = weatherInfo.clouds.all;
    return { value: cloudCover, unit: '%' };
  }

  function getTemp() {
    const unit = weatherInfo.units == 'imperial' ? 'F' : 'C';
    const tempRounded = Math.floor(weatherInfo.main.temp);
    return `${tempRounded} ${unit}`;
  }

  return {
    getWeather,
    updateWeather,
    getIcon,
    toggleUnit,
    weatherUnit,
    getWind,
    getCloudCover,
    getHumidity,
    getPressure,
    getTemp,
  };
})();

export const Location = (() => {
  const TmpLocation = {
    country: 'US',
    lat: 33.4425458,
    lon: -94.1305777,
    name: 'Nash',
    state: 'Texas',
  };
  let location =
    localStorage.getItem('location') == null
      ? TmpLocation
      : JSON.parse(localStorage.getItem('location'));

  const suggestLocation = async (cityName) => {
    let url = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=${5}&appid=${
      API.key
    }`;
    const response = await fetch(url);
    const suggestionList = await response.json();
    return suggestionList;
  };

  const getLocation = () => {
    return location;
  };
  const setLocation = (newLocation) => {
    location = newLocation;
    localStorage.setItem('location', JSON.stringify(location));
  };

  return { suggestLocation, getLocation, setLocation };
})();

export const Search = (() => {
  let suggestions = [];

  async function searchChanged(value) {
    if (value.length > 0) return (suggestions = await Location.suggestLocation(value));
  }

  return { searchChanged, suggestions };
})();
