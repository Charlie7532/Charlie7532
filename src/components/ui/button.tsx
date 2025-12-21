import { cn } from '@/utilities/ui'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
    variants: {
      size: {
        clear: '',
        default: 'h-10 px-4 py-2',
        icon: 'h-10 w-10',
        lg: 'h-11 rounded px-8',
        sm: 'h-9 rounded px-3',
      },
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        ghost: 'hover:bg-card hover:text-accent-foreground',
        link: 'text-primary items-start justify-start underline-offset-4 hover:underline',
        outline: 'border border-border bg-background hover:bg-card hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      },
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
  ref?: React.Ref<HTMLButtonElement>
  startContent?: React.ReactNode
  endContent?: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({
  asChild = false,
  className,
  size,
  variant,
  ref,
  startContent,
  endContent,
  children,
  ...props
}) => {
  const Comp = asChild ? Slot : 'button'

  // Create the button content
  const buttonContent = (
    <>
      {startContent && <span className="mr-2 flex items-center">{startContent}</span>}
      {children}
      {endContent && <span className="ml-2 flex items-center">{endContent}</span>}
    </>
  )

  // If using asChild, we need to ensure we have only one child
  if (asChild) {
    // If we have start/end content or multiple children, wrap in a single element
    if (startContent || endContent) {
      return (
        <Comp className={cn(buttonVariants({ className, size, variant }))} ref={ref} {...props}>
          <span className="flex items-center">
            {buttonContent}
          </span>
        </Comp>
      )
    }
    // If only children and it's a single element, pass it directly
    return (
      <Comp className={cn(buttonVariants({ className, size, variant }))} ref={ref} {...props}>
        {children}
      </Comp>
    )
  }

  // Regular button (not asChild)
  return (
    <Comp className={cn(buttonVariants({ className, size, variant }))} ref={ref} {...props}>
      {buttonContent}
    </Comp>
  )
}

export { Button, buttonVariants }
