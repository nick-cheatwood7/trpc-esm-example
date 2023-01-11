// utils/trpc.ts
import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "@trpc-esm-example/server";

export const api = createTRPCReact<AppRouter>();
