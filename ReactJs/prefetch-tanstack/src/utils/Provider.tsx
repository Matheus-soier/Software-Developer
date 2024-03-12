"use client"

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { queryClient } from "./queryClient";

type Props = { children: ReactNode; }
export const Provider = ({children}: Props) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>




