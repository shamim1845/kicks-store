import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'

// Use these typed hooks throughout the app instead of plain useDispatch / useSelector
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

// Re-export RTK Query hooks for convenience
export { useGetProductsQuery, useGetProductByIdQuery, useGetRelatedProductsQuery, useGetCategoryProductsQuery } from './services/productsApi'
export { useGetCategoriesQuery, useGetCategoryByIdQuery } from './services/categoriesApi'
