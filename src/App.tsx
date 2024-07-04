import styles from "./App.module.css";
import { Outlet } from "react-router-dom";
// import Nav from "./components/Nav";

function App() {
    return (
        <div className={styles.appContainer}>
            <div className={styles.container}>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default App;
