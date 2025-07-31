import { cn } from '@/utils/styleClsx';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default:
          'px-12pxr py-8pxr text-sm font-bold rounded-md bg-blue-500 bg-white border',
        smallMenu:
          'px-12pxr py-8pxr text-sm rounded-md bg-white border border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300',
        smallMenuCancel:
          'px-12pxr py-8pxr text-sm rounded-md bg-white border border-red-400 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300',
      },
      size: {
        default: '',
        '60': 'h-60pxr',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
