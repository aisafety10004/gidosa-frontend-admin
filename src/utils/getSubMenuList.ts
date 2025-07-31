import { MANAGEMENT_SUB_MENU } from '@/constants/menus/subMenus';
import { CLIENT_PATHS } from '@/constants/paths/client.path';

export function getSubMenuList(pathname: string) {
  let subMenuList: {
    id: string;
    title: string;
    icon?: React.ElementType;
    path: string;
  }[] = [];

  if (pathname.includes(CLIENT_PATHS.MANAGEMENT.MAIN)) {
    subMenuList = MANAGEMENT_SUB_MENU;
  }

  return subMenuList;
}
