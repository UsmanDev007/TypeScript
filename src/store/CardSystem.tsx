import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../sections/home/HomeInterface";

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  cart: CartItem[];
}

const initialState: CartState = {
  cart: [],
};

const CartSystem = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddCart: (state, action: PayloadAction<Product>) => {
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    clearCart: (state) => {
        state.cart = []; 
      },
  },
});

export const { AddCart,clearCart } = CartSystem.actions;
export default CartSystem.reducer;
