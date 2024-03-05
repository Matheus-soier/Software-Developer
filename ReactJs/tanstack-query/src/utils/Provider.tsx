"use client"

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react"

type Props = {
    children: ReactNode;
}

export const Providers = ({ children }: Props) => {
    const queryclient = new QueryClient();
    return(
        <QueryClientProvider client={queryclient}>
            {children}
        <ReactQueryDevtools
            initialIsOpen={false}
        />
        </QueryClientProvider>
    );
}