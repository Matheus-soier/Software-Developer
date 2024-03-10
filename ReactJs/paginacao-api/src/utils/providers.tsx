"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
}

// Colocar Provider no Layout
export const Provider = ({children}: Props) => {
    
    //Instânciando o query Cliente
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                networkMode: "online",
                staleTime: Infinity
            }
        }
    });

    return(
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    );
}