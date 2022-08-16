// Buttons Stories
import logo from './logo.twig';

/**
 * Storybook Definition.
 */
export default {
  title: 'Atoms/Logo',
  parameters: {
    layout: 'centered',
  },
};

export const Logo = () => logo();
