import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action) {
            const existing = state.cartItems.find(item => item.id === action.payload.id);
            if (existing) {
                existing.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItemFromCart(state, action) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },
        clearCart(state) {
            state.cartItems = [];
        },
        increaseItemQuantity(state, action) {
            const item = state.cartItems.find(i => i.id === action.payload);
            if (item) item.quantity += 1;
        },
        decreaseItemQuantity(state, action) {
            const item = state.cartItems.find(i => i.id === action.payload);
            if (item && item.quantity > 1) item.quantity -= 1;
        },
    }
});

export const {
    addItemToCart,
    removeItemFromCart,
    clearCart,
    increaseItemQuantity,
    decreaseItemQuantity
} = cartSlice.actions;

export default cartSlice.reducer;
