import { createElement } from '../createHtmlFromTemplate';
import './styles/wavesMain.css';
import './styles/MenuStyle.css';
import wavesMobile from '../assets/wavesMobile.svg';
import wavesMenu from '../assets/wavesMenu.svg';
import wavesDesktopBottom from '../assets/wavesDesktopBottom.svg';
import SearchBar from './SearchBar';
import UnitButton from './unitButton';

const templateNode = createElement(
  `
  <div id="menuDrawer" open="false">
    <img id="wavesMenu" class="waves"/>
    <img id="wavesMobile" class="waves"/>
    <div id="menuContent"> 
      <h1>Choose Location</h1>
    </div>
  </div>
  

`
);

const Menu = () => {
  const content = templateNode.cloneNode(true);
  const container = content.querySelector('#menuContent');

  content.querySelector('#wavesMobile').src = wavesMobile;
  content.querySelector('#wavesMenu').src = wavesMenu;
  container.appendChild(SearchBar('mobile'));
  container.appendChild(UnitButton()).id = 'mobileUnitButton';

  return content;
};

export default Menu;
