import './App.css';
import RegisterForm from './components/Register';
import { Switch, Route } from 'react-router-dom';
import LoginForm from './components/login';

function App() {
  return (
    <div>
      <Switch>
         <Route exact path="/login" component={LoginForm} />
         <Route exact path="/register" component={RegisterForm} />
      </Switch>
     
    </div>
  );
}

export default App;
