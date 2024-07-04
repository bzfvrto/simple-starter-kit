// import { useAuth0 } from "@auth0/auth0-react";
// import { useApi } from "../../hooks/use-api"

export async function loader() {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-unsafe-assignment
    // const { loading, data, error } = useApi(`${import.meta.env.VITE_API_URL}/users`, {
    //     // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    //     audience: import.meta.env.VITE_OKTA_AUTH_AUDIENCE,
    //     scope: "read",
    // });

    // console.log('here', loading);


    // if (!loading) {
    //     console.log(data);

    //     if (error) {
    //         Promise.reject(error);
    //     }
    //     return data as object[];
    // }
    // const { getAccessTokenSilently } = useAuth0();
    // const accessToken = await getAccessTokenSilently({
    //     authorizationParams: { audience: import.meta.env.VITE_OKTA_AUTH_AUDIENCE },
    // });
    const dataResponse = await fetch(`${import.meta.env.VITE_API_URL}/data`);
    const data = await dataResponse.json()
    return { data: data.data };
}
