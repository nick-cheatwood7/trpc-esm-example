import type { FastifyInstance, RegisterOptions } from "fastify";

export default function (
    fastify: FastifyInstance,
    _opt: RegisterOptions,
    done: Function
) {
    fastify.get("/", {}, (_req, reply) => {
        reply.code(200).send({ data: "OK!" });
    });
    done();
}
