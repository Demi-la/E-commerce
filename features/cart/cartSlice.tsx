import { RootState } from "@/lib/store";
import { createSlice } from "@reduxjs/toolkit";
 import { toast } from "react-toastify";
import { PayloadAction } from "@reduxjs/toolkit";
// interface AddToCartPayload {
//   id: number;
//   cartQuantity: number;
// }
interface AppState {
  cartItems: { id: number; title: string; cartQuantity: number }[]; // Adjust type as per your actual state structure
}

const cartItemsFromLocalStorage = localStorage.getItem("cartItems");
const initialCartItems = cartItemsFromLocalStorage
  ? JSON.parse(cartItemsFromLocalStorage)
  : [];
const initialState = {
  cartItems: initialCartItems,
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
        toast.info(
          `Increased ${state.cartItems[itemIndex].title} cart quantity`,
          { position: "top-right" }
        );
      } else {
        const newProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(newProduct);
        toast.success(`${action.payload.title} added to cart`, {
          position: "top-right",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeProductFromCart(state, action) {
      const productToRemove = action.payload.id;
      const updatedCartItems = state.cartItems.filter(
        (cartItem: { id: any }) => cartItem.id !== productToRemove
      );

      // Save updatedCartItems in local storage
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

      toast.error(`${action.payload.title} Removed from cart`, {
        position: "top-right",
      });

      return { ...state, cartItems: updatedCartItems };
    },
  },
});

export const { addToCart, removeProductFromCart } = cartSlice.actions;
// export const selectCount = (state: RootState) => state.cart.cart;
export default cartSlice.reducer;
