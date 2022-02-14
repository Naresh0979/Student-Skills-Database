import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import Login from './components/login/login';

import Dashboard from './components/dashboard';

import Home from './components/home';



export default function AppRouter() {
  return (
    <Router>
    <Routes>
    <Route path="/"  element={<Home/>}></Route>
        <Route path="/signup"  element={<Login/>}></Route>
        <Route path="/dashboard"  element={<Dashboard/>}></Route>
        {/* <AuthenticatedRoute
            path="/dashboard"
            isAuthenticated={this.props.username.trim().length > 0}
            element={Dashboard}
            redirectTo={"/"}>
        </AuthenticatedRoute> */}
    </Routes>
</Router>

  )
}

