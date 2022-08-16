import breadcrumb from './breadcrumbs/breadcrumbs.twig';
import footerMenu from './footer-menu/footer-menu.twig';
import mainMenu from './main-menu/main-menu.twig';
import socialMenu from './social/social-menu.twig';

import breadcrumbsData from './breadcrumbs/breadcrumbs.yml';
import footerMenuData from './footer-menu/footer-menu.yml';
import mainMenuData from './main-menu/main-menu.yml';
import socialMenuData from './social/social-menu.yml';

import './main-menu/main-menu';

/**
 * Storybook Definition.
 */
export default {
  title: 'Molecules/Menus',
  decorators: [
    (story) =>
      `<div style="margin: 0 auto; max-width: 1224px;">${story()}</div>`,
  ],
};

export const breadcrumbs = () => breadcrumb(breadcrumbsData);

export const footer = () => footerMenu(footerMenuData);

export const main = () => mainMenu(mainMenuData);

export const social = () => socialMenu(socialMenuData);
