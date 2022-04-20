import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import Login from './components/login/login';
// import EditProfile from './components/dashboard/EditProfile';
import Dashboard from './components/dashboard';
import EditProfile from './components/dashboard/EditProfile';
import DSAPractice from './components/dashboard/DSAPractice';
import ContestCalender from './components/dashboard/ContestCalender';
import Home from './components/home';
import CodingPlatformProfile from './components/dashboard/CodingPlatformProfile';



export default function AppRouter() {
  return (
    <Router>
    <Routes>
        <Route path="/"  element={<Home/>}></Route>
        <Route path="/signup"  element={<Login/>}></Route>
        <Route path="/dashboard"  element={<Dashboard/>}></Route>
        <Route path='/editProfile' element={<EditProfile/>}/>
        {/* <Route path="/EditProfile"  element={<EditProfile/>}></Route> */}
        <Route path="/DSAPractice"  element={<DSAPractice/>}></Route>
        <Route path="/ContestCalender"  element={<ContestCalender/>}></Route>
        <Route path="/CodingPlatformProfile"  element={<CodingPlatformProfile/>}></Route>
        
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

