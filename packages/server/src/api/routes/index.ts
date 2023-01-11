import type { FastifyInstance, RouteShorthandOptions } from "fastify";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import { router as v1Router } from "./v1/index.js";
import { appRouter } from "./trpc/router.js";
import { createContext } from "../trpc.js";

export function router(
    fastify: FastifyInstance,
    _opts: RouteShorthandOptions,
    done: Function
) {
    fastify.register(v1Router, { prefix: "/v1" });
    fastify.register(fastifyTRPCPlugin, {
        prefix: "/trpc",
        trpcOptions: {
            router: appRouter,
            createContext
        }
    });
    done();
}
