import { createElement } from '../createHtmlFromTemplate';
import './styles/hamburgerMenu.css';

const templateNode = createElement(
  `
  <div id="hamburgerMenu">
   <div></div>
   <div></div>
   <div></div>
  </div>
`
);

export function clickHamburgerMenu() {
  const menu = document.getElementById('menuDrawer');
  const menuButton = document.getElementById('hamburgerMenu');

  const value = menu.getAttribute('open') == 'true' ? 'false' : 'true';
  menu.setAttribute('open', value);
  menuButton.setAttribute('open', value);
}

const MenuButton = () => {
  const content = templateNode.cloneNode(true);
  content.addEventListener('click', clickHamburgerMenu);
  return content;
};

export default MenuButton;
