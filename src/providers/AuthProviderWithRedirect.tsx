import { PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import { AppState, Auth0Provider, Auth0ProviderOptions } from "@auth0/auth0-react";

export const AuthProviderWithRedirect = ({ children, ...props }: PropsWithChildren<Auth0ProviderOptions>) => {
    const navigate = useNavigate();
    const onRedirectCallback = (appState?: AppState) => {
        navigate((appState && appState.returnTo) || window.location.pathname);
    };

    return (
        <Auth0Provider onRedirectCallback={props.onRedirectCallback ?? onRedirectCallback} {...props}>
            {children}
        </Auth0Provider>
    );
};
