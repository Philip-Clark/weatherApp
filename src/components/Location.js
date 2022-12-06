import { createElement } from '../createHtmlFromTemplate';
import { Location } from '../datahandler';
import { clickHamburgerMenu } from './menuButton';

const templateNode = createElement(
  `
  <div id="location">
  <p id="main"></p>
  <p id="secondary"></p>
</div>
`
);

export function UpdateLocation() {
  const content = document.getElementById('location');
  const location = Location.getLocation();
  content.querySelector('#main').textContent = location.name;
  content.querySelector('#secondary').textContent = `${location.state}, ${location.country}`;
}

const LocationComp = () => {
  const content = templateNode.cloneNode(true);
  const location = Location.getLocation();
  content.querySelector('#main').textContent = location.name;
  content.querySelector('#secondary').textContent = `${location.state}, ${location.country}`;

  return content;
};

export default LocationComp;
