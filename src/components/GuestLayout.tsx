import { Outlet } from "react-router-dom";
// import App from "../App";
import Nav from "./Nav";
// import RootLayout from "./RootLayout";

export default function GuestLayout() {
    return (
        <div style={{ width: "85%", margin: "auto" }}>
            {/* <h4>Guest</h4> */}
            <Nav />
            <div className="container">
                <div className="content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
