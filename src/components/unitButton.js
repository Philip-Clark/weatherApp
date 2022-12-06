import { createElement } from '../createHtmlFromTemplate';
import { Weather } from '../datahandler';
import { updateWeatherComp } from './WeatherComp';

const templateNode = createElement(
  `

    <button id="unitButton">use metric</button>

`
);

const UnitButton = () => {
  const content = templateNode.cloneNode(true);
  content.innerText = Weather.getWeather().units == 'imperial' ? 'use metric' : 'use imperial';

  content.addEventListener('click', async () => {
    content.innerText = Weather.toggleUnit() == 'imperial' ? 'use metric' : 'use imperial';
    await Weather.updateWeather();
    updateWeatherComp();
  });

  return content;
};

export default UnitButton;
