import { Link } from "react-router-dom";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";
import styles from "./Nav.module.css";
import { useAuth0 } from "@auth0/auth0-react";

export default function Nav() {
    const { isAuthenticated } = useAuth0();
    return (
        <div className={styles.navigationContainer}>
            <nav className={styles.navigation}>
                <Link to="/">Home</Link>
                <Link to="/profile">Profile</Link>
            </nav>
            <div className={styles.authBtn}>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</div>
        </div>
    );
}
