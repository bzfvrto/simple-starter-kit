import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";

export function RequireAuthenticatedUser(component: React.ComponentType<object>) {
    return withAuthenticationRequired(component);
}
