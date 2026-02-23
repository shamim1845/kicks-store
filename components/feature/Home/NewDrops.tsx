'use client'

import Link from 'next/link'
import { useGetProductsQuery } from '@/redux/hooks'
import ProductSlider from '@/components/ui/ProductSlider'
import Button from '@/components/ui/Button'

const NewDrops = () => {
    const { data: products, isLoading, isError, refetch } = useGetProductsQuery({ offset: 0, limit: 8 })

    return (
        <ProductSlider
            title={<>Don&apos;t miss out <br /> new drops</>}
            products={products}
            isLoading={isLoading}
            isError={isError}
            refetch={refetch}
            emptyTitle="No new drops yet"
            emptyDescription="We're restocking soon. Check back later for the latest arrivals."
            action={
                <Link href="/new-drops">
                    <Button>Shop new drops</Button>
                </Link>
            }
        />
    )
}

export default NewDrops
