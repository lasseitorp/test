import fonts from './_fonts.twig';
import fontsData from './fonts.yml';
/**
 * Storybook Definition.
 */
export default {
  title: 'Base/Fonts',
};

export const Fonts = () => fonts(fontsData);
