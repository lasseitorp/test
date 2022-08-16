// Buttons Stories
import button from './button.twig';

import buttonData from './button.yml';

import IconList from '../icons/iconList';

/**
 * Storybook Definition.
 */
export default {
  title: 'Atoms/Button',
  parameters: {
    layout: 'centered',
  },
  args: {
    icon: 'none',
    iconPosition: 'startIcon',
  },
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: IconList,
      },
    },
    iconPosition: {
      control: {
        type: 'radio',
        options: ['startIcon', 'endIcon'],
      },
    },
  },
};

export const Button = ({ iconPosition, icon }) =>
  button({
    ...buttonData,
    button_icon: icon,
    button_icon__position: iconPosition,
  });
