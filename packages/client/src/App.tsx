import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpLink } from "@trpc/client";
import { useState } from "react";
import { api } from "./utils/api";
import superjson from "superjson";
import "./App.css";
import Home from "./pages";

function App() {
    const [queryClient] = useState(() => new QueryClient());
    const [trpcClient] = useState(() =>
        api.createClient({
            links: [
                httpLink({
                    url: "http://localhost:4000/api/trpc"
                })
            ],
            transformer: superjson
        })
    );
    return (
        <api.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                <Home />
            </QueryClientProvider>
        </api.Provider>
    );
}

export default App;
