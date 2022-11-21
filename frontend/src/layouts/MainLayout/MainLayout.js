import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";

const MainLayout = (props) => {
    const [state1, setState1] = useState('test value');
    

    return (
        <div>
            <h1>Navbar placeholder</h1>
            <div className={'container border-1'}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout