import type { FastifyInstance, RouteShorthandOptions } from "fastify";
import healthcheckRouter from "./healthcheck.route.js";

export function router(
    fastify: FastifyInstance,
    _opts: RouteShorthandOptions,
    done: Function
) {
    fastify.register(healthcheckRouter, { prefix: "/health" });
    done();
}
