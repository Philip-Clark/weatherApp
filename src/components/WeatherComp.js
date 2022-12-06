import { createElement } from '../createHtmlFromTemplate';
import { Weather } from '../datahandler';
import DetailsGrid, { updateDetails } from './DetailsGrid';
import UnitButton from './unitButton';
import WeatherDetail, { updateDetail } from './WeatherDetail';

const templateNode = createElement(
  `
  <div id="weatherDiv">
    <div>
      <img id="icon" width="192" height="192" alt="icon" src="" />
      <h1 id="temp">0</h1>
    </div>

  </div>
`
);

async function updateIcon() {
  const iconImg = await Weather.getIcon();
  const image = document.body.querySelector('#icon');
  image.src = iconImg;
}

export const updateWeatherComp = () => {
  document.body.querySelector('#temp').textContent = Weather.getTemp();
  updateDetails();
  updateIcon();
};

const WeatherComp = () => {
  const content = templateNode.cloneNode(true);

  content.querySelector('#temp').textContent = Weather.getTemp();

  content.appendChild(UnitButton()).id = 'desktopUnitButton';
  content.appendChild(DetailsGrid());

  updateIcon();

  return content;
};

export default WeatherComp;
