const S = ({ className }: { className?: string }) => (
    <div className={`animate-pulse bg-[#d9d9d9] rounded-2xl ${className ?? ''}`} />
)

/* ── Gallery skeleton ─────────────────────────────────────────── */
export const GallerySkeleton = () => (
    <>
        {/* Mobile */}
        <div className="lg:hidden flex flex-col gap-3">
            {/* Main carousel placeholder */}
            <S className="w-full aspect-square rounded-2xl" />

            {/* Dots */}
            <div className="flex justify-center gap-1.5">
                {[true, false, false, false].map((active, i) => (
                    <div
                        key={i}
                        className={`h-2 rounded-full bg-[#d9d9d9] animate-pulse ${active ? 'w-5' : 'w-2'}`}
                    />
                ))}
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-2">
                {Array.from({ length: 3 }).map((_, i) => (
                    <S key={i} className="shrink-0 w-20 h-20 rounded-xl" />
                ))}
            </div>
        </div>

        {/* Desktop — 2×2 grid */}
        <div className="hidden lg:grid grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
                <S key={i} className="aspect-square rounded-3xl" />
            ))}
        </div>
    </>
)

/* ── Details skeleton ─────────────────────────────────────────── */
export const ProductDetailsSkeleton = () => (
    <div className="flex flex-col gap-5">
        {/* Badge */}
        <S className="h-7 w-28 rounded-tl-[10px] rounded-br-[10px] rounded-tr-none rounded-bl-none" />

        {/* Title — two lines */}
        <div className="flex flex-col gap-2">
            <S className="h-8 w-full rounded-lg" />
            <S className="h-8 w-3/4 rounded-lg" />
        </div>

        {/* Price */}
        <S className="h-7 w-28 rounded-lg" />

        {/* Color label + swatches */}
        <div className="flex flex-col gap-2">
            <S className="h-3 w-10 rounded" />
            <div className="flex gap-2">
                <S className="w-8 h-8 rounded-full" />
                <S className="w-8 h-8 rounded-full" />
            </div>
        </div>

        {/* Size label + chips */}
        <div className="flex flex-col gap-2">
            <div className="flex justify-between">
                <S className="h-3 w-8 rounded" />
                <S className="h-3 w-16 rounded" />
            </div>
            <div className="flex flex-wrap gap-2">
                {Array.from({ length: 10 }).map((_, i) => (
                    <S key={i} className="w-10 h-10 rounded-lg" />
                ))}
            </div>
        </div>

        {/* Add to cart + wishlist */}
        <div className="flex gap-3">
            <S className="flex-1 h-12 rounded-xl" />
            <S className="w-12 h-12 rounded-xl shrink-0" />
        </div>

        {/* Buy it now */}
        <S className="w-full h-12 rounded-xl" />

        {/* About block */}
        <div className="pt-2 border-t border-gray-200 flex flex-col gap-2">
            <S className="h-3 w-32 rounded" />
            <S className="h-4 w-20 rounded" />
            <S className="h-3 w-full rounded" />
            <S className="h-3 w-5/6 rounded" />
            <S className="h-3 w-4/6 rounded" />
        </div>
    </div>
)
