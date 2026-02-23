'use client'

import Button from '@/components/ui/Button'

interface OrderSummaryProps {
    subtotal: number
    delivery: number
    tax: number
}

const OrderSummary = ({ subtotal, delivery, tax }: OrderSummaryProps) => {
    const total = subtotal + delivery + tax

    return (
        <div className="p-6 flex flex-col gap-6 sticky top-24">
            <h2 className="text-[20px] lg:text-[32px] font-semibold text-dark">Order Summary</h2>


            <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center text-[16px] lg:text-[20px] font-open-sans font-semibold text-dark">
                    <span className="uppercase tracking-wide">1 ITEM</span>
                    <span className="text-dark/80">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-[16px] lg:text-[20px] font-open-sans font-semibold text-dark">
                    <span className="uppercase tracking-wide">Delivery</span>
                    <span className="text-dark/80">${delivery.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-[16px] lg:text-[20px] font-open-sans font-semibold text-dark">
                    <span className="uppercase tracking-wide">Sales Tax</span>
                    <span className="text-dark/80">{tax === 0 ? '-' : `$${tax.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between items-center pt-4">
                    <span className="text-[20px] lg:text-[24px] font-semibold text-dark">Total</span>
                    <span className="text-[20px] lg:text-[24px] font-semibold text-dark/80">${total.toFixed(2)}</span>
                </div>
            </div>

            <Button className="w-full h-14 bg-dark! text-white! hover:bg-dark/80! font-bold uppercase tracking-widest rounded-xl text-[14px]">
                Checkout
            </Button>

            <button className="text-[16px] lg:text-[20px] font-open-sans font-semibold text-dark underline underline-offset-4 hover:text-blue transition-colors self-start cursor-pointer">
                Use a promo code
            </button>
        </div>
    )
}

export default OrderSummary
