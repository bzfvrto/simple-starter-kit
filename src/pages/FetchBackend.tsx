// import { useEffect } from "react";
import { Loading } from "../components/Loading";
import { PageTitle } from "../components/Titles/PageTitle";
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

    const printResponse = (data: any) => {
        const properties = [];
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                const element = data[key];
                console.log(element);

                properties.push(`${key} : ${element}`);
            }
        }
        return properties;
    };

    return (
        <div style={{ height: "100%" }}>
            <PageTitle>Fetch Backend</PageTitle>
            {data && (
                <div
                    style={{
                        overflowY: "scroll",
                        height: "100%",
                        overflowWrap: "break-word",
                        margin: 15,
                        padding: "2rem",
                    }}
                >
                    <h3>Authenticated Api response :</h3>
                    <div style={{ marginBottom: "5rem" }}>
                        <h6>Response payload</h6>
                        <ul style={{ textAlign: "left" }}>
                            {printResponse(data.users.payload).map((item) => {
                                return <li>{item}</li>;
                            })}
                        </ul>
                        <h6 style={{ marginTop: "2rem" }}>Response headers</h6>
                        <ul style={{ textAlign: "left" }}>
                            {printResponse(data.users.header).map((item) => {
                                return <li>{item}</li>;
                            })}
                        </ul>
                        <h6 style={{ marginTop: "2rem" }}>Response Token</h6>
                        <div>
                            <p>token : {data.users.token}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
