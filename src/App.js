import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from './components/Login';
import FriendList from './components/FriendList';
import AddFriends from './components/AddFriends';
import Logout from './components/Logout';

function App() {
  return (
  <Router>
    <div className="App">
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to='/friends'>FRIEND LIST</Link>
        </li>
        <li>
          <Link to='/friends/add' >ADD FRIEND</Link>
        </li>
        <li>
          <Link to='/logout'>Log out</Link>
        </li>
      </ul>
      <Switch>
        <Route path='/logout' component={Logout} />
        <Route path='/friends/add' component={AddFriends} />
        <Route path='/friends' component={FriendList} />
        <Route path='/login' component={Login} />
        <Route path='/' component={Login}/>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
