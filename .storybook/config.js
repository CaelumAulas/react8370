import { configure, setAddon, addDecorator } from '@storybook/react';
import AddonJSX from 'storybook-addon-jsx'
import { withInfo } from '@storybook/addon-info';

// Addons
setAddon(AddonJSX)

// Decorators
addDecorator(withInfo())

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /stories.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
