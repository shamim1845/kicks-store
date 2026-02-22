import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CartItem {
    id: number
    title: string
    price: number
    image: string
    category: string
    color: string
    size: number
    quantity: number
}

interface CartState {
    items: CartItem[]
}

const initialState: CartState = {
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
            const existingItem = state.items.find(
                (item) =>
                    item.id === action.payload.id &&
                    item.size === action.payload.size &&
                    item.color === action.payload.color
            )

            if (existingItem) {
                existingItem.quantity += 1
            } else {
                state.items.push({ ...action.payload, quantity: 1 })
            }
        },
        removeFromCart: (state, action: PayloadAction<{ id: number, size: number, color: string }>) => {
            state.items = state.items.filter(
                (item) =>
                    !(item.id === action.payload.id &&
                        item.size === action.payload.size &&
                        item.color === action.payload.color)
            )
        },
        updateQuantity: (state, action: PayloadAction<{ id: number, size: number, color: string, quantity: number }>) => {
            const item = state.items.find(
                (item) =>
                    item.id === action.payload.id &&
                    item.size === action.payload.size &&
                    item.color === action.payload.color
            )
            if (item) {
                item.quantity = action.payload.quantity
            }
        },
        clearCart: (state) => {
            state.items = []
        },
    },
})

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer
