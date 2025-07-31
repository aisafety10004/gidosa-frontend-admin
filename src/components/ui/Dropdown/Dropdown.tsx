import Icons from '@/components/icons';
import { useClickOutside } from '@/hooks/useClickOutside';
import { cn } from '@/utils/styleClsx';
import { Dispatch, SetStateAction, useState } from 'react';

interface DropdownProps {
  menus: {
    id: string;
    title: string;
    description?: string;
  }[];
  selectedValue: string;
  setSelectedValue: Dispatch<SetStateAction<string>>;
  className?: string;
  dropdownClassName?: string;
  disabled?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  menus,
  selectedValue,
  setSelectedValue,
  className,
  dropdownClassName,
  disabled,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useClickOutside({
    onClickOutside: () => setIsDropdownOpen(false),
  });

  return (
    <div
      ref={dropdownRef}
      className={cn(
        'relative flex min-w-120pxr cursor-pointer items-center justify-between gap-4pxr rounded-lg bg-white px-12pxr mobile:min-w-100pxr',
        className ? className : 'py-8pxr text-xs',
        disabled && 'cursor-not-allowed text-gray-400',
      )}
      onClick={() => !disabled && setIsDropdownOpen(!isDropdownOpen)}
    >
      <p className="flex-1 text-center">
        {menus.find((menu) => menu.id === selectedValue)?.title}
      </p>
      <Icons.CaretDownSmall
        className={cn('fill-gray-400 ', isDropdownOpen && 'rotate-180')}
      />
      {isDropdownOpen && (
        <div
          className={cn(
            'absolute -bottom-4pxr left-0pxr z-50 w-full translate-y-full overflow-hidden rounded-lg border bg-white ',
            dropdownClassName ? dropdownClassName : 'text-xm',
          )}
        >
          <ul className="flex flex-col gap-8pxr">
            {menus
              .filter((menu) => menu.id !== selectedValue)
              .map((menu) => (
                <li
                  key={menu.id}
                  className="flex cursor-pointer items-center justify-center px-8pxr py-4pxr text-black hover:bg-slate-200"
                  onClick={() => setSelectedValue(menu.id)}
                >
                  {menu.title}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
