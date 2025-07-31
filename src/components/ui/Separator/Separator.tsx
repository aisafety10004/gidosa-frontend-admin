import { cn } from '@/utils/styleClsx';
import React from 'react';

interface SeparatorProps {
  direction?: 'horizontal' | 'vertical';
  className?: string;
}

const Separator: React.FC<SeparatorProps> = ({
  direction = 'horizontal',
  className,
}) => {
  const isHorizontal = direction === 'horizontal';

  return (
    <div
      className={cn(
        'shrink-0 bg-gray-400',
        isHorizontal ? 'h-1pxr' : 'h-12pxr w-1pxr',
        className
      )}
    />
  );
};

export default Separator;
