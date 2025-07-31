import { SYSTEM_MENUS } from '@/constants/menus/systemMenus';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Button } from '../ui/Button/Button';
import SystemPayment from './approval';
import SystemMenu from './menu';

export default function SystemAdmin() {
  const [selectedMenu, setSelectedMenu] = useState(SYSTEM_MENUS[0].title);
  return (
    <div className="mx-auto max-w-page px-20pxr py-12pxr gap-20pxr flex flex-col h-full">
      <div className="flex gap-12pxr items-center">
        <ul className="flex gap-12pxr items-center flex-wrap">
          {SYSTEM_MENUS.map((menu) => (
            <li key={menu.id}>
              <Button
                variant="smallMenu"
                color="primary"
                className={cn(
                  selectedMenu === menu.title && 'bg-blue-500 text-white',
                )}
                onClick={() => setSelectedMenu(menu.title)}
              >
                {menu.title}
              </Button>
            </li>
          ))}
        </ul>
      </div>
      {selectedMenu === '결제함' && <SystemPayment />}
      {selectedMenu === '메뉴관리' && <SystemMenu />}
    </div>
  );
}
