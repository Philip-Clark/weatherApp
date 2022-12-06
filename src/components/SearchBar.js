import { createElement } from '../createHtmlFromTemplate';
import { Search } from '../datahandler';
import SearchSuggestion from './SearchSuggestion';

const templateNode = createElement(
  `
  <div class="search">
  <input
    type="search"
    name="LocationSearch"
    id="locationSearch"
    placeholder="search location"
  />
  <ul id="LocationSuggestions"></ul>
</div>
`
);

async function updateSuggestionsList(value, id) {
  const suggestions = await Search.searchChanged(value);
  const suggestionsList = document.getElementById(id).querySelector('#LocationSuggestions');
  suggestionsList.innerHTML = '';

  [...suggestions].forEach((suggestion, index) => {
    suggestionsList.append(SearchSuggestion(suggestion, id));
  });
}

let suggestLocationDelay = '';
function searchBarChanged(value, id) {
  clearTimeout(suggestLocationDelay);
  suggestLocationDelay = setTimeout(() => {
    updateSuggestionsList(value, id);
  }, 300);
}

const SearchBar = (id) => {
  const content = templateNode.cloneNode(true);
  content.id = id;
  const searchBar = content.querySelector('#locationSearch');
  searchBar.addEventListener('input', () => {
    searchBarChanged(searchBar.value, id);
  });

  return content;
};

export default SearchBar;
