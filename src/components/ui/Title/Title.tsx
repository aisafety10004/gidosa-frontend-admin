import { cn } from '@/utils/styleClsx';
import React from 'react';

export interface TitleProps extends React.HTMLAttributes<HTMLHeadElement> {}

const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(
  ({ className, ...props }, ref) => {
    return <h1 className={cn(className)} ref={ref} {...props} />;
  }
);
Title.displayName = 'Title';

export { Title };
