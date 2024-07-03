export function getConfig() {
    return {
        domain: import.meta.env.VITE_OKTA_AUTH_DOMAIN,
        clientId: import.meta.env.VITE_OKTA_AUTH_CLIENT_ID,
        audience: import.meta.env.VITE_OKTA_AUTH_AUDIENCE,
    };
}
