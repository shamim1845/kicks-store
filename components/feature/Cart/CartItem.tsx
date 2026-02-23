"use client";

import Image from "next/image";
import { useAppDispatch } from "@/redux/hooks";
import {
  removeFromCart,
  updateQuantity,
  CartItem as CartItemType,
} from "@/redux/features/cartSlice";
import { SIZES } from "../Product/ProductDetails";

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const dispatch = useAppDispatch();

  console.log(item);

  return (
    <div className="flex gap-4 lg:gap-6 relative overflow-hidden">
      {/* Image */}
      <div className="flex-1 max-w-[157px] max-h-[216px] lg:max-w-[207px] lg:max-h-[225px]  bg-light-gray rounded-[24px] overflow-hidden relative">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="w-full h-full object-cover"
          unoptimized
        />
      </div>

      {/* Info */}
      <div className="flex-1 lg:flex-2 flex flex-col justify-between">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="flex-1 space-y-2">
            {/* Title */}
            <h3 className="text-[16px] lg:text-[24px] font-semibold uppercase tracking-tight text-dark leading-tight">
              {item.title}
            </h3>

            {/* Category & Color */}
            <div className="space-y-1">
              <p className="text-[14px] lg:text-[20px] text-dark/80 font-open-sans font-semibold">
                {item.category}
              </p>
              <p className="text-[14px] lg:text-[20px] text-dark/80 font-open-sans font-semibold">
                {item.color}
              </p>
            </div>

            {/* Size & Quantity */}
            <div className="flex flex-row flex-wrap lg:items-center gap-2 lg:gap-8 mt-2 lg:mt-0">
              {/* Size Selector */}
              <div className="flex gap-1">
                <span className="text-[16px] lg:text-[20px] font-open-sans font-semibold text-dark/80 uppercase">
                  Size
                </span>
                <select
                  id="size"
                  value={item.size}
                  className="bg-transparent text-[16px] lg:text-[20px] font-open-sans font-semibold text-dark/80 cursor-pointer outline-none"
                  onChange={(e) =>
                    dispatch(
                      updateQuantity({
                        id: item.id,
                        size: item.size,
                        color: item.color,
                        quantity: Number(e.target.value),
                      }),
                    )
                  }
                >
                  {SIZES.map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>

              {/* Quantity Selector */}
              <div className="flex gap-1">
                <span className="text-[16px] lg:text-[20px] font-open-sans font-semibold text-dark/80 uppercase">
                  Quantity
                </span>
                <select
                  id="quantity"
                  value={item.quantity}
                  className="bg-transparent text-[16px] lg:text-[20px] font-open-sans font-semibold text-dark/80 cursor-pointer outline-none"
                  onChange={(e) =>
                    dispatch(
                      updateQuantity({
                        id: item.id,
                        size: item.size,
                        color: item.color,
                        quantity: Number(e.target.value),
                      }),
                    )
                  }
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* price */}
          <div className="flex justify-between items-start mb-1">
            <p className="text-[20px] lg:text-[24px] font-semibold text-blue">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 lg:gap-6 mt-3">
          <button className="text-dark hover:text-blue transition-colors">
            <Image
              src="/icons/heart_black.svg"
              alt="Wishlist"
              width={32}
              height={32}
              className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px] cursor-pointer"
            />
          </button>
          <button
            onClick={() =>
              dispatch(
                removeFromCart({
                  id: item.id,
                  size: item.size,
                  color: item.color,
                }),
              )
            }
            className="text-dark hover:text-red-500 transition-colors"
            aria-label="Remove item"
          >
            <Image
              src="/icons/trash.svg"
              alt="Wishlist"
              width={32}
              height={32}
              className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px] cursor-pointer"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
