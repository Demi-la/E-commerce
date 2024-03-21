import { RootState } from "@/lib/store";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { PayloadAction } from "@reduxjs/toolkit";

interface AppState {
  cartItems: { id: number; title: string; cartQuantity: number }[];
  cartTotalQuantity: number;
  cartTotalAmount:number;
  
}
type CartItem = {
  id: number;
  cartQuantity: number;
};

// const cartItemsFromLocalStorage = localStorage.getItem("cartItems");
// const initialCartItems =
//  cartItemsFromLocalStorage
//   ? JSON.parse(cartItemsFromLocalStorage)
//   : [];
const initialState: AppState = {
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
      // if (typeof window !== "undefined") {
      //   localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      // }
    },
    removeProductFromCart(state, action) {
      const productToRemove = action.payload.id;
      const updatedCartItems = state.cartItems.filter(
        (cartItem: { id: any }) => cartItem.id !== productToRemove
      );
      // if (typeof window !== "undefined") {
      //   localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
      // }
      toast.error(`${action.payload.title} Removed from cart`, {
        position: "top-right",
      });
      return { ...state, cartItems: updatedCartItems };
    },

    decreaseProductQuantity(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem: { id: any }) => cartItem.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const NoCartItem = state.cartItems.filter(
          (cartItem: { id: any }) => cartItem.id !== action.payload.id
        );
        state.cartItems = NoCartItem;
      }
      // if (typeof window !== "undefined") {
      //   localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      // }
    },
    cartTotals(state) {
      const { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          cartTotal.total += cartItem.cartQuantity; // Assuming cartItem.cartQuantity represents the price of each item
          cartTotal.quantity += 1; // Increment quantity by 1 for each item
          return cartTotal;
        },
        { total: 0, quantity: 0 } // Initial values for total and quantity
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
   

    clearCart(state, action) {
      state.cartItems = [];
      toast.error("Cart cleared", {
        position: "top-right",
      });
      // if (typeof window !== "undefined") {
      //   localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      // }
    },
  },
});

export const {
  addToCart,
  removeProductFromCart,
  decreaseProductQuantity,
  clearCart,
  cartTotals,
} = cartSlice.actions;
// export const selectCount = (state: RootState) => state.cart.cart;
export default cartSlice.reducer;
