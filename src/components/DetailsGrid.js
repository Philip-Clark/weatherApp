import { createElement } from '../createHtmlFromTemplate';
import { Weather } from '../datahandler';
import WeatherDetail, { updateDetail } from './WeatherDetail';

const templateNode = createElement(
  `
    <div id="detailsGrid">
    </div>
`
);

export const updateDetails = () => {
  updateDetail('Wind', Weather.getWind().value, Weather.getWind().unit);
  updateDetail('Pressure', Weather.getPressure().value, '');
  updateDetail('Humidity', Weather.getHumidity().value, '%');
  updateDetail('Cloud_Cover', Weather.getCloudCover().value, '%');
};

const DetailsGrid = () => {
  const content = templateNode.cloneNode(true);
  content.appendChild(WeatherDetail('Wind', Weather.getWind().value, Weather.getWind().unit));
  content.appendChild(WeatherDetail('Pressure', Weather.getPressure().value, ''));
  content.appendChild(WeatherDetail('Humidity', Weather.getHumidity().value, '%'));
  content.appendChild(WeatherDetail('Cloud Cover', Weather.getCloudCover().value, '%'));

  return content;
};

export default DetailsGrid;
