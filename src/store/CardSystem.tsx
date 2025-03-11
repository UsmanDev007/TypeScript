import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../sections/home/HomeInterface';

interface CartState {
    cart: Product[];
    quantity: number;
}

const initialState: CartState = {
    cart: [],
    quantity: 0,
};

const CardSystem = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        AddCart: (state, action: PayloadAction<Product>) => {
            state.cart.push(action.payload);
        }
    }
});

export const { AddCart } = CardSystem.actions;
export default CardSystem.reducer;
