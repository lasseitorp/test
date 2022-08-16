import link from './link.twig';

import defaultData from './default.yml';
import altData from './alt.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Links' };

export const Default = () => link(defaultData);
export const Alternative = () => link(altData);
