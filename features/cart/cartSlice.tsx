import { RootState } from "@/lib/store";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
// interface AddToCartPayload {
//   id: number;
//   cartQuantity: number;
// }
interface AppState {
  cartItems: { id: number; cartQuantity: number }[]; // Adjust type as per your actual state structure
}

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state: AppState, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const newProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(newProduct);
      }
    },
  },
});

export const {addToCart } = cartSlice.actions;
export const selectCount = (state: RootState) => state.cart.cartItems;
export default cartSlice.reducer;
