// app/providers.tsx
"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { store } from "@/lib/store";
import { Provider } from "react-redux";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <Provider store={store}>{children}</Provider>
    </ChakraProvider>
  );
}
