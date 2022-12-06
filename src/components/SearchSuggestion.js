import { createElement } from '../createHtmlFromTemplate';
import { Location, Weather } from '../datahandler';
import { UpdateLocation } from './location';
import { updateWeatherComp } from './WeatherComp';

const templateNode = createElement(
  `
<p class="suggestion"></p>
`
);

async function handleSuggestionClick(suggestion, id) {
  Location.setLocation(suggestion);
  document.getElementById(id).querySelector('#LocationSuggestions').innerHTML = '';
  document.getElementById(id).querySelector('#locationSearch').value = suggestion.name;
  await Weather.updateWeather();
  updateWeatherComp();
  UpdateLocation();
}

const SearchSuggestion = (suggestion, id) => {
  const content = templateNode.cloneNode(true);

  content.textContent = `${suggestion.name} ${suggestion.state}, ${suggestion.country}`; // Dallas Texas, USA
  content.addEventListener('click', () => handleSuggestionClick(suggestion, id));

  return content;
};

export default SearchSuggestion;
