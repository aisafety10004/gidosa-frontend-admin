import { Button } from '@/components/ui/Button/Button';
import { Title } from '@/components/ui/Title/Title';
import { cn } from '@/lib/utils';
import { Dispatch, SetStateAction, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface Props {
  menu: {
    id: string;
    title: string;
    path: string;
    subMenus: { id: string; title: string; path?: string }[];
  };
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
export function HeaderMobileMiddleSection({ menu, setIsOpen }: Props) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleClick = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col gap-10pxr justify-start w-full cursor-pointer">
      <Title
        onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
        className={cn(pathname.includes(menu.path) && 'text-blue-400')}
      >
        {menu.title}
      </Title>
      {isSubMenuOpen &&
        menu.subMenus.map((subMenu) => (
          <Button
            key={subMenu.id}
            className="px-10pxr cursor-pointer flex justify-start"
            onClick={() => handleClick(subMenu.path!)}
          >
            {subMenu.title}
          </Button>
        ))}
    </div>
  );
}
