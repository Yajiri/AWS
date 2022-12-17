import { 
  BrowserRouter as Router,
  Routes, 
  Route, 
  useLocation 
} from "react-router";


import logo from './assets/images/logo.svg';
import { AnimatePresence } from "framer-motion";
import Navbar from './components/Navbar/index';

import Home from './pages/home/Home';
import Appointments from './pages/appointments/Appointments';
import Profile from './pages/profile/Profile';
import HomePage from './layouts/HomePage';
import OfficeDashboard from './layouts/OfficeDashboard';
import PatientDashboard from './layouts/Patient/PatientDashboard';
import DentistDashboard from './layouts/Dentist/DentistDashboard';
import MainLayout from './layouts/MainLayout/MainLayout';
import Register from './layouts/Register';
import NotFound from './layouts/NotFound';


import './assets/scss/App.css';

function App() {

    const location = useLocation();
    return <>
    {}
    <AnimatePresence exitBeforeEnter>
    <logo> </logo>
    <Routes location={location} key ={location.pathname}>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/appointments" element={<Appointments />}/>
      <Route exact path="/profile" element={<Profile />}/>
      <Route path='/' element={<HomePage />} />
      <Route path='/register' element={<Register />} />
      <Route path='/office-dashboard' element={<OfficeDashboard />} />
      <Route path='/patient-dashboard' element={<PatientDashboard />} />
      <Route path='/dentist-dashboard' element={<DentistDashboard />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </AnimatePresence>
    
    </>
}

export default App
