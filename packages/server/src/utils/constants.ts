export const __prod__ = process.env["NODE_ENV"] === "production";
export const PORT = process.env["PORT"] ? Number(process.env["PORT"]) : 4000;
