// import { useEffect } from "react";
import { Loading } from "../components/Loading";
import { useApi } from "../hooks/use-api";

export function FetchBackend() {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-assignment
    const { loading, data, error } = useApi(`${import.meta.env.VITE_API_URL}/users`, {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        audience: import.meta.env.VITE_OKTA_AUTH_AUDIENCE,
        scope: "read",
    });

    if (loading) {
        return <Loading />;
    }
    if (error) {
        return <div>{JSON.stringify(data)}</div>;
    }

    return (
        <div>
            <h2 style={{ boxShadow: "2px 2px 2px 1px rgba(0,0,0,0.075)", paddingBottom: "1rem", paddingTop: ".75rem" }}>
                Fetch Backend
            </h2>
            {data && (
                <div>
                    <h6>Authenticated Api response :</h6>
                    <p style={{ overflowWrap: "break-word", margin: 15, padding: 2 }}>
                        {JSON.stringify(data, null, 2)}
                    </p>
                </div>
            )}
        </div>
    );
}
