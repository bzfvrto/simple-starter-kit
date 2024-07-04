// import { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
// import App from "../App";
// import Nav from "../Nav";
import { SideBar } from "../Sidebar";
import styles from "./DashboardLayout.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Loading } from "../Loading";
import { Footer } from "../Footer";
import TopBar from "../TopBar";

export function DashboardLayout() {
    const { isLoading, user } = useAuth0();
    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className={styles.container}>
            <div className={styles.topBar}>
                <TopBar user={user} />
            </div>
            <SideBar />
            <div className={styles.innerContainer}>
                <div className={styles.dashboardContent + " content"}>
                    <Outlet />
                </div>
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    );
}
