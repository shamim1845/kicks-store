'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import ProductCard from '@/components/ui/ProductCard'
import ProductCardSkeleton from '@/components/ui/ProductCardSkeleton'
import EmptyState from '@/components/ui/EmptyState'
import ErrorState from '@/components/ui/ErrorState'
import type { Product } from '@/types'

// Constants
const PER_PAGE = 4

// Props
interface ProductSliderProps {
    title: React.ReactNode
    products?: Product[]
    isLoading?: boolean
    isError?: boolean
    refetch?: () => void
    emptyTitle?: string
    emptyDescription?: string
    action?: React.ReactNode
    titleClassName?: string
}

// ProductSlider
const ProductSlider = ({
    title,
    products,
    isLoading = false,
    isError = false,
    refetch,
    emptyTitle = 'No products found',
    emptyDescription = 'Check back later for new arrivals.',
    action,
    titleClassName,
}: ProductSliderProps) => {
    const sliderRef = useRef<HTMLDivElement>(null)
    const [activePage, setActivePage] = useState(0)

    const isEmpty = !isLoading && !isError && (!products || products.length === 0)
    const totalPages = products ? Math.ceil(products.length / PER_PAGE) : 0
    const hasMultiplePages = totalPages > 1

    /* Scroll helpers */
    const scroll = useCallback((dir: 'prev' | 'next') => {
        if (!sliderRef.current) return
        const w = sliderRef.current.clientWidth
        sliderRef.current.scrollBy({ left: dir === 'next' ? w : -w, behavior: 'smooth' })
    }, [])

    /* Sync dot indicator with native scroll position */
    useEffect(() => {
        const el = sliderRef.current
        if (!el) return
        const onScroll = () => {
            const page = Math.round(el.scrollLeft / el.clientWidth)
            setActivePage(page)
        }
        el.addEventListener('scroll', onScroll, { passive: true })
        return () => el.removeEventListener('scroll', onScroll)
    }, [products])

    /* Jump to a specific page */
    const goToPage = (page: number) => {
        if (!sliderRef.current) return
        sliderRef.current.scrollTo({ left: page * sliderRef.current.clientWidth, behavior: 'smooth' })
    }

    /* Split into pages */
    const pages = products
        ? Array.from({ length: totalPages }, (_, i) =>
            products.slice(i * PER_PAGE, i * PER_PAGE + PER_PAGE)
        )
        : []

    return (
        <section className="section_container">
            {/* ── Header ── */}
            <div className="flex items-center justify-between gap-6">
                <h2 className={titleClassName ?? 'flex-1 text-[24px] lg:text-[74px] font-semibold leading-[100%] lg:leading-[95%] lg:uppercase'}>
                    {title}
                </h2>

                {/* Action slot */}
                {action
                    ? <div className="shrink-0">{action}</div>
                    : hasMultiplePages && !isLoading && !isError && (
                        <div className="flex items-center gap-2 shrink-0">
                            <NavBtn dir="prev" onClick={() => scroll('prev')} disabled={activePage === 0} />
                            <NavBtn dir="next" onClick={() => scroll('next')} disabled={activePage === totalPages - 1} />
                        </div>
                    )
                }
            </div>

            {/* ── Body ── */}
            <div className="mt-6 lg:mt-10">

                {isLoading ? (
                    /* Loading skeleton */
                    <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <ProductCardSkeleton count={4} />
                    </ul>
                ) : isError ? (
                    /* Error */
                    <ErrorState onRetry={refetch} />
                ) : isEmpty ? (
                    /* Empty */
                    <EmptyState title={emptyTitle} description={emptyDescription} />
                ) : (
                    /* Slider */
                    products && products.length > 0 && (
                        <>
                            <div
                                ref={sliderRef}
                                className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory"
                                style={{ scrollbarWidth: 'none' }}
                            >
                                {pages.map((pageProducts, pageIdx) => (
                                    <div key={pageIdx} className="w-full shrink-0 snap-start">
                                        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            {pageProducts.map((product) => (
                                                <li key={product.id}>
                                                    <ProductCard product={product} isNew={true} />
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            {/* Dot indicators */}
                            {hasMultiplePages && (
                                <div className="flex justify-center items-center gap-2 mt-5">
                                    {Array.from({ length: totalPages }).map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => goToPage(i)}
                                            aria-label={`Go to page ${i + 1}`}
                                            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${activePage === i ? 'w-5 bg-blue' : 'w-2 bg-gray-300'
                                                }`}
                                        />
                                    ))}
                                </div>
                            )}
                        </>
                    )
                )}
            </div>
        </section>
    )
}

export default ProductSlider



/* ── Arrow nav button ───────────────────────────────────────── */
const NavBtn = ({
    dir,
    onClick,
    disabled,
}: {
    dir: 'prev' | 'next'
    onClick: () => void
    disabled?: boolean
}) => (
    <button
        onClick={onClick}
        disabled={disabled}
        aria-label={dir === 'prev' ? 'Previous' : 'Next'}
        className="w-8 lg:w-10 h-8 lg:h-10 flex items-center justify-center rounded-[8px] bg-dark hover:bg-dark/60 disabled:opacity-60 disabled:cursor-not-allowed transition-colors cursor-pointer"
    >
        <Image
            src={dir === 'prev' ? '/icons/chevron_backward_light.svg' : '/icons/chevron_forward_light.svg'}
            alt={dir === 'prev' ? 'Previous' : 'Next'}
            width={16}
            height={16}
        />
    </button>
)