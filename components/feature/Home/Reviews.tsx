'use client'

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import Button from '@/components/ui/Button'

const reviews = [
    {
        id: 1,
        title: 'Good Quality',
        text: 'I highly recommend shopping from kicks',
        rating: 5,
        avatar: '/review/avatar/1.jpg',
        image: '/review/img/1.png',
        name: 'Alex M.',
    },
    {
        id: 2,
        title: 'Good Quality',
        text: 'I highly recommend shopping from kicks',
        rating: 5,
        avatar: '/review/avatar/2.png',
        image: '/review/img/2.png',
        name: 'Jordan K.',
    },
    {
        id: 3,
        title: 'Good Quality',
        text: 'I highly recommend shopping from kicks',
        rating: 5,
        avatar: '/review/avatar/3.png',
        image: '/review/img/3.png',
        name: 'Sam R.',
    },
    
    {
        id: 4,
        title: 'Good Quality',
        text: 'I highly recommend shopping from kicks',
        rating: 5,
        avatar: '/review/avatar/1.jpg',
        image: '/review/img/1.png',
        name: 'Alex M.',
    },
    {
        id: 5,
        title: 'Good Quality',
        text: 'I highly recommend shopping from kicks',
        rating: 5,
        avatar: '/review/avatar/2.png',
        image: '/review/img/2.png',
        name: 'Jordan K.',
    },
    {
        id: 6,
        title: 'Good Quality',
        text: 'I highly recommend shopping from kicks',
        rating: 5,
        avatar: '/review/avatar/3.png',
        image: '/review/img/3.png',
        name: 'Sam R.',
    },
    
]

const AUTOPLAY_INTERVAL = 3000
const DESKTOP_VISIBLE = 3
const total = reviews.length

type Review = (typeof reviews)[number]

/* ── Star icon ── */
const StarIcon = () => (
    <Image src="/icons/star.svg" alt="star" width={16} height={16} />
)

/* ── Card ── */
const ReviewCard = ({ review }: { review: Review }) => (
    <div className="bg-white rounded-2xl lg:rounded-4xl overflow-hidden flex flex-col shadow-sm h-full">
        <div className="p-4 lg:p-6 flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-[20px] lg:text-[24px] truncate">
                    {review.title}
                </h3>
                <p className="text-[14px] lg:text-[16px] font-open-sans mt-0.5 leading-snug line-clamp-2">
                    {review.text}
                </p>
                <div className="flex items-center gap-1 mt-2">
                    <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <StarIcon key={i} />
                        ))}
                    </div>
                    <span className="text-[14px] lg:text-[16px] font-semibold text-gray-800 ml-1">
                        {review.rating}.0
                    </span>
                </div>
            </div>
            <div className="shrink-0 w-11 h-11 rounded-full overflow-hidden">
                <Image
                    src={review.avatar}
                    alt={review.name}
                    width={64}
                    height={64}
                    className="w-[48px] h-[48px] lg:w-[64px] lg:h-[64px] object-cover"
                />
            </div>
        </div>
        <div className="relative w-full aspect-4/3 mt-auto">
            <Image
                src={review.image}
                alt={`${review.title} shoe`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
            />
        </div>
    </div>
)

/* ── Main component ── */
const Reviews = () => {
    const [current, setCurrent] = useState(0)
    const [isDesktop, setIsDesktop] = useState(false)
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

    // Detect lg breakpoint
    useEffect(() => {
        const mq = window.matchMedia('(min-width: 1024px)')
        setIsDesktop(mq.matches)
        const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
        mq.addEventListener('change', handler)
        return () => mq.removeEventListener('change', handler)
    }, [])

    // Max index before looping back
    const maxIndex = isDesktop ? total - DESKTOP_VISIBLE : total - 1

    const next = useCallback(() => {
        setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, [maxIndex])

    useEffect(() => {
        timerRef.current = setInterval(next, AUTOPLAY_INTERVAL)
        return () => {
            if (timerRef.current) clearInterval(timerRef.current)
        }
    }, [next])

    const handleDotClick = (i: number) => {
        if (timerRef.current) clearInterval(timerRef.current)
        setCurrent(i)
        timerRef.current = setInterval(next, AUTOPLAY_INTERVAL)
    }

    const translateX = -(current * (100 / total))

    return (
        <section className="section_container">
            {/* Header */}
            <div className="flex items-center justify-between gap-6">
                <h2 className="flex-1 text-[24px] lg:text-[74px] font-semibold leading-[100%] lg:leading-[95%] lg:uppercase">
                    Reviews
                </h2>
                <Button>See all</Button>
            </div>

            {/* Carousel track */}
            <div className="mt-6 lg:mt-10 overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out w-[600%] lg:w-[200%]"
                    style={{ transform: `translateX(${translateX}%)` }}
                >
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="w-1/6 shrink-0 pr-4 lg:pr-6 last:pr-0"
                        >
                            <ReviewCard review={review} />
                        </div>
                    ))}
                </div>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-4">
                {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => handleDotClick(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                            current === i ? 'w-5 bg-blue' : 'w-2 bg-gray-300'
                        }`}
                    />
                ))}
            </div>
        </section>
    )
}

export default Reviews