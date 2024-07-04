import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./routes/index.tsx";

const router = appRouter();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider
            router={router}
            // future={{
            //     // Wrap all state updates in React.startTransition()
            //     v7_startTransition: true,
            // }}
        />
    </React.StrictMode>
);
