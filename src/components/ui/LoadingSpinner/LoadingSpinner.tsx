import { cn } from '@/utils/styleClsx';

interface LoadingSpinnerProps {
  className?: string;
}

export default function LoadingSpinner({ className }: LoadingSpinnerProps) {
  return (
    <div
      className={cn(
        'h-52pxr w-52pxr animate-spin rounded-full border-4 border-gray-300 border-t-blue-500',
        className
      )}
    />
  );
}
