import footerTwig from './site-footer/site-footer.twig';
import siteHeader from './site-header/site-header.twig';

import footerSocial from '../../02-molecules/menus/social/social-menu.yml';
import footerMenu from '../../02-molecules/menus/footer-menu/footer-menu.yml';
import breadcrumbData from '../../02-molecules/menus/breadcrumbs/breadcrumbs.yml';
import mainMenuData from '../../02-molecules/menus/main-menu/main-menu.yml';

import '../../02-molecules/menus/main-menu/main-menu';
import './site-header/site-header';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Site' };

export const footer = () => footerTwig({ ...footerSocial, ...footerMenu });

export const header = () =>
  siteHeader({
    ...breadcrumbData,
    ...mainMenuData,
  });
