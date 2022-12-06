import { createElement } from '../createHtmlFromTemplate';

const templateNode = createElement(
  `
  <div class="WeatherDetail" id="">
  <p class="label"></p>
  <div>
    <p class="value"></p>
    <p class="unit"></p>
  </div>

</div>
`
);

export function updateDetail(title, value, unit) {
  let detail = document.getElementById(title);
  detail.querySelector('.value').textContent = value;
  detail.querySelector('.unit').textContent = unit;
}

const WeatherDetail = (label, value, unit) => {
  const content = templateNode.cloneNode(true);
  content.id = label.replace(' ', '_');
  content.querySelector('.label').textContent = label;
  content.querySelector('.value').textContent = value;
  content.querySelector('.unit').textContent = unit;
  return content;
};

export default WeatherDetail;
