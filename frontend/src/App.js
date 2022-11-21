import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import HomePage from './layouts/HomePage';
import OfficeDashboard from './layouts/OfficeDashboard';
import UserDashboard from './layouts/UserDashboard';
import DentistDashboard from './layouts/DentistDashboard';
import MainLayout from './layouts/MainLayout/MainLayout';
import Register from './layouts/Register';

import './assets/scss/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>      
          <Route element={<MainLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/register' element={<Register />} />
            <Route path='/office-dashboard' element={<OfficeDashboard />} />
            <Route path='/user-dashboard' element={<UserDashboard />} />
            <Route path='/dentist-dashboard' element={<DentistDashboard />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
