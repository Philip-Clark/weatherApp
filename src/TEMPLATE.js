import { createElement } from './createHtmlFromTemplate';

const templateNode = createElement(
  `
  <div id="tabContent">
    <h1>Home</h1>
    <h2 id="name">name goes here</h2>
    <p>Anim fugiat aliqua laboris minim proident ad aliqua et ullamco voluptate cillum. Enim eu sint aliqua duis id velit sint ut in consequat reprehenderit magna nisi. Occaecat enim occaecat ipsum enim labore ex ullamco tempor incididunt.
    </p>
  </div>
`
);

const TEMPLATE = (name) => {
  const content = templateNode.cloneNode(true);
  content.querySelector('#name').textContent = name;
  return content;
};

export default TEMPLATE;
