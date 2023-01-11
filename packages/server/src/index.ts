import { app } from "./app.js";
import { PORT } from "./utils/constants.js";

async function main() {
    try {
        // Listen
        app.listen({ port: PORT }, (err, address) => {
            if (err) {
                console.error(err);
                process.exit(0);
            }
            console.log(`🚀 Server listening at ${address}`);
        });
    } catch (err) {
        console.error("Error starting server:", err);
        await app.close();
        process.exit(0);
    }
}

// Graceful shutdown
process.on("SIGINT", async () => {
    console.log("Shutting down HTTP server...");
    await app.close();
});

main();
