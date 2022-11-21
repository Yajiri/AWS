import { useState } from "react";
import { Link } from "react-router-dom";

const HomePage = (props) => {
    const [state1, setState1] = useState('test value');

    return (
        <>
            <h1>Dentistimo Home</h1>
            <br/>
            <div>
                <ul>
                    <li><Link to={'/register'}>Sign up/in</Link></li>
                    <li><Link to={'/user-dashboard'}>User Dashboard</Link></li>
                    <li><Link to={'/dentist-dashboard'}>Dentist Dashboard</Link></li>
                    <li><Link to={'/office-dashboard'}>Office Dashboard</Link></li>
                </ul>
            </div>
           
               
        </>
    )
}

export default HomePage