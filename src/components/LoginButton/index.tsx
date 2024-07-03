import { useAuth0 } from "@auth0/auth0-react";

export default function LoginButton() {
    const { loginWithRedirect } = useAuth0();
    return (
        <button className="auth-button" type="button" onClick={() => loginWithRedirect()}>
            Log in
        </button>
    );
}
