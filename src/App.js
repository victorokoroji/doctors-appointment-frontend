import './App.css';
// import RegisterForm from './components/Register';
import { Routes, Route } from 'react-router-dom';
import Logins from './components/logins';

const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/login" element={< Logins/>} />
         {/* <Route exact path="/register" component={RegisterForm} /> */}
      </Routes>
     
    </div>
  );
}

export default App;
