import { createTRPCRouter } from "../../trpc";
import { exampleRouter } from "./example.js";

export const appRouter = createTRPCRouter({
    example: exampleRouter
});

export type AppRouter = typeof appRouter;
