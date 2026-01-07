import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PortfolioRouter } from "./PortfolioRouter";
import { ModalProvider } from "./context/ModalContext/ModalProvider";
//import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    {/* <ReactQueryDevtools /> */}
    <StrictMode>
      <ModalProvider>
        <PortfolioRouter />
      </ModalProvider>
    </StrictMode>
  </QueryClientProvider>
);
