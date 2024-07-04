import { User } from "@auth0/auth0-react";
import viteLogo from "/vite.svg";
import styles from "./TopBar.module.css";
import { NavLink } from "react-router-dom";

export default function TopBar({ user }: { user: User | undefined }) {
    return (
        <div className={styles.container}>
            <NavLink to="/" style={{ display: "flex", alignItems: "center" }} unstable_viewTransition>
                <img src={viteLogo} className={styles.logo} alt="Vite logo" />

                <div style={{ paddingInline: 15, fontWeight: "bold", fontSize: "1.5rem" }}>
                    {import.meta.env.VITE_APP_NAME}
                </div>
            </NavLink>
            {user && <img className={styles.avatar} src={user.picture} alt={`${user.email}'s profile pictures`} />}
        </div>
    );
}
