import { createBrowserRouter } from "react-router-dom";
import { RequireAuthenticatedUser } from "../components/RequireAuthenticatedUser";
import Layout from "../components/Layout";
import Profile from "../pages/Profile";
import Home from "../pages/Home";

export const appRouter = () => {
    const AuthenticatedProfile = RequireAuthenticatedUser(Profile);

    return createBrowserRouter([
        {
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/profile",
                    element: <AuthenticatedProfile />,
                },
            ],
        },
    ]);
};
