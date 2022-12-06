import { createElement } from '../createHtmlFromTemplate';
import './styles/wavesMain.css';
import wavesMobile from '../assets/wavesMobile.svg';
import wavesDesktop from '../assets/wavesDesktop.svg';
import wavesDesktopBottom from '../assets/wavesDesktopBottom.svg';

const templateNode = createElement(
  `
  <div id="decorativeWaves">
    <img id="wavesDesktop" class="waves"/>
  </div>
  

`
);

const WavesMain = () => {
  const content = templateNode.cloneNode(true);
  content.querySelector('#wavesDesktop').src = wavesDesktop;
  return content;
};

export default WavesMain;
