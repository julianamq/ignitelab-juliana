
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    asChild?: boolean;
}

export function Button({ children, asChild, className, ...props }: ButtonProps) {

    const Comp = asChild ? Slot : 'button';

    return (
        <Comp className={clsx(
            'py-4 px3 bg-blue-200 rounded-sm font-semibold text-black  text-small w-full transition-colors hover:bg-blue-300 focus:ring-2 ring-white ',

            className,
        )}{...props}
        >
            {children}
        </Comp>
    )
}