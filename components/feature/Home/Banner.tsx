"use client"
import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import Button from '@/components/ui/Button'

// banner images
const bannerImages = [
    {
        src: '/hero/banner_1.jpg',
        alt: 'Nike Air Max',
    },
    {
        src: '/hero/banner_2.jpg',
        alt: 'Nike Air Max variant 1',
    },
    {
        src: '/hero/banner_3.jpg',
        alt: 'Nike Air Max variant 2',
    },
]

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    return (
        <div className='relative w-full rounded-[24px] lg:rounded-[64px] overflow-hidden aspect-4/4 md:aspect-4/3 lg:aspect-video'>

            {/* Main Background Image */}
            {bannerImages.map((banner, index) => (
                <Image
                    key={index}
                    src={banner.src}
                    alt={banner.alt}
                    fill
                    className={cn(
                        'object-cover transition-opacity duration-500',
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                    )}
                    priority
                />
            ))}

            {/* Dark overlay for readability */}
            <div className='absolute inset-0 bg-linear-to-r from-black/60 via-black/20 to-transparent' />

            {/* Vertical label on the left edge */}
            <div className='absolute left-0 top-24 lg:top-38  -translate-x-[41%] lg:-translate-x-[35%] -rotate-90'>
                <span className='bg-dark text-gray text-[12px] lg:text-[16px] font-semibold p-2 lg:p-6 rounded-br-lg lg:rounded-br-2xl rounded-bl-lg lg:rounded-bl-2xl whitespace-nowrap'>
                    Nike product of the year
                </span>
            </div>

            {/* Bottom-left content */}
            <div className='absolute bottom-4 lg:bottom-12 left-4 lg:left-12 flex flex-col gap-2'>
                <h2 className='text-white font-semibold uppercase text-2xl lg:text-[74px] leading-tight'>
                    Nike Air Max
                </h2>
                <p className='text-gray text-[14px] lg:text-[24px] font-semibold font-open-sans lg:text-sm max-w-[235px] lg:max-w-[490px]'>
                    Nike introducing the new air max for everyone&apos;s comfort
                </p>
                <Button className='mt-2 lg:mt-4'>
                    Shop Now
                </Button>
            </div>

            {/* Right side thumbnails */}
            <div className='absolute right-4 lg:right-8 bottom-4 lg:bottom-8 flex flex-col gap-2'>
                {
                    bannerImages.map((banner, index) => (
                        <div key={index} className={cn('relative w-16 lg:w-[160px] h-16 lg:h-[160px] rounded-lg lg:rounded-[32px] overflow-hidden border lg:border-[3px] border-gray cursor-pointer transition-all duration-300', index === currentSlide ? 'hidden' : 'block')}>
                            <Image
                                src={banner.src}
                                alt={banner.alt}
                                fill
                                className='object-cover'
                                onClick={() => setCurrentSlide(index)}
                            />
                        </div>
                    ))
                }


            </div>
        </div>
    )
}

export default Banner