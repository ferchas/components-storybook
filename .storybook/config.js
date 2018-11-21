import { configure, addDecorator } from '@storybook/react';
import { withNotes } from '@storybook/addon-notes';
 
addDecorator(withNotes);

const req = require.context('../stories', true, /stories\.js$/);

 const loadStories = () => {
  req.keys().forEach(req);
}

configure(loadStories, module);
