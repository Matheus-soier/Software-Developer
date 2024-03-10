"use client"

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react"
import { queryClient } from './queryClient';

export const Providers = ({ children }: {children: ReactNode}) => {
    return(
        <QueryClientProvider client={queryClient}>
            {children}
        <ReactQueryDevtools
            initialIsOpen={false}
        />
        </QueryClientProvider>
    );
}