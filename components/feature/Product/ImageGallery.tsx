'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const AUTOPLAY_MS = 3000

interface ImageGalleryProps {
    images: string[]
    title: string
}

const ImageGallery = ({ images, title }: ImageGalleryProps) => {
    const carouselRef = useRef<HTMLDivElement>(null)
    const [activeIdx, setActiveIdx] = useState(0)
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

    /* Sync dot + thumbnail highlight with native scroll */
    useEffect(() => {
        const el = carouselRef.current
        if (!el) return
        const onScroll = () => {
            const idx = Math.round(el.scrollLeft / el.clientWidth)
            setActiveIdx(idx)
        }
        el.addEventListener('scroll', onScroll, { passive: true })
        return () => el.removeEventListener('scroll', onScroll)
    }, [images])

    /* Jump to image (used by thumbnail clicks + autoplay) */
    const goTo = useCallback((idx: number) => {
        if (!carouselRef.current) return
        carouselRef.current.scrollTo({ left: idx * carouselRef.current.clientWidth, behavior: 'smooth' })
    }, [])

    /* Autoplay — restarts whenever goTo is called manually too */
    const startTimer = useCallback(() => {
        if (timerRef.current) clearInterval(timerRef.current)
        timerRef.current = setInterval(() => {
            setActiveIdx((prev) => {
                const next = (prev + 1) % images.length
                if (carouselRef.current) {
                    carouselRef.current.scrollTo({ left: next * carouselRef.current.clientWidth, behavior: 'smooth' })
                }
                return next
            })
        }, AUTOPLAY_MS)
    }, [images.length])

    // autoplay
    useEffect(() => {
        startTimer()
        return () => { if (timerRef.current) clearInterval(timerRef.current) }
    }, [startTimer])

    return (
        <>
            {/* ── Mobile ── */}
            <div className="lg:hidden flex flex-col gap-4">
                {/* Swipeable carousel */}
                <div className="relative">
                    <div
                        ref={carouselRef}
                        className="flex overflow-x-auto snap-x snap-mandatory rounded-2xl"
                        style={{ scrollbarWidth: 'none' }}
                    >
                        {images.map((src, i) => (
                            <div key={i} className="w-full shrink-0 snap-start relative aspect-square bg-light-gray overflow-hidden">
                                <Image
                                    src={src || 'https://placehold.co/600x600'}
                                    alt={`${title} ${i + 1}`}
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                            </div>
                        ))}
                    </div>

                    {/* Dot indicators */}
                    {images.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center gap-1.5 mt-3">
                            {images.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => { goTo(i); startTimer() }}
                                    aria-label={`Go to image ${i + 1}`}
                                    className={`h-2 rounded-full transition-all duration-300 ${activeIdx === i ? 'w-5 bg-blue' : 'w-2 bg-gray-300'}`}
                                />
                            ))}
                        </div>
                    )}

                </div>

                {/* Thumbnail strip */}
                {images.length > 1 && (
                    <div className="flex gap-2 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
                        {images.map((src, i) => (
                            <button
                                key={i}
                                onClick={() => { goTo(i); startTimer() }}
                                className={`shrink-0 w-20 h-20 relative rounded-xl overflow-hidden border-2 transition-colors ${activeIdx === i ? 'border-blue' : 'border-transparent'}`}
                            >
                                <Image src={src} alt={`${title} thumbnail ${i + 1}`} fill className="object-cover" unoptimized />
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* ── Desktop: 2×2 grid ── */}
            <div className="hidden lg:grid grid-cols-2 gap-4 rounded-[48px] overflow-hidden">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="relative aspect-square bg-light-gray overflow-hidden">
                        <Image
                            src={images[i % images.length] || 'https://placehold.co/600x600'}
                            alt={`${title} view ${i + 1}`}
                            fill
                            className="object-cover"
                            unoptimized
                        />
                    </div>
                ))}
            </div>
        </>
    )
}

export default ImageGallery
