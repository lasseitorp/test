module.exports = {
  stories: [
    '../components/**/*.stories.mdx',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-dark-mode',
    '@storybook/addon-docs',
  ],
  staticDirs: ['./public', '../dist', '../images', '../fonts'],
};
