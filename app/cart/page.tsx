"use client";

import { useAppSelector, useGetRelatedProductsQuery } from "@/redux/hooks";
import OrderSummary from "@/components/feature/Cart/OrderSummary";
import ProductSlider from "@/components/ui/ProductSlider";
import Banner from "@/components/feature/Cart/Banner";
import CartItems from "@/components/feature/Cart/CartItems";

const CartPage = () => {
  const { items } = useAppSelector((state) => state.cart);

  // Use the first item's ID for related products, or fallback to a default (e.g., ID 11)
  const firstItemId = items.length > 0 ? items[0].id : 11;
  const {
    data: related,
    isLoading: relatedLoading,
    isError: relatedError,
    refetch: relatedRefetch,
  } = useGetRelatedProductsQuery(firstItemId);

  //   calculate subtotal, delivery, tax
  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const delivery = items.length > 0 ? 6.99 : 0;
  const tax = subtotal * 0.05;

  return (
    <div className="page_container">
      {/* ── Banner ── */}
      <Banner />

      <section className="section_container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* ── Left: Cart Items ── */}
          <CartItems />

          {/* ── Right: Order Summary ── */}
          <div className="lg:col-span-1">
            <OrderSummary subtotal={subtotal} delivery={delivery} tax={tax} />
          </div>
        </div>
      </section>

      {/* ── You may also like ── */}
      <div className="mt-16 lg:mt-24">
        <ProductSlider
          title="You may also like"
          titleClassName="flex-1 text-[24px] lg:text-[48px] font-bold"
          products={related}
          isLoading={relatedLoading}
          isError={relatedError}
          refetch={relatedRefetch}
          emptyTitle="No related products found"
          emptyDescription="Explore our full collection for more options."
        />
      </div>
    </div>
  );
};

export default CartPage;
