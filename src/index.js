import LocationComp from './components/location';
import Menu from './components/Menu';
import MenuButton from './components/menuButton';
import SearchBar from './components/SearchBar';
import WavesMain from './components/wavesMain';
import WeatherComp from './components/WeatherComp';
import './globalStyles.css';

function component() {
  const element = document.createElement('main');
  const limitedWidth = document.createElement('div');
  limitedWidth.id = 'limitWidth';
  limitedWidth.appendChild(WeatherComp());
  limitedWidth.appendChild(LocationComp());

  limitedWidth.querySelector('#location').appendChild(SearchBar('desktop'));

  element.appendChild(MenuButton());
  element.appendChild(limitedWidth);

  //Decorative waves
  element.appendChild(WavesMain());

  return element;
}

document.body.appendChild(component());
document.body.appendChild(Menu());
