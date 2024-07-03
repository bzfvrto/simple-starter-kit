import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useApi = (url: string, options: any = {}): { error?: Error | null; loading: boolean;  data?: any} => {
    const { getAccessTokenSilently } = useAuth0();
    const [state, setState] = useState({
        error: null,
        loading: true,
        data: null,
    });

    useEffect(() => {
        (async () => {
            try {
                const { audience, scope, ...fetchOptions } = options;

                const accessToken = await getAccessTokenSilently({
                    authorizationParams: { audience, scope },
                });

                const res = await fetch(url, {
                    ...fetchOptions,
                    headers: {
                      ...fetchOptions.headers,
                      // Add the Authorization header to the existing headers
                      Authorization: `Bearer ${accessToken}`,
                    },
                });

                setState({
                    ...state,
                    data: await res.json(),
                    error: null,
                    loading: false,
                  });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (error: any) {
                setState({
                    ...state,
                    error,
                    loading: false,
                  });
            }
        })();
    });
    return state;
}
