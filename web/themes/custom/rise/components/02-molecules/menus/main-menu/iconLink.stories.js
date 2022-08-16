import searchLink from './_main-menu-icon-link.twig';

/**
 * Storybook Definition.
 */
export default {
  title: 'Atoms/Icon Link',
  parameters: {
    layout: 'centered',
  },
};

export const SearchLink = () =>
  searchLink({ link_title: 'Sök', link_icon: 'search' });

export const LanguageLink = () =>
  searchLink({ link_title: 'Eng', link_icon: 'language' });
