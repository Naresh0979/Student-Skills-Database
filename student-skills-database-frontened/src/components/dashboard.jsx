

import React from 'react'
import {useLocation} from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

export default function Dashboard(props) {
    axios.defaults.withCredentials = true;
    const location = useLocation();
    
    return (
    <div>Welcome {location.state.fullName}</div> 
    )
}
