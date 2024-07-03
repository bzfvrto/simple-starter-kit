import { AuthProviderWithRedirect } from "../providers/AuthProviderWithRedirect";
import { getConfig } from "../config";
import App from "../App";
// import { RequireAuthenticatedUser } from "./RequireAuthenticatedUser";

const config = getConfig();

const providerConfig = {
    domain: config.domain,
    clientId: config.clientId,
    authorizationParams: {
        redirect_uri: window.location.origin,
        audience: config.audience,
    },
};

export default function Layout() {
    return (
        <AuthProviderWithRedirect {...providerConfig}>
            {/* <AuthenticatedApp /> */}
            <App />
        </AuthProviderWithRedirect>
    );
}
