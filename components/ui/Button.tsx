import React from 'react'
import { cn } from '@/lib/utils'

const Button = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <button className={cn(`w-fit bg-blue text-white text-[14px] lg:text-[16px] font-inter font-medium uppercase px-4 lg:px-8 py-2 rounded-[8px] hover:bg-blue/90 transition-colors cursor-pointer`, className)}>
            {children}
        </button>
    )
}

export default Button