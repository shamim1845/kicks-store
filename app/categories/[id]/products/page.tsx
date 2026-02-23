"use client";

import { useParams } from "next/navigation";
import { useGetCategoryProductsQuery } from "@/redux/hooks";
import CategoryHeader from "@/components/feature/Categories/CategoryHeader";
import ProductCard from "@/components/ui/ProductCard";
import ProductCardSkeleton from "@/components/ui/ProductCardSkeleton";
import ErrorState from "@/components/ui/ErrorState";
import EmptyState from "@/components/ui/EmptyState";

export default function CategoryProductsPage() {
  const { id } = useParams<{ id: string }>();
  const categoryId = Number(id);

  const {
    data: products,
    isLoading,
    isError,
    refetch,
  } = useGetCategoryProductsQuery(categoryId);

  return (
    <div className="page_container">
      {/* Category Header */}
      <CategoryHeader categoryId={categoryId} />

      <section className="section_container pb-20">
        {isLoading ? (
          /* Loading State */
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 lg:gap-x-4 lg:gap-y-12">
            <ProductCardSkeleton count={8} />
          </div>
        ) : isError ? (
          /* Error State */
          <ErrorState
            title="Failed to load products"
            description="We couldn't fetch the products for this category. Please try again."
            onRetry={refetch}
          />
        ) : !products || products.length === 0 ? (
          /* Empty State */
          <EmptyState
            title="No products found"
            description="It looks like there are no products available in this category at the moment."
          />
        ) : (
          /* Products Grid */
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 lg:gap-x-4 lg:gap-y-12">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
