'use client'

import Button from '@/components/ui/Button'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ProductErrorProps {
    onRetry?: () => void
    className?: string
}

/* ── Branded Broken Shoe Icon ── */
const BrokenShoeIcon = ({ className }: { className?: string }) => (
    <div className={cn("relative flex items-center justify-center", className)}>
        <svg
            width="80"
            height="80"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-blue"
        >
            {/* Main shoe body */}
            <path
                d="M10 46C10 46 14 34 24 30L36 26L44 28L58 34C61 35.5 63 38.5 63 42V46C63 48.2 61.2 50 59 50H13C11.3 50 10 48.7 10 47V46Z"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* Sole details */}
            <path d="M10 46H63" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M15 50L13 54M25 50L23 54M35 50L33 54M45 50L43 54" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />

            {/* Laces with dashed effect */}
            <path
                d="M30 30L28 22M36 28L34 20M42 29L40 21"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="3 2"
            />

            {/* Crack lines across the shoe */}
            <path d="M22 38L28 34M40 40L46 36M32 44L38 42" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
        </svg>

        {/* Floating Error Circle */}
        <div className="absolute -top-1 -right-1 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-lg border border-red-50">
            <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#EF4444"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </div>
    </div>
)

/* ── Gallery Error — Premium Gallery Placeholder ── */
export const GalleryError = ({ onRetry, className }: ProductErrorProps) => (
    <div className={cn(
        "flex flex-col items-center justify-center gap-6 w-full aspect-square lg:aspect-auto lg:h-full min-h-[400px] bg-[#F5F5F5] rounded-[28px] border-2 border-dashed border-gray-200 px-8 text-center transition-all duration-300 hover:border-blue/30 group",
        className
    )}>
        <div className="relative">
            <div className="absolute inset-0 bg-blue/5 rounded-full scale-150 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <BrokenShoeIcon className="relative transform group-hover:-rotate-3 transition-transform" />
        </div>

        <div className="max-w-[260px]">
            <h3 className="text-[18px] font-bold uppercase tracking-tight text-dark mb-2">
                Gallery Offline
            </h3>
            <p className="text-[14px] text-gray-500 leading-relaxed font-open-sans">
                We encountered a glitch while fetching the product imagery.
            </p>
        </div>

        {onRetry && (
            <button
                onClick={onRetry}
                className="inline-flex items-center gap-2 group/btn px-6 py-2.5 rounded-full bg-white border border-gray-200 text-[12px] font-bold uppercase tracking-widest text-dark hover:bg-blue hover:text-white hover:border-blue transition-all active:scale-95 shadow-sm"
            >
                <span>Try Again</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover/btn:rotate-180 transition-transform duration-500">
                    <path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                </svg>
            </button>
        )}
    </div>
)

/* ── Full Product Error — Premium Two-Panel UI ── */
const ProductError = ({ onRetry, className }: ProductErrorProps) => (
    <div className={cn(
        "col-span-1 lg:col-span-2 flex flex-col items-center justify-center gap-8 py-24 px-8 text-center bg-white rounded-[40px] border border-gray-100 shadow-sm relative overflow-hidden",
        className
    )}>
        {/* Subtle Background Elements */}
        <div className="absolute top-0 left-0 w-full h-[600px] bg-[radial-gradient(circle_at_50%_0%,rgba(74,105,226,0.05)_0%,rgba(255,255,255,0)_70%)] pointer-events-none" />

        {/* Large Animated Icon */}
        <div className="relative">
            <div className="absolute inset-x-0 -bottom-2 h-4 w-24 bg-dark/5 blur-md rounded-full mx-auto" />
            <div className="relative w-32 h-32 flex items-center justify-center rounded-[32px] bg-light-gray shadow-inner border border-white">
                <BrokenShoeIcon className="scale-125" />
            </div>
            {/* Ping animation triggers on mount */}
            <div className="absolute inset-0 rounded-[32px] bg-blue/10 animate-[ping_3s_ease-in-out_infinite]" />
        </div>

        {/* Branded Text */}
        <div className="max-w-md relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-red-500 rounded-lg text-[11px] font-bold uppercase tracking-widest mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                Error Code: 404_KICKS
            </div>
            <h2 className="text-[28px] lg:text-[42px] font-bold uppercase leading-[1.1] tracking-tighter text-dark mb-4 drop-shadow-sm">
                This pair has <br /> <span className="text-blue">walked away</span>
            </h2>
            <p className="text-[15px] lg:text-[17px] text-gray-500 leading-relaxed font-open-sans">
                The product you&apos;re looking for isn&apos;t currently available. It might be out of stock, or our connection to the inventory is lagging.
            </p>
        </div>

        {/* Action Buttons with Branded Styles */}
        <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10">
            {onRetry && (
                <Button
                    onClick={onRetry}
                    className="h-14 px-10 bg-dark! text-white! hover:bg-dark/90! font-bold uppercase tracking-widest rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-95 group"
                >
                    <span className="flex items-center gap-3">
                        Re-fetch Data
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-180 transition-transform duration-500">
                            <path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                        </svg>
                    </span>
                </Button>
            )}
            <Link
                href="/"
                className="h-14 px-10 flex items-center justify-center border-2 border-dark text-dark font-bold uppercase tracking-widest rounded-xl hover:bg-dark hover:text-white transition-all active:scale-95"
            >
                Back to Store
            </Link>
        </div>
    </div>
)

export default ProductError
