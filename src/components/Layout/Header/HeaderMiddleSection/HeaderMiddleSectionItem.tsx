import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from '@/components/ui/Shadcn/navigationMenu';
import { cn } from '@/utils/styleClsx';
import { Link, useLocation } from 'react-router-dom';

interface props {
  menu: {
    id: string;
    title: string;
    path: string;
    subMenus: { id: string; title: string; path?: string }[];
  };
}

export function HeaderMiddleSectionItem({ menu }: props) {
  const { pathname } = useLocation();

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger
        className={cn(
          'hover:bg-white',
          pathname.includes(menu.path) && 'text-blue-400',
        )}
      >
        {menu.title}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul>
          {menu.subMenus.map((sub) => (
            <li
              key={sub.id}
              className="flex flex-col w-80pxr px-12pxr py-8pxr text-center"
            >
              <NavigationMenuLink
                asChild
                className=" hover:text-blue-400 transition-all duration-300  flex justify-center items-center"
              >
                <Link to={sub.path!} className="text-xs w-full">
                  {sub.title}
                </Link>
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
