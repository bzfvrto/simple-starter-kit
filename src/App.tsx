import "./App.css";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
    return (
        <div className="container">
            <Nav />
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}

export default App;
