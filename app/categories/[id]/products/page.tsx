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

  if (isError) {
    return (
      <div className="page_container">
        <section className="section_container">
          <ErrorState
            title="Failed to load products"
            description="We couldn't fetch the products for this category. Please try again."
            onRetry={refetch}
          />
        </section>
      </div>
    );
  }

  if (!isLoading && (!products || products.length === 0)) {
    return (
      <div className="page_container">
        <section className="section_container">
          <EmptyState
            title="No products found"
            description="It looks like there are no products available in this category at the moment."
          />
        </section>
      </div>
    );
  }

  return (
    <div className="page_container">
      {/* Category Header */}
      <CategoryHeader categoryId={categoryId} />

      {/* Products */}
      <section className="section_container">
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
    </div>
  );
}
