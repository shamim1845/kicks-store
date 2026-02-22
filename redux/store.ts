import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { productsApi } from './services/productsApi'
import { categoriesApi } from './services/categoriesApi'
import cartReducer from './features/cartSlice'

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer,
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(productsApi.middleware)
            .concat(categoriesApi.middleware),
})

// Enable refetchOnFocus / refetchOnReconnect behaviors
setupListeners(store.dispatch)

// Infer types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
