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
                const { audience, ...fetchOptions } = options;

                const accessToken = await getAccessTokenSilently({
                    authorizationParams: { audience },
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
                console.log('THERE IS AN ERROR', error);

                setState({
                    ...state,
                    error,
                    loading: false,
                  });
            }
        })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return state;
}
