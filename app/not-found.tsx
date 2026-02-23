import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/ui/Button'

export default function NotFound() {
    return (
        <div className='page_container'>
            <section className='section_container'>
                <div className="flex flex-col items-center justify-center min-h-[50vh] lg:min-h-[60vh] px-4 text-center animate-fade-in">
                    {/* Header */}
                    <div className="animate-slide-up">
                        <span className="text-blue font-bold text-lg lg:text-xl uppercase tracking-widest block mb-2">
                            404 Error
                        </span>
                        <h1 className="text-[32px] lg:text-[64px] font-bold uppercase text-dark leading-tight mb-4 lg:mb-6">
                            Page Not Found
                        </h1>
                    </div>
                    {/* Description */}
                    <p className="max-w-[460px] text-[16px] lg:text-[18px] text-dark/60 font-open-sans leading-relaxed mb-6 lg:mb-10">
                        Sorry, the page you are looking for doesn&apos;t exist or has been moved.
                        Let&apos;s get you back on track.
                    </p>

                    {/* Action Button */}
                    <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        <Link href="/">
                            <Button className="px-10 py-4 text-[14px] lg:text-[16px] font-semibold tracking-wider">
                                Go to Homepage
                            </Button>
                        </Link>
                    </div>

                    {/* Logo */}
                    <div className="mt-6 lg:mt-10 animate-slide-up w-24 h-24 lg:w-32 lg:h-32 border-2 border-dark/80 rounded-full flex items-center justify-center">
                        <div className="animate-pulse">
                            <Image src="/logo/logo_dark.svg" alt="Logo" width={60} height={60} className="grayscale" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
