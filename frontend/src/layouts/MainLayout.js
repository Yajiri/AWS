import { useState } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = (props) => {
    const [state1, setState1] = useState('test value');
    

    return (
        <div>
            <h1>Nav</h1>
            <Outlet />
        </div>
    )
}

export default MainLayout