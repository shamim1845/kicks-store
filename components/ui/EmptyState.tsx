import { cn } from '@/lib/utils'

interface EmptyStateProps {
    title?: string
    description?: string
    icon?: React.ReactNode
    className?: string
}

const EmptyState = ({
    title = 'No products found',
    description = 'There are no products to display right now. Check back later.',
    icon,
    className,
}: EmptyStateProps) => {
    return (
        <div
            className={cn(
                'flex flex-col items-center justify-center text-center py-16 px-6 rounded-[16px] bg-white border border-[#E8E8E8]',
                className
            )}
        >
            {/* Icon */}
            <div className="mb-5 text-[#C0C0C0]">
                {icon ?? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="56"
                        height="56"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.3-4.3" />
                        <path d="M11 8v6M8 11h6" />
                    </svg>
                )}
            </div>

            <h3 className="text-[16px] font-bold uppercase tracking-wide text-dark mb-2">
                {title}
            </h3>
            <p className="text-[13px] text-[#8A8A8A] max-w-[280px] leading-relaxed">
                {description}
            </p>
        </div>
    )
}

export default EmptyState
