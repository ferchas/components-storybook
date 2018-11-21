import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import MenuF from './index-fr';
import MenuC from './index-cr';
import Readme from './README.md';

import ListMenu from './mocks.json';

storiesOf('Menu', module)
  .add('Menu-FR', () => <MenuF list={ListMenu} action={action}/>, {
    notes: { markdown: Readme },
  })
  .add('Menu-CR', () => <MenuC list={ListMenu} /> );