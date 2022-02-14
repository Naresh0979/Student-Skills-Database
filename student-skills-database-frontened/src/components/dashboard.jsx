

import React from 'react'
import {useLocation} from 'react-router-dom';

export default function Dashboard(props) {

    const location = useLocation();

    
    
  return (
    <div>Welcome {location.state.fullName}</div> 
  )
}
