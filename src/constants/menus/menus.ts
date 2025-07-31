import { CLIENT_PATHS } from '@/constants/paths/client.path';
import {
  CONSTRUCTION_SUB_MENU,
  MANAGEMENT_SUB_MENU,
  PERSONNEL_SUB_MENU,
  SAFETY_SUB_MENU,
  SALES_SUB_MENU,
  SITE_SUB_MENU,
} from './subMenus';

export const HEADER_MENUS = [
  {
    id: 'header-menu-management',
    title: '경영기획',
    path: CLIENT_PATHS.MANAGEMENT.MAIN,
    subMenus: MANAGEMENT_SUB_MENU,
  },
  {
    id: 'header-menu-personnel',
    title: '인사회계',
    path: CLIENT_PATHS.PERSONNEL.MAIN,
    subMenus: PERSONNEL_SUB_MENU,
  },
  {
    id: 'header-menu-sales',
    title: '영업관리',
    path: CLIENT_PATHS.SALES.MAIN,
    subMenus: SALES_SUB_MENU,
  },
  {
    id: 'header-menu-construction',
    title: '시공관리',
    path: CLIENT_PATHS.CONSTRUCTION.MAIN,
    subMenus: CONSTRUCTION_SUB_MENU,
  },
  {
    id: 'header-menu-safety',
    title: '안전관리',
    path: CLIENT_PATHS.SAFETY.MAIN,
    subMenus: SAFETY_SUB_MENU,
  },
  {
    id: 'header-menu-site',
    title: '현장관리',
    path: CLIENT_PATHS.SITE.MAIN,
    subMenus: SITE_SUB_MENU,
  },
];
