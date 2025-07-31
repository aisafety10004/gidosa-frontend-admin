import { cn } from '@/utils/styleClsx';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

// TODO: 공통 스타일 추가 관리 필요
const inputVariants = cva(
  // 'disabled:cursor-not-allowed bg-transparent focus-visible:outline-none disabled:bg-light-30',
  '',
  {
    variants: {
      variant: {
        // default: 'w-full txt-bodyNormal-regular placeholder:text-dark-40',
        default:
          'border rounded-lg px-12pxr py-8pxr text-sm font-bold outline-none',
      },
    },
    defaultVariants: {
      // variant: 'default',
    },
  },
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
