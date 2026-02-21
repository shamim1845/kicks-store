import { cn } from '@/lib/utils'
import Button from './Button'

interface ErrorStateProps {
    title?: string
    description?: string
    onRetry?: () => void
    className?: string
}

const ErrorState = ({
    title = 'Something went wrong',
    description = 'We couldn\'t load the products. Please check your connection and try again.',
    onRetry,
    className,
}: ErrorStateProps) => {
    return (
        <div
            className={cn(
                'flex flex-col items-center justify-center text-center py-16 px-6 rounded-[16px] bg-white border border-[#E8E8E8]',
                className
            )}
        >
            {/* Icon */}
            <div className="mb-5 text-red-400">
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
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
            </div>

            <h3 className="text-[16px] font-bold uppercase tracking-wide text-dark mb-2">
                {title}
            </h3>
            <p className="text-[13px] text-[#8A8A8A] max-w-[280px] leading-relaxed mb-6">
                {description}
            </p>

            {onRetry && (
                <Button
                    onClick={onRetry}
                    className="bg-dark hover:bg-dark/90"
                >
                    Try Again
                </Button>
            )}
        </div>
    )
}

export default ErrorState
