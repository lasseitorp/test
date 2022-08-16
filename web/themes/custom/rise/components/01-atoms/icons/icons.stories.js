import iconTwig from './icons.twig';
import iconData from './iconData.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Icons' };

export const Icons = () => iconTwig(iconData);
