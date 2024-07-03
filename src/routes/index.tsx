import { createBrowserRouter } from "react-router-dom";
import { RequireAuthenticatedUser } from "../components/RequireAuthenticatedUser";
import Layout from "../components/Layout";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import { FetchBackend } from "../pages/FetchBackend";
import ErrorPage from "../pages/ErrorPage";

export const appRouter = () => {
    const AuthenticatedProfile = RequireAuthenticatedUser(Profile);
    const AuthenticatedFetchApi = RequireAuthenticatedUser(FetchBackend);

    return createBrowserRouter([
        {
            element: <Layout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/profile",
                    element: <AuthenticatedProfile />,
                },
                {
                    path: "/api-example",
                    element: <AuthenticatedFetchApi />,
                },
            ],
        },
    ]);
};
