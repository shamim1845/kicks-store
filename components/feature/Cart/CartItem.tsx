'use client'

import Image from 'next/image'
import { useAppDispatch } from '@/redux/hooks'
import { removeFromCart, updateQuantity, CartItem as CartItemType } from '@/redux/features/cartSlice'

interface CartItemProps {
    item: CartItemType
}

const CartItem = ({ item }: CartItemProps) => {
    const dispatch = useAppDispatch()

    console.log(item)

    return (
        <div className="flex gap-4 lg:gap-6 border-b border-gray-100 last:border-0 relative overflow-hidden">
            {/* Image */}
            <div className="flex-1 aspect-3/4 bg-light-gray rounded-2xl overflow-hidden relative">
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="w-full h-full object-cover"
                    unoptimized
                />
            </div>

            {/* Info */}
            <div className="flex-1 flex flex-col justify-between">
                <div className="flex-1">
                    <h3 className="text-[16px] lg:text-[20px] font-bold uppercase tracking-tight text-dark leading-tight">
                        {item.title}
                    </h3>
                    <p className="text-[13px] lg:text-[14px] text-gray-500 mb-1">{item.category}</p>
                    <p className="text-[13px] lg:text-[14px] text-gray-500">{item.color}</p>


                    <div className="flex items-center gap-4 lg:gap-8 mt-2 lg:mt-0">
                        {/* Size Selector (Static for now since it's cart display) */}
                        <div className="flex flex-col gap-1">
                            <span className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">Size</span>
                            <select
                                value={item.size}
                                className="bg-transparent text-[14px] font-bold text-dark cursor-pointer outline-none"
                                onChange={() => dispatch(updateQuantity({ ...item, quantity: item.quantity }))} // Just a placeholder, size change logic not in slice yet
                                disabled
                            >
                                <option value={item.size}>{item.size}</option>
                            </select>
                        </div>

                        {/* Quantity Selector */}
                        <div className="flex flex-col gap-1">
                            <span className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">Quantity</span>
                            <select
                                value={item.quantity}
                                onChange={(e) => dispatch(updateQuantity({
                                    id: item.id,
                                    size: item.size,
                                    color: item.color,
                                    quantity: Number(e.target.value)
                                }))}
                                className="bg-transparent text-[14px] font-bold text-dark cursor-pointer outline-none"
                            >
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                                    <option key={n} value={n}>{n}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* price */}
                <div className="flex justify-between items-start mb-1">
                    <p className="text-[16px] lg:text-[20px] font-bold text-blue">
                        ${(item.price * item.quantity).toFixed(2)}
                    </p>
                </div>


                {/* Actions */}
                <div className="flex items-center gap-4 mt-3">
                    <button className="text-dark hover:text-blue transition-colors">
                        <Image src="/icons/heart_black.svg" alt="Wishlist" width={22} height={22} />
                    </button>
                    <button
                        onClick={() => dispatch(removeFromCart({ id: item.id, size: item.size, color: item.color }))}
                        className="text-dark hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                    >
                        <Image src="/icons/trash.svg" alt="Wishlist" width={22} height={22} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartItem
