import listTwig from './list.twig';

import listData from './list.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Lists' };

export const UnorderedList = () => `
  <div class="text-field">
    ${listTwig({ list_items: listData.unordered__list_items })}
  </div>
`;
export const OrderedList = () => `
<div class="text-field">
  ${listTwig({ list_items: listData.ordered__list_items, list__type: 'ol' })}
</div>
`;
