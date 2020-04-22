import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import Login from './components/Login'
import Friends from './components/Friends'
import PrivateRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Link to="/login">Login</Link><br/>
      <PrivateRoute exact path="/friends" component={Friends}/>
      <Route path="/login" component={ Login } />
    </div>
  );
}

export default App;
