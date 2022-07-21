import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterForm from './components/Register';

import LoginForm from './components/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginForm />} />
        <Route path="signup" element={<RegisterForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
