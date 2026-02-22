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
        <div className="p-6 bg-white rounded-[24px] border border-gray-100 flex flex-col gap-6 sticky top-24 shadow-sm">
            <h2 className="text-[24px] font-bold uppercase tracking-tight text-dark">Order Summary</h2>

            <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center text-[15px] font-semibold">
                    <span className="text-gray-500 uppercase tracking-wide">1 ITEM</span>
                    <span className="text-dark">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-[15px] font-semibold">
                    <span className="text-gray-500 uppercase tracking-wide">Delivery</span>
                    <span className="text-dark">${delivery.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-[15px] font-semibold">
                    <span className="text-gray-500 uppercase tracking-wide">Sales Tax</span>
                    <span className="text-dark">{tax === 0 ? '-' : `$${tax.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="text-[18px] lg:text-[20px] font-bold uppercase tracking-tight text-dark">Total</span>
                    <span className="text-[18px] lg:text-[20px] font-bold text-dark">${total.toFixed(2)}</span>
                </div>
            </div>

            <Button className="w-full h-14 bg-dark! text-white! hover:bg-dark/80! font-bold uppercase tracking-widest rounded-xl text-[14px]">
                Checkout
            </Button>

            <button className="text-[14px] font-semibold text-dark underline underline-offset-4 hover:text-blue transition-colors self-start">
                User a promo code
            </button>
        </div>
    )
}

export default OrderSummary
