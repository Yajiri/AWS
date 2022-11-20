import { useState } from "react";
import { Link } from "react-router-dom";

const HomePage = (props) => {
    const [state1, setState1] = useState('test value');

    return (
        <>
            <h1>Home</h1>
            <p>OfficeDashboard</p>
            <Link to={'/layouts/officeDashboard'}>Go to Office</Link>

            <p>DentistDashbord</p>
            <p>UserDashboard</p>
        </>
    )
}

export default HomePage