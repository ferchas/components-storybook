import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

import MenuF from './index-fr';
import MenuC from './index-cr';

import ListMenu from './mocks.json';

storiesOf('Menu', module)
  .add('Menu-FR', () => <MenuF list={ListMenu} /> )
  .add('Menu-CR', () => <MenuC list={ListMenu} /> );