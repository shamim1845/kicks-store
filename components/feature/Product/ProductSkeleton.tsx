const Skeleton = ({ className }: { className?: string }) => (
    <div className={`animate-pulse bg-[#d9d9d9] rounded-2xl ${className ?? ''}`} />
)

/* ── Gallery skeleton ─────────────────────────────────────────── */
export const GallerySkeleton = () => (
    <>
        {/* Mobile */}
        <div className="lg:hidden flex flex-col gap-4">
            {/* Main carousel placeholder */}
            <div className="relative">
                <Skeleton className="w-full aspect-square rounded-2xl" />
                
                {/* Dots inside */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center gap-1.5 mt-3">
                    {[true, false, false, false].map((active, i) => (
                        <div
                            key={i}
                            className={`h-2 rounded-full bg-white/50 animate-pulse ${active ? 'w-5' : 'w-2'}`}
                        />
                    ))}
                </div>
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-2 overflow-x-auto">
                {Array.from({ length: 4 }).map((_, i) => (
                    <Skeleton key={i} className="shrink-0 w-20 h-20 rounded-xl" />
                ))}
            </div>
        </div>

        {/* Desktop — 2×2 grid */}
        <div className="hidden lg:grid grid-cols-2 gap-4 rounded-[48px] overflow-hidden">
            {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="aspect-square rounded-none" />
            ))}
        </div>
    </>
)

/* ── Details skeleton ─────────────────────────────────────────── */
export const ProductDetailsSkeleton = () => (
    <div className="flex flex-col gap-5">
        {/* Badge */}
        <Skeleton className="h-[42px] lg:h-[50px] w-28 rounded-[8px]" />

        {/* Title — two lines */}
        <div className="flex flex-col gap-2">
            <Skeleton className="h-8 lg:h-10 w-full rounded-lg" />
            <Skeleton className="h-8 lg:h-10 w-3/4 rounded-lg" />
        </div>

        {/* Price */}
        <Skeleton className="h-7 w-24 rounded-lg" />

        {/* Color label + swatches */}
        <div className="flex flex-col gap-2">
            <Skeleton className="h-5 w-12 rounded" />
            <div className="flex gap-2">
                <Skeleton className="w-8 h-8 lg:w-12 lg:h-12 rounded-full" />
                <Skeleton className="w-8 h-8 lg:w-12 lg:h-12 rounded-full" />
            </div>
        </div>

        {/* Size label + chips */}
        <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center mb-2">
                <Skeleton className="h-5 w-10 rounded" />
                <Skeleton className="h-4 w-20 rounded" />
            </div>
            <div className="flex flex-wrap gap-2">
                {Array.from({ length: 10 }).map((_, i) => (
                    <Skeleton key={i} className="w-12 h-12 rounded-lg" />
                ))}
            </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 mt-1">
                <Skeleton className="flex-1 h-12 rounded-xl" />
                <Skeleton className="w-12 h-12 rounded-xl shrink-0" />
            </div>
            <Skeleton className="w-full h-12 rounded-xl" />
        </div>

        {/* About block */}
        <div className="pt-2 border-t border-gray-200 flex flex-col gap-3">
            <Skeleton className="h-5 w-40 rounded" />
            <div className="flex flex-col gap-2">
                <Skeleton className="h-4 w-full rounded" />
                <Skeleton className="h-4 w-full rounded" />
                <Skeleton className="h-4 w-3/4 rounded" />
            </div>
            <div className="space-y-2 mt-1">
                <div className="flex gap-2"><Skeleton className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"/><Skeleton className="h-3 w-full rounded"/></div>
                <div className="flex gap-2"><Skeleton className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"/><Skeleton className="h-3 w-full rounded"/></div>
            </div>
        </div>
    </div>
)
