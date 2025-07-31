import Icons from '@/components/icons';
import { cn } from '@/lib/utils';

interface Props {
  children: React.ReactNode;
  show: boolean;
  type: 'success' | 'error' | 'info';
}

export default function Toast({ children, show, type }: Props) {
  return (
    <div
      className={cn(
        'z-toast fixed left-1/2 top-40pxr flex min-h-48pxr min-w-[440px] -translate-x-1/2 items-center rounded-6pxr bg-[#4c525f] pl-16pxr pr-52pxr',
        show
          ? 'pointer-events-auto visible translate-y-0pxr opacity-100'
          : 'pointer-events-none invisible -translate-y-20pxr opacity-0',
        'transform transition-all duration-300 ease-in-out will-change-transform',
      )}
    >
      {type === 'success' ? (
        <Icons.ToastSuccess className="mr-12pxr" />
      ) : type === 'error' ? (
        <Icons.ToastError className="mr-12pxr" />
      ) : (
        <Icons.ToastInfo className="mr-12pxr" />
      )}
      <span className="flex-1 whitespace-pre-line text-center text-white text-base font-bold">
        {children}
      </span>
    </div>
  );
}
