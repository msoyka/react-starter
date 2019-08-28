import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

const stories = storiesOf('Generic|App', module);

stories.add('default', () => <Button text={'Test'} />);
