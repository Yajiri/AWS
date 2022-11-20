import {
  Router,
  Route,
  Routes
} from 'react-router-dom';
import HomePage from './layouts/HomePage';
import OfficeDashboard from './layouts/OfficeDashboard';
import UserDashboard from './layouts/UserDashboard';
import DentistDashbord from './layouts/DentistDashboard';
import MainLayout from './layouts/MainLayout';


import './assets/scss/App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>      
          <Route element={<MainLayout />}>
            <Route path='/' element={<HomePage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
