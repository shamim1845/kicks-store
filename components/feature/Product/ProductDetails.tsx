'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useAppDispatch } from '@/redux/hooks'
import { addToCart } from '@/redux/features/cartSlice'
import Button from '@/components/ui/Button'
import type { Product } from '@/types'
import toast from 'react-hot-toast'

/* ── Static options (design mock) ── */
export const COLORS = ['#253043', '#707E6E']
export const SIZES = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47]

interface ProductDetailsProps {
    product: Product
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const [selectedColor, setSelectedColor] = useState(0)
    const [selectedSize, setSelectedSize] = useState<number | null>(null)
    const [error, setError] = useState<string | null>(null)

    const handleAddToCart = () => {
        if (!selectedSize) {
            setError('Please select a size')
            return
        }
        setError(null)

        dispatch(addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.images[0],
            category: product.category.name,
            color: COLORS[selectedColor],
            size: selectedSize,
        }))

        toast.success('Added to cart!')
    }

    const handleBuyNow = () => {
        if (!selectedSize) {
            setError('Please select a size')
            return
        }
        setError(null)

        dispatch(addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.images[0],
            category: product.category.name,
            color: COLORS[selectedColor],
            size: selectedSize,
        }))

        router.push('/cart')
    }

    return (
        <div className="flex flex-col gap-5">
            {/* Badge */}
            <span className="inline-flex self-start items-center bg-blue text-white text-[12px] font-semibold px-4 py-2 lg:px-4 lg:py-3 rounded-[8px]">
                New Release
            </span>

            {/* Title */}
            <h1 className="text-[20px] lg:text-[32px] font-semibold leading-tight uppercase tracking-tight">
                {product.title}
            </h1>

            {/* Price */}
            <p className="text-[24px] font-semibold text-blue">
                ${product.price.toFixed(2)}
            </p>

            {/* Color */}
            <div>
                <p className="text-[16px] font-semibold tracking-tight mb-2">Color</p>
                <div className="flex gap-2">
                    {COLORS.map((hex, i) => (
                        <div key={i} className={`w-8 h-8 lg:w-12 lg:h-12 flex justify-center items-center rounded-full border-[3px] transition-all ${selectedColor === i ? 'border-dark scale-110' : 'border-transparent'}`}>
                            <button
                                onClick={() => setSelectedColor(i)}
                                className={`w-5.5 h-5.5 lg:w-8.5 lg:h-8.5 rounded-full cursor-pointer`}
                                style={{ backgroundColor: hex }}
                                aria-label={`Color ${i + 1}`}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Size */}
            <div>
                <div className="flex items-center justify-between mb-2">
                    <p className="text-[16px] font-semibold tracking-tight mb-2">Size</p>
                    <button className="text-[14px] font-semibold uppercase tracking-widest text-dark underline underline-offset-2">
                        Size Chart
                    </button>
                </div>
                <div className="flex flex-wrap gap-2">
                    {SIZES.map((size) => (
                        <button
                            key={size}
                            onClick={() => {
                                setSelectedSize(size)
                                setError(null)
                            }}
                            className={`w-12 h-12 rounded-lg text-[13px] font-semibold transition-all border cursor-pointer ${selectedSize === size
                                ? 'bg-dark text-white border-dark'
                                : 'bg-white text-dark border-gray-200 hover:border-dark'
                                }`}
                        >
                            {size}
                        </button>
                    ))}
                </div>
                {error && <p className="text-red-500 text-[12px] mt-2 font-semibold uppercase">{error}</p>}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 mt-1">
                    {/* Add to Cart button */}
                    <Button
                        onClick={handleAddToCart}
                        className="flex-1 bg-dark! text-white! hover:bg-dark/80! h-12!"
                    >
                        Add to Cart
                    </Button>
                    {/* Wishlist button */}
                    <button
                        aria-label="Wishlist"
                        className="w-12! h-12! shrink-0 flex items-center justify-center rounded-xl bg-dark! text-white! hover:bg-dark/80! transition-colors"
                    >
                        <Image src="/icons/heart.svg" alt="Wishlist" width={22} height={22} />
                    </button>
                </div>
                {/* Buy It Now button */}
                <Button
                    onClick={handleBuyNow}
                    className="w-full bg-blue! text-white! hover:bg-blue/80! h-12!"
                >
                    Buy It Now
                </Button>
            </div>

            {/* About the product */}
            <div className="pt-2 border-t border-gray-200">
                <p className="text-[16px] font-semibold uppercase tracking-widest mb-1">
                    About the Product
                </p>

                <p className="text-[14px] text-gray-600 leading-relaxed mb-3">
                    {product.description}
                </p>
                <ul className="space-y-1.5 text-[14px] text-gray-600">
                    <li className="flex items-start gap-2">
                        <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400" />
                        Pay over time in interest-free installments with Affirm, Klarna or Afterpay.
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400" />
                        Join adiClub to get unlimited free standard shipping, returns, &amp; exchanges.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProductDetails
