import { api } from "../utils/api";

export default function Home() {
    const greetingQuery = api.example.greeting.useQuery({ name: "User" });
    if (!greetingQuery.data) return <div>Loading...</div>;
    return (
        <div>
            <p>{greetingQuery.data.greeting}</p>
        </div>
    );
}
