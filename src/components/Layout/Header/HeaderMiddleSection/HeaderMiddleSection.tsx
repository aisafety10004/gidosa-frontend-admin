import Icons from '@/components/icons';
import { Button } from '@/components/ui/Button/Button';
import {
  NavigationMenu,
  NavigationMenuList,
} from '@/components/ui/Shadcn/navigationMenu';
import { HEADER_MENUS } from '@/constants/menus/menus';
import { useClickOutside } from '@/hooks/useClickOutside';
import { useState } from 'react';
import { HeaderRightSection } from '../HeaderRightSection/HeaderRightSection';
import { HeaderMiddleSectionItem } from './HeaderMiddleSectionItem';
import { HeaderMobileMiddleSection } from './HeaderMobileMiddleSection';

export function HeaderMiddleSection() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const menuRef = useClickOutside({
    onClickOutside: () => setIsOpen(false),
  });

  return (
    <>
      {HEADER_MENUS.map((menu) => (
        <NavigationMenu
          key={menu.id}
          className="flex flex-row gap-4pxr mobile:hidden"
        >
          <NavigationMenuList>
            <HeaderMiddleSectionItem menu={menu} />
          </NavigationMenuList>
        </NavigationMenu>
      ))}
      <div ref={menuRef} className="desktop:hidden">
        <Button className="flex justify-end" onClick={handleOpen}>
          {!isOpen && <Icons.MenuIcon className="h-24pxr" />}
        </Button>

        {isOpen && (
          <div
            className="absolute top-0pxr left-0pxr h-screen w-full bg-gray-300 bg-opacity-50 flex justify-end"
            // onClick={handleOpen}
          >
            <div className="text-black w-3/4 h-full bg-white flex flex-col gap-28pxr p-40pxr items-end">
              <div className="flex justify-between w-full">
                <HeaderRightSection isMobile={true} setIsOpen={setIsOpen} />
              </div>
              <div className="flex flex-col gap-30pxr justify-end w-full">
                {HEADER_MENUS.map((menu) => (
                  <HeaderMobileMiddleSection
                    key={menu.id}
                    menu={menu}
                    setIsOpen={setIsOpen}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
