'use client'

import { useParams } from 'next/navigation'
import { useGetProductByIdQuery, useGetRelatedProductsQuery } from '@/redux/hooks'
import ImageGallery from '@/components/feature/Product/ImageGallery'
import ProductDetails from '@/components/feature/Product/ProductDetails'
import { GallerySkeleton, ProductDetailsSkeleton } from '@/components/feature/Product/ProductSkeleton'
import ProductError, { GalleryError } from '@/components/feature/Product/ProductError'
import ProductSlider from '@/components/ui/ProductSlider'

export default function ProductPage() {
    const { id } = useParams<{ id: string }>()
    const productId = Number(id)

    // Get product by id
    const { data: product, isLoading, isError, refetch } = useGetProductByIdQuery(productId)
    // Get related products by id
    const {
        data: related,
        isLoading: relatedLoading,
        isError: relatedError,
        refetch: relatedRefetch,
    } = useGetRelatedProductsQuery(productId)

    return (
        <div className="page_container">
            {/* ── Product detail section ── */}
            <section className="section_container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                    {/* Left: image gallery */}
                    <div>
                        {isLoading && <GallerySkeleton />}
                        {isError && !product && <GalleryError onRetry={refetch} />}
                        {product && <ImageGallery images={product.images} title={product.title} />}
                    </div>

                    {/* Right: product details */}
                    <div>
                        {isLoading && <ProductDetailsSkeleton />}
                        {isError && !product && <ProductError onRetry={refetch} />}
                        {product && <ProductDetails product={product} />}
                    </div>

                </div>
            </section>

            {/* ── You may also like ── */}
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
    )
}
