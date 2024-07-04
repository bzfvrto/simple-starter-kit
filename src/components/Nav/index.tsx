import { NavLink } from "react-router-dom";
import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";
import styles from "./Nav.module.css";
import { useAuth0 } from "@auth0/auth0-react";

export default function Nav() {
    const { isAuthenticated } = useAuth0();
    const linkStyle = ({
        isActive,
        isPending,
    }: {
        isActive: boolean;
        isPending: boolean;
        isTransitioning: boolean;
    }) => {
        return {
            // fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : isActive ? "#d97706" : "",
            borderBottom: isActive ? "2px solid blue" : "",
        };
    };
    return (
        <div className={styles.navigationContainer}>
            <nav className={styles.navigation}>
                <NavLink to="/" style={linkStyle} unstable_viewTransition>
                    Home
                </NavLink>
                {isAuthenticated && (
                    <>
                        <NavLink to="/profile" style={linkStyle} unstable_viewTransition>
                            Profile
                        </NavLink>
                        <NavLink to="/api-example" style={linkStyle} unstable_viewTransition>
                            Api Example
                        </NavLink>
                        <NavLink to="/data-display" style={linkStyle} unstable_viewTransition>
                            Table
                        </NavLink>
                    </>
                )}
            </nav>
            <div className={styles.authBtn}>{isAuthenticated ? <LogoutButton /> : <LoginButton />}</div>
        </div>
    );
}
