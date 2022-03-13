import React from "react";
import "./styles/profile.css";
import img from "./03.jpg";
const Profile = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="col-md-6 col-lg-6 col-sm-12">
          <img src={img} className="cardImg" alt="Nahi aayi" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
