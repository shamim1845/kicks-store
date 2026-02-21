import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'
import { cn } from '@/lib/utils'
import type { Product } from '@/types'

interface ProductCardProps {
    product: Product
    className?: string
    isNew?: boolean
    badge?: string // e.g. "90% off"
}

const ProductCard = ({ product, className, isNew = true, badge }: ProductCardProps) => {
    // Determine badge label & color
    const badgeLabel = badge ?? (isNew ? 'New' : null)
    const badgeBg = badge ? 'bg-yellow text-dark' : 'bg-blue text-white'

    return (
        <div
            className={cn(
                'group relative flex flex-col gap-4 overflow-hidden w-full h-full',
                className
            )}
        >
            {/* Image area */}
            <div className="relative bg-light-gray flex items-center justify-center p-2 min-h-[180px] lg:min-h-[220px] overflow-hidden rounded-[16px] w-full h-full">
                {/* Badge */}
                {badgeLabel && (
                    <span className={cn("absolute top-[8px] left-[8px] z-10 text-[11px] font-inter font-semibold uppercase px-2 py-1 rounded-tl-[12px] rounded-br-[12px] tracking-wide", badgeBg)}>
                        {badgeLabel}
                    </span>
                )}
                {/* Image */}
                <Image
                    src={product.images[0] || "https://placehold.co/600x480"}
                    alt={product.title}
                    width={300}
                    height={240}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 rounded-[12px]"
                    unoptimized
                />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 w-full h-full">
                {/* Product title */}
                <div className="px-4 pt-4 pb-3 min-h-[65px] lg:min-h-[70px]">
                    <h3 className="text-[16px] lg:text-[24px] font-semibold uppercase leading-snug text-dark line-clamp-2 tracking-wide">
                        {product.title}
                    </h3>
                </div>

                {/* CTA button row */}
                <Link href={`/product/${product.id}`}>
                    <Button className="w-full! bg-dark hover:bg-dark/90 text-[12px]! lg:text-[14px]!">
                        <span>
                            View Product
                        </span>
                        <span>
                            {' - '}
                        </span>
                        <span className="text-yellow">
                            ${product.price}
                        </span>
                    </Button>
                </Link>

            </div>
        </div>
    )
}

export default ProductCard
