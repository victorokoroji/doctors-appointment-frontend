import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import DoctorsPage from './components/DoctorsPage/DoctorsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/doctors" element={<DoctorsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
