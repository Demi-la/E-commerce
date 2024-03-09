// app/providers.tsx
"use client";
import "react-toastify/dist/ReactToastify.css";
import { ChakraProvider } from "@chakra-ui/react";
import { store } from "@/lib/store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <ToastContainer/>
      <Provider store={store}>{children}</Provider>
    </ChakraProvider>
  );
}
