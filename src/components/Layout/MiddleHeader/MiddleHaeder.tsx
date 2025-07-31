import { getSubMenuList } from '@/utils/getSubMenuList';
import { cn } from '@/utils/styleClsx';
import { Link, Outlet, useLocation } from 'react-router-dom';

export function MiddleHeader() {
  const { pathname } = useLocation();

  const subMenuList = getSubMenuList(pathname);

  return (
    <>
      <div className="relative w-full h-[200px] mobile:h-[240px] bg-lime-500 mb-4pxr overflow-hidden">
        <img
          src="/public/photo-main-slide3.jpg"
          className="absolute w-full h-full object-cover opacity-80"
          alt="안전 장비"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-20pxr text-white z-20 w-full h-full gap-20pxr">
          {/* <h2 className="text-4xl font-bold mb-16pxr">ERP 관리 시스템</h2> */}

          <ul className="flex desktop:gap-80pxr flex-wrap gap-20pxr">
            {subMenuList.map((el) => (
              <Link
                key={el.id}
                to={el.path}
                className={cn(
                  'cursor-pointer flex flex-col items-center border rounded-lg p-16pxr bg-white text-black opacity-70 hover:text-blue-400 transition-all duration-300 group gap-12pxr',
                  pathname === el.path && 'text-blue-400',
                )}
              >
                {el.icon && (
                  <el.icon
                    className={cn(
                      'group-hover:stroke-blue-400',
                      pathname === el.path && 'stroke-blue-400',
                    )}
                  />
                )}
                <p className="text-sm">{el.title}</p>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-page mt-20pxr">
        <Outlet />
      </div>
    </>
  );
}
