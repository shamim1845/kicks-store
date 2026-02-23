'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useGetCategoriesQuery } from '@/redux/hooks'
import type { Category } from '@/types'

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
        className="w-8 lg:w-10 h-8 lg:h-10 flex items-center justify-center rounded-[8px] bg-white hover:bg-white/60 disabled:opacity-60 disabled:cursor-not-allowed transition-colors cursor-pointer"
    >
        <Image
            src={dir === 'prev' ? '/icons/chevron_backward.svg' : '/icons/chevron_forward.svg'}
            alt={dir === 'prev' ? 'Previous' : 'Next'}
            width={16}
            height={16}
        />
    </button>
)

/* ── Category card ──────────────────────────────────────────── */
const CategoryCard = ({ category }: { category: Category }) => {
    const [imageError, setImageError] = useState(false)
    return (
        <div className="relative flex flex-col bg-light-gray overflow-hidden group w-full aspect-358/348 lg:aspect-690/600">
            {/* Image */}
            <div className="flex-1 flex items-center justify-center bg-gray overflow-hidden">
                <Link href={`/categories/${category.id}/products`}>
                    <Image
                        src={!imageError ? category.image : 'https://placehold.co/690x600'}
                        alt={category.name}
                        width={690}
                        height={600}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                        unoptimized
                        onError={() => setImageError(true)}
                    />
                </Link>
            </div>

            {/* Bottom bar */}
            <div className="bg-gray flex items-center justify-between p-4 lg:p6">
                <h3 className="text-[24px] lg:text-[36px] font-semibold capitalize lg:uppercase leading-[100%] lg:leading-[95%] text-dark tracking-wide max-w-[75%] line-clamp-1">
                    {category.name}
                </h3>
                <div className="w-[32px] h-[32px] lg:w-[48px] lg:h-[48px] bg-dark rounded-[8px] flex items-center justify-center shrink-0 hover:bg-dark/80 transition-colors duration-300">
                    <Link href={`/categories/${category.id}/products`}>
                        <Image src="/icons/arrow_trend_right_up.svg" alt="View category" width={32} height={32}
                            className='w-[16px] h-[16px] lg:w-[32px] lg:h-[32px]'
                        />
                    </Link>
                </div>
            </div>
        </div>

    )
}

/* ── Skeleton card ──────────────────────────────────────────── */
const SkeletonCard = () => (
    <div className="relative flex flex-col bg-light-gray overflow-hidden w-full aspect-358/348 lg:aspect-690/600 animate-pulse">
        {/* Image area */}
        <div className="flex-1 bg-gray/60" />

        {/* Bottom bar */}
        <div className="flex items-end justify-between px-4 py-3 lg:px-7 lg:py-5">
            <div className="flex flex-col gap-2 max-w-[60%]">
                <div className="h-4 lg:h-6 w-24 lg:w-36 bg-dark/20 rounded-md" />
                <div className="h-4 lg:h-6 w-16 lg:w-24 bg-dark/20 rounded-md" />
            </div>
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-dark/20 rounded-[8px] shrink-0" />
        </div>
    </div>
)

