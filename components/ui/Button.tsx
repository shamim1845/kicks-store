import React from 'react'
import { cn } from '@/lib/utils'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string
}

const Button = ({ children, className, ...props }: ButtonProps) => {
    return (
        <button
            {...props}
            className={cn(
                'w-fit bg-blue text-white text-[14px] min-h-[40px] lg:min-h-[48px] font-inter font-medium uppercase px-4 lg:px-8 py-2 rounded-[8px] hover:bg-blue/90 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
                className
            )}
        >
            {children}
        </button>
    )
}

export default Button