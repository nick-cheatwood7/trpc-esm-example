import { inferAsyncReturnType, initTRPC, TRPCError } from "@trpc/server";
import type { CreateFastifyContextOptions } from "@trpc/server/adapters/fastify";
import superjson from "superjson";
import { randomUUID } from "crypto";

/**
 * Context
 */
export function createContext({ req, res }: CreateFastifyContextOptions) {
    const user = { name: req.headers["username"] ?? "anonymous" };
    return { req, res, user };
}

export type Context = inferAsyncReturnType<typeof createContext>;

/**
 * Initialization
 */
const t = initTRPC.context<Context>().create({
    transformer: superjson,
    errorFormatter({ shape }) {
        return shape;
    }
});

/**
 * Middleware
 */
const isAuthed = t.middleware(({ ctx, next }) => {
    if (!ctx.user) {
        throw new TRPCError({ code: "UNAUTHORIZED" });
    }
    return next({
        ctx: {
            session: {
                id: randomUUID()
            }
        }
    });
});

/**
 * Router/Procedure
 */
export const createTRPCRouter = t.router;
export const publicProcedure = t.procedure;
export const protectedProducer = t.procedure.use(isAuthed);
