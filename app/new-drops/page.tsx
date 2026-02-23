"use client";

import { useGetProductsQuery } from "@/redux/hooks";
import NewDropsHeader from "@/components/feature/NewDrops/NewDropsHeader";
import ProductCard from "@/components/ui/ProductCard";
import ProductCardSkeleton from "@/components/ui/ProductCardSkeleton";
import ErrorState from "@/components/ui/ErrorState";
import EmptyState from "@/components/ui/EmptyState";

export default function NewDropsPage() {
  const {
    data: products,
    isLoading,
    isError,
    refetch,
  } = useGetProductsQuery({ limit: 100, offset: 0 });

  return (
    <div className="page_container">
      {/* Header */}
      <NewDropsHeader />

      {/* Error State */}
      {isError && (
        <section className="section_container">
          <ErrorState
            title="Failed to load products"
            description="We couldn't fetch the products for this category. Please try again."
            onRetry={refetch}
          />
        </section>
      )}

      {/* Empty State */}
      {!isError && !isLoading && (!products || products.length === 0) && (
        <section className="section_container">
          <EmptyState
            title="No products found"
            description="It looks like there are no products available in this category at the moment."
          />
        </section>
      )}

      {/* Products */}
      {(isLoading || (products && products.length > 0)) && !isError && (
        <section className="section_container pb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 lg:gap-x-4 lg:gap-y-12">
            {isLoading ? (
              <ProductCardSkeleton count={8} />
            ) : (
              products?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            )}
          </div>
        </section>
      )}
    </div>
  );
}
