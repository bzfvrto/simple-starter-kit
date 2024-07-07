import { createBrowserRouter } from "react-router-dom";
import { RequireAuthenticatedUser } from "../components/RequireAuthenticatedUser";
import RootLayout from "../components/RootLayout";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import { FetchBackend } from "../pages/FetchBackend";
import ErrorPage from "../pages/ErrorPage";
import DataDisplay from "../pages/DataDisplay";
import { loader as dataLoader } from "./loader/data";
import GuestLayout from "../components/GuestLayout";
import { DashboardLayout } from "../components/DashboardLayout";
import { fakeFormAction } from "../actions/fakeFormAction";

export const appRouter = () => {
    const AuthenticatedProfile = RequireAuthenticatedUser(Profile);
    const AuthenticatedFetchApi = RequireAuthenticatedUser(FetchBackend);

    return createBrowserRouter([
        {
            element: <RootLayout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    element: <GuestLayout />,
                    children: [
                        {
                            path: "/",
                            element: <Home />,
                        },
                    ],
                },
                {
                    element: <DashboardLayout />,
                    children: [
                        {
                            path: "/profile",
                            element: <AuthenticatedProfile />,
                        },
                        {
                            path: "/api-example",
                            element: <AuthenticatedFetchApi />,
                        },
                        {
                            path: "/data-display",
                            element: <DataDisplay />,
                            action: fakeFormAction,
                            loader: dataLoader,
                        },
                    ],
                },
            ],
        },
    ]);
};

// export const dataLoader = async () => {
//     const { getAccessTokenSilently } = useAuth0();
//     const accessToken = await getAccessTokenSilently({
//         authorizationParams: { audience: import.meta.env.VITE_OKTA_AUTH_AUDIENCE },
//     });
//     // const data = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
//     //     headers: {
//     //         // Add the Authorization header to the existing headers
//     //         Authorization: `Bearer ${accessToken}`,
//     //     },
//     // });
//     const data = accessToken;
//     return { data };
// };
