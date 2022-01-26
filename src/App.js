import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from './components/Login';
import FriendList from './components/FriendList';
import AddFriends from './components/AddFriends';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
  <Router>
    <div className="App">
      <h1>FRIEND DATABASE</h1>
      <header>      
          <Link className='links' to="/login">LOGIN</Link>          
          <Link className='links' to='/friends'>FRIEND LIST</Link>
          <Link className='links' to='/friends/add' >ADD FRIEND</Link>
          <Link className='links' to='/logout'>LOGOUT</Link>
      </header>
      <Switch>
        <Route path='/logout' component={Logout} />
        <PrivateRoute exact path='/friends/add' component={AddFriends} />
        <PrivateRoute exact path='/friends' component={FriendList} />
        <Route path='/login' component={Login} />
        <Route path='/' component={Login}/>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