/* ── Main component ─────────────────────────────────────────── */
const Categories = () => {
    const { data: categories, isLoading } = useGetCategoriesQuery()

    // Mobile: horizontal scroll, 2 cards per column (stacked vertically)
    const mobileSliderRef = useRef<HTMLDivElement>(null)
    const [mobileScroll, setMobileScroll] = useState({ atStart: true, atEnd: false })

    const scrollMobile = (dir: 'prev' | 'next') => {
        if (!mobileSliderRef.current) return
        const w = mobileSliderRef.current.clientWidth
        mobileSliderRef.current.scrollBy({ left: dir === 'next' ? w : -w, behavior: 'smooth' })
    }

    useEffect(() => {
        const el = mobileSliderRef.current
        if (!el) return
        const update = () => setMobileScroll({
            atStart: el.scrollLeft <= 0,
            atEnd: el.scrollLeft >= el.scrollWidth - el.clientWidth - 1,
        })
        update()
        el.addEventListener('scroll', update, { passive: true })
        return () => el.removeEventListener('scroll', update)
    }, [categories])

    // Desktop: scroll by full visible width (shows 2 side-by-side cards at a time)
    const sliderRef = useRef<HTMLDivElement>(null)
    const [desktopScroll, setDesktopScroll] = useState({ atStart: true, atEnd: false })

    const scrollDesktop = (dir: 'prev' | 'next') => {
        if (!sliderRef.current) return
        const w = sliderRef.current.clientWidth
        sliderRef.current.scrollBy({ left: dir === 'next' ? w : -w, behavior: 'smooth' })
    }

    useEffect(() => {
        const el = sliderRef.current
        if (!el) return
        const update = () => setDesktopScroll({
            atStart: el.scrollLeft <= 0,
            atEnd: el.scrollLeft >= el.scrollWidth - el.clientWidth - 1,
        })
        update()
        el.addEventListener('scroll', update, { passive: true })
        return () => el.removeEventListener('scroll', update)
    }, [categories])

    return (
        <div className='bg-dark'>
            <section className="section_container">
                {/* Header */}
                <div className=" flex items-center justify-between gap-6 my-6 lg:my-10">
                    <h2 className='flex-1 text-white text-[24px] lg:text-[74px] font-semibold leading-[100%] lg:leading-[95%] lg:uppercase'>
                        Categories
                    </h2>

                    <div className="flex items-center gap-2">
                        {/* Mobile prev/next */}
                        <div className="lg:hidden flex gap-2">
                            <NavBtn dir="prev" onClick={() => scrollMobile('prev')} disabled={mobileScroll.atStart} />
                            <NavBtn dir="next" onClick={() => scrollMobile('next')} disabled={mobileScroll.atEnd} />
                        </div>
                        {/* Desktop prev/next */}
                        <div className="hidden lg:flex gap-2 lg:gap-4">
                            <NavBtn dir="prev" onClick={() => scrollDesktop('prev')} disabled={desktopScroll.atStart} />
                            <NavBtn dir="next" onClick={() => scrollDesktop('next')} disabled={desktopScroll.atEnd} />
                        </div>
                    </div>
                </div>

                {/* ── Mobile: horizontal scroll, 2 cards per column ── */}
                <div
                    ref={mobileSliderRef}
                    className="flex lg:hidden mb-6 overflow-x-auto scroll-smooth snap-x snap-mandatory rounded-tl-[24px]!"
                    style={{ scrollbarWidth: 'none' }}
                >
                    {isLoading
                        ? Array.from({ length: 4 }).map((_, colIdx) => (
                            <div key={colIdx} className="flex flex-col w-full shrink-0 snap-start">
                                <SkeletonCard />
                                <SkeletonCard />
                            </div>
                        ))
                        : Array.from({ length: Math.ceil((categories?.length ?? 0) / 2) }).map((_, colIdx) => {
                            const pair = categories!.slice(colIdx * 2, colIdx * 2 + 2)

                            console.log(categories?.length, pair)
                            return (
                                <div key={colIdx} className="flex flex-col w-full shrink-0 snap-start">
                                    {pair.map((cat) => (
                                        <CategoryCard key={cat.id} category={cat} />
                                    ))}
                                </div>
                            )
                        })
                    }
                </div>

                {/* ── Desktop: 2 cards side-by-side, horizontal page scroll ── */}
                <div
                    ref={sliderRef}
                    className="hidden lg:flex overflow-x-auto scroll-smooth rounded-tl-[64px]!"
                    style={{ scrollbarWidth: 'none' }}
                >
                    {isLoading
                        ? Array.from({ length: 4 }).map((_, i) => (
                            <div
                                key={i}
                                className="w-[calc(50%)] shrink-0"
                            >
                                <SkeletonCard />
                            </div>
                        ))
                        : categories?.map((cat) => (
                            <div
                                key={cat.id}
                                className="w-[calc(50%)] shrink-0"
                            >
                                <CategoryCard category={cat} />
                            </div>
                        ))
                    }
                </div>
            </section>
        </div>
    )
}

export default Categories