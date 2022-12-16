import { Routes, Route, useLocation } from "react-router";


import logo from './assets/images/logo.svg';
import { AnimatePresence } from "framer-motion";
import Navbar from './components/Navbar/index';

import Home from './pages/home/Home';
import Appointments from './pages/appointments/Appointments';
import Profile from './pages/profile/Profile';


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
    </Routes>
    </AnimatePresence>
    
    </>
}

export default App
