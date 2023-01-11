import { fastify } from "fastify";
import { router } from "./api/routes/index.js";
import { __prod__ } from "./utils/constants.js";
import cors from "@fastify/cors";

const app = fastify({
    logger: !__prod__ && { transport: { target: "@fastify/one-line-logger" } },
    maxParamLength: 5000
});

// CORS
app.register(cors, {
    origin: "*"
});

// Rate limiter
const ONE_MINUTE = 1000 * 60;
app.register(import("@fastify/rate-limit"), {
    max: 100,
    timeWindow: ONE_MINUTE
});

// Register routes
app.register(router, { prefix: "/api" });

export { app };
