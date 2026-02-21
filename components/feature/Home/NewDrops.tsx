'use client'

import Button from '@/components/ui/Button'
import ProductCard from '@/components/ui/ProductCard'
import ProductCardSkeleton from '@/components/ui/ProductCardSkeleton'
import EmptyState from '@/components/ui/EmptyState'
import ErrorState from '@/components/ui/ErrorState'
import { useGetProductsQuery } from '@/redux/hooks'

const NewDrops = () => {
    const { data: products, isLoading, isError, refetch } = useGetProductsQuery({ offset: 0, limit: 4 })

    const isEmpty = !isLoading && !isError && (!products || products.length === 0)

    return (
        <div>
            {/* Header */}
            <div className="flex items-center justify-between gap-6">
                <h2 className='flex-1 text-[24px] lg:text-[74px] font-semibold leading-[100%] lg:leading-[95%] lg:uppercase'>
                    Don&apos;t miss out <br /> new drops
                </h2>
                <Button className=''>Shop new drops</Button>
            </div>

            {/* Body */}
            <div className="mt-6 lg:mt-10">
                {/* Loading */}
                {isLoading && (
                    <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <ProductCardSkeleton count={4} />
                    </ul>
                )}

                {/* Error */}
                {isError && (
                    <ErrorState onRetry={refetch} />
                )}

                {/* Empty */}
                {isEmpty && (
                    <EmptyState
                        title="No new drops yet"
                        description="We're restocking soon. Check back later for the latest arrivals."
                    />
                )}

                {/* Products */}
                {products && products.length > 0 && (
                    <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {products.map((product) => (
                            <li key={product.id}>
                                <ProductCard product={product} badge="90% off" />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default NewDrops