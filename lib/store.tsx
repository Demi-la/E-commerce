import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiRequest } from "./api";
import cartReducer from "@/features/cart/cartSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      [apiRequest.reducerPath]: apiRequest.reducer,
      cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiRequest.middleware),
  });
};


// store.dispatch(getTotals());
export const store = makeStore();
setupListeners(store.dispatch);
// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']