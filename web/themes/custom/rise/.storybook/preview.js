import { addDecorator } from '@storybook/html';
import { useEffect } from '@storybook/client-api';
import Twig from 'twig';
import { setupTwig } from './setupTwig';
import { themes } from '@storybook/theming';

// GLOBAL CSS
import '../components/style.scss';

// If in a Drupal project, it's recommended to import a symlinked version of drupal.js.
import './_drupal.js';

// addDecorator deprecated, but not sure how to use this otherwise.
addDecorator((storyFn) => {
  useEffect(() => Drupal.attachBehaviors(), []);
  return storyFn();
});

setupTwig(Twig);

const customViewports = {
  xs: {
    name: 'XS - 320px',
    styles: {
      width: '320px',
      height: '100%',
    },
  },
  small: {
    name: 'S - 480px',
    styles: {
      width: '480px',
      height: '100%',
    },
  },
  medium: {
    name: 'M - 720px',
    styles: {
      width: '720px',
      height: '100%',
    },
  },
  large: {
    name: 'L - 920px',
    styles: {
      width: '920px',
      height: '100%',
    },
  },
  xl: {
    name: 'XL - 1224px',
    styles: {
      width: '1224px',
      height: '100%',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  darkMode: {
    // Override the default dark theme
    dark: { ...themes.dark, appBg: 'black' },
    // Override the default light theme
    light: { ...themes.normal, appBg: 'white' },
  },
  viewport: { viewports: customViewports, defaultViewport: 'responsive' },
};
