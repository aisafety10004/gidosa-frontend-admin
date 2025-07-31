import { Button } from '@/components/ui/Button/Button';
import { cn } from '@/lib/utils';

interface props {
  title: string;
  callback: () => void;
  disabled?: boolean;
  className?: string;
}

export function ApprovalButtons({
  title,
  callback,
  disabled,
  className,
}: props) {
  return (
    <Button
      variant="default"
      disabled={disabled}
      className={cn(
        'hover:bg-blue-500 hover:text-white cursor-pointer text-gray-600 border-gray-300 hover:border-transparent',
        className,
      )}
      onClick={() => callback()}
    >
      {title}
    </Button>
  );
}
