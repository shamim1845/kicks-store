import { cn } from '@/lib/utils'

interface ProductCardSkeletonProps {
    count?: number
    className?: string
}

const ProductCardSkeleton = ({ count = 8, className }: ProductCardSkeletonProps) => {
    return (
        <>
            {Array.from({ length: count }).map((_, i) => (
                <div
                    key={i}
                    className={cn(
                        'flex flex-col gap-4 overflow-hidden w-full animate-pulse',
                        className
                    )}
                >
                    {/* Image area */}
                    <div className="bg-[#d9d9d9] min-h-[180px] lg:min-h-[220px] w-full rounded-[16px]" />

                    {/* Content area */}
                    <div className="flex flex-col w-full">
                        {/* Title lines */}
                        <div className="pt-4 pb-3 min-h-[65px] lg:min-h-[70px] space-y-2">
                            <div className="h-4 bg-[#d9d9d9] rounded-full w-full" />
                            <div className="h-4 bg-[#d9d9d9] rounded-full w-3/4" />
                        </div>

                        {/* Button area */}
                        <div className="h-[40px] lg:h-[48px] bg-[#d9d9d9] rounded-[8px]" />
                    </div>
                </div>
            ))}
        </>
    )
}

export default ProductCardSkeleton
