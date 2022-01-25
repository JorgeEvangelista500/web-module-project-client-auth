import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
  <Router>
    <div className="App">
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to=''>FRIEND LIST</Link>
        </li>
        <li>
          <Link to='' >ADD FRIEND</Link>
        </li>
        <li>
          <Link to=''>Log out</Link>
        </li>
      </ul>
      <h1>Login</h1>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/' component={Login}/>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
