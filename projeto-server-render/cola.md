## Colinha do Storybook
```js
// [Storybook]

import { configure } from '@storybook/react'
// import AddonJSX from 'storybook-addon-jsx'
// import { withInfo } from '@storybook/addon-info';
// import { withKnobs } from '@storybook/addon-knobs';
//// Addons
// setAddon(AddonJSX)

// Decorators
// addDecorator(withInfo())
// addDecorator(withKnobs());

// Find All Stories
const req = require.context('../src', true, /stories.js$/)

function loadStories() {
  req.keys().forEach(file => req(file));
}

configure(loadStories(), module)
```