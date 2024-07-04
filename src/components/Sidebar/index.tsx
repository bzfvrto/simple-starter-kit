import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";
import LogoutButton from "../LogoutButton";

export function SideBar() {
    const linkStyle = ({
        isActive,
        isPending,
    }: // isTransitioning,
    {
        isActive: boolean;
        isPending: boolean;
        isTransitioning: boolean;
    }) => {
        return {
            // fontWeight: isActive ? "bold" : "",
            color: isPending ? "red" : isActive ? "#d97706" : "",
            // borderBottom: isActive ? "2px solid blue" : "",
            // viewTransitionName: isTransitioning ? "slide" : "",
            paddingTop: 15,
        };
    };

    return (
        <div className={styles.container}>
            <div className={styles.sidebarContent}>
                {/* <div className={styles.logoContainer}>
                    <NavLink to="/" style={linkStyle} unstable_viewTransition>
                        <img src={viteLogo} className={styles.logo} alt="Vite logo" />
                    </NavLink>
                </div> */}
                <nav className={styles.navigation}>
                    <NavLink to="/profile" style={linkStyle} unstable_viewTransition>
                        Profile
                    </NavLink>
                    <NavLink to="/api-example" style={linkStyle} unstable_viewTransition>
                        Api Example
                    </NavLink>
                    <NavLink to="/data-display" style={linkStyle} unstable_viewTransition>
                        Table
                    </NavLink>
                </nav>
            </div>
            <div className={styles.authBtn}>
                <LogoutButton />
            </div>
        </div>
    );
}
