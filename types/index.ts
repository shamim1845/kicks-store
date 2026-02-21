export interface Category {
    id: number
    name: string
    image: string
    slug: string
}

export interface Product {
    id: number
    title: string
    slug: string
    price: number
    description: string
    images: string[]
    category: Category
}

// Query params for fetching products
export interface GetProductsParams {
    offset?: number
    limit?: number
}
