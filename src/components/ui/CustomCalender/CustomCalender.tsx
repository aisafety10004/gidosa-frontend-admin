import Icons from '@/components/icons';
import { useRef } from 'react';

interface CustomCalenderProps {
  value: string;
  onChange: (value: string) => void;
  title: string;
}

export default function CustomCalender({
  value,
  onChange,
  title,
}: CustomCalenderProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current?.showPicker) {
      inputRef.current.showPicker();
    } else {
      inputRef.current?.focus();
    }
  };
  return (
    <div
      onClick={handleClick}
      className="relative w-full cursor-pointer rounded-md border border-gray-300 p-12pxr"
    >
      <div className="flex items-center justify-between">
        <p className="h-full w-full text-sm text-gray-800">
          {value ? value.replace(/-/g, '.') : title}
        </p>
        <Icons.CalendarBasic className="fill-gray-400" />
      </div>

      <input
        ref={inputRef}
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pointer-events-none absolute -bottom-6pxr left-0pxr w-full opacity-0"
      />
    </div>
  );
}
