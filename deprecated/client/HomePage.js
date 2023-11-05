import { Link } from "react-router-dom";

const HomePage = (props) => {
    return (
        <>
            <h1>Dentistimo Home</h1>
            <br/>
            <div>
                <ul>
                    <li><Link to={'/register'}>Sign up/in</Link></li>
                    <li><Link to={'/Patient-dashboard'}>Patient Dashboard</Link></li>
                    <li><Link to={'/dentist-dashboard'}>Dentist Dashboard</Link></li>
                    <li><Link to={'/office-dashboard'}>Office Dashboard</Link></li>
                </ul>
            </div>              
        </>
    )
}

export default HomePage