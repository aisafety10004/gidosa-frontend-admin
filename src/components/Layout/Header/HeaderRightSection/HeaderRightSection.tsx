import Icons from '@/components/icons';
import { Button } from '@/components/ui/Button/Button';
import { CLIENT_PATHS } from '@/constants/paths/client.path';
import { useClickOutside } from '@/hooks/useClickOutside';
import { cn } from '@/utils/styleClsx';
import { Dispatch, SetStateAction, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  isMobile?: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

export function HeaderRightSection({ isMobile, setIsOpen }: Props) {
  const navigate = useNavigate();

  const [_isOpen, _setIsOpen] = useState(false);

  const profileRef = useClickOutside({
    onClickOutside: () => _setIsOpen(false),
  });

  const handleLogout = () => {
    // navigate('/login');
    if (setIsOpen) setIsOpen(false);
    _setIsOpen(false);
  };

  const handleSystemManagement = () => {
    console.log('system management');
    navigate(CLIENT_PATHS.SYSTEM.MAIN);
    if (setIsOpen) setIsOpen(false);
    _setIsOpen(false);
  };

  return (
    <div
      ref={profileRef}
      className={cn('cursor-pointer relative', !isMobile && 'mobile:hidden')}
    >
      <div
        className="flex items-center gap-4pxr"
        onClick={() => _setIsOpen(!_isOpen)}
      >
        <p className="underline underline-offset-4">관리자님</p>
        <Icons.CaretDownSmall
          className={cn('fill-gray-400', _isOpen && 'rotate-180 fill-blue-500')}
        />
      </div>
      {_isOpen && (
        <>
          {/* CSS 만 다름 */}
          {/* Desktop */}
          <div className="absolute -bottom-4pxr translate-y-full right-0pxr border px-16pxr py-8pxr rounded-lg bg-white mobile:hidden">
            <Button
              className="text-sm font-bold hover:text-blue-500 transition-all duration-300 border-none"
              onClick={handleSystemManagement}
            >
              시스템 관리
            </Button>
            <Button
              className="text-sm font-bold hover:text-blue-500 transition-all duration-300 border-none"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>

          {/* Mobile */}
          <div className="flex flex-col gap-10pxr justify-start w-full cursor-pointer no-underline pt-10pxr desktop:hidden">
            <Button
              className="px-10pxr cursor-pointer flex justify-start"
              onClick={handleSystemManagement}
            >
              시스템 관리
            </Button>
            <Button
              className="px-10pxr cursor-pointer flex justify-start"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
