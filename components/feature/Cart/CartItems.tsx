import Link from 'next/link'
import CartItem from './CartItem'
import { useAppSelector } from '@/redux/hooks'

const CartItems = () => {
    const { items } = useAppSelector((state) => state.cart)

    return (
        <div className="lg:col-span-2">
            <div className="bg-light-gray rounded-[16px] p-4 lg:p-6 border border-gray-100 shadow-sm">
                <div className="flex flex-col gap-2 mb-8">
                    <h2 className="text-[20px] lg:text-[32px] font-semibold text-dark">Your Bag</h2>
                    <p className="text-[14px] lg:text-[16px] font-open-sans font-normal text-dark/80">
                        Items in your bag not reserved- check out now to make them yours.
                    </p>
                </div>

                {items.length > 0 ? (
                    <div className="flex flex-col gap-4 lg:gap-6">
                        {items.map((item, idx) => (
                            <CartItem
                                key={`${item.id}-${item.size}-${item.color}-${idx}`}
                                item={item}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="py-10 text-center flex flex-col items-center gap-6">
                        <div className="w-20 h-20 bg-light-gray rounded-full flex items-center justify-center">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                                <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-[20px] font-semibold uppercase text-dark mb-2">Your Bag is empty</h3>
                            <p className="text-[14px] font-open-sans font-normal text-dark max-w-[280px]">Once you add something to your bag, it will appear here.</p>
                        </div>
                        <Link href="/" className="px-8 py-4 bg-dark text-white rounded-xl font-bold uppercase tracking-widest text-[13px] hover:bg-dark/90 transition-all">
                            Start Shopping
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default CartItems