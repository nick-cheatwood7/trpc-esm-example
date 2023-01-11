import { z } from "zod";
import {
    createTRPCRouter,
    publicProcedure,
    protectedProducer
} from "../../trpc.js";

export const exampleRouter = createTRPCRouter({
    hello: publicProcedure.query(() => {
        return {
            greeting: `Hello, World!`
        };
    }),
    greeting: publicProcedure
        .input(z.object({ name: z.string() }))
        .query(({ input }) => {
            return {
                greeting: `Hello, ${input.name}`
            };
        }),
    getSecretMessage: protectedProducer.query(({ ctx }) => {
        console.log("Session data:", ctx.session);
        return "You can now see this secret message";
    })
});
