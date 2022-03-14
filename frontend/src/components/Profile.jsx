import React from "react";
import "./styles/profile.css";
import img from "./03.jpg";
const Profile = (props) => {

  console.log(props.user);
  return (
    <div id="services" className="text-center">
      <div className="container">
        {/* <div className="col-lg-12 col-md-12 col-sm-12"> */}
        <div className="col-lg-4 col-md-4 col-sm-12 divLeft">
          <img src={img} className="cardImg" alt="Nahi aayi" />
          <span className="caption"><h1> {props.user.fullName}</h1></span> 
          <button>Edit</button>
        
        </div>
        <div className = "userdetail">
          
       <span className="caption">Email : {props.user.email} </span>
       <span className="caption"> Rating : 1600</span>
       <span className="caption">Linkedin : nareshjsnds</span>
       <span className="caption"> Github : nareshjsnds</span>
       <span className="caption"> Branch : CSE</span>
        
        </div>
        
        {/* </div> */}
       
      </div>
    </div>
  );
};

export default Profile;
