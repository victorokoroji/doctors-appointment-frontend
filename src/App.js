import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './components/Register';
import LoginForm from './components/login';
import Home from './components/Home';
import DoctorsPage from './components/DoctorsPage/DoctorsPage';
import Doctor from './components/DoctorsPage/Doctor';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/doctors/:id" element={<Doctor />} />
      </Routes>
    </Router>
  );
}

export default App;
