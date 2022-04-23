import { Navbar } from "../../Navbar";
//import Card from "react-bootstrap/Card";
import "./codingplatform.css";
import RatingMeter from "../animations/RatingMeter";
import React from "react";
//import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';
import useState from 'react';
const CodingPlatformProfile = () => {
  // let [username,setuserName]=useState();
  return (
    <div id="team" className="text-center">
      <div className="container">
        {/* <Navbar /> */}
        {/* <h1 className="heading">Coding Profiles</h1> */}
        <div className='section-title'>
          <h2>Coding Profiles</h2>
          
        </div>
        <div className="row">
          <div className="col-sm-4 box" >
            <div className="card">
              {/* <div className="image">
                <img src="http://loremflickr.com/320/150" />
              </div> */}
              <div className="card-inner">
                <div className="header">
                  <img
                    src={require("../../assets/images/codeforces.jpg")}
                    alt="codeforces"
                  />
                  {/* <h2>Codeforces</h2>   */}
                 
                <div className="content">
              
                  <div className="content2">
                    <span >username      - <b>naresh_2000</b><br></br></span>
                    <span >Max Rating-<b>1200</b> <br></br></span>
                    <span >Question Solved -<b>200</b>  </span>
                  </div>{" "}
                  <div className="ratingmeter">
                    <RatingMeter />
                    <span className="details">Rating-<b>1200</b></span>
                  </div>{" "}
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 box" >
            <div className="card">
              {/* <div className="image">
                <img src="http://loremflickr.com/320/150" />
              </div> */}
              <div className="card-inner">
                <div className="header">
                  <img
                    src={require("../../assets/images/codeforces.jpg")}
                    alt="codeforces"
                  />
                  {/* <h2>Codeforces</h2>   */}
                 
                <div className="content">
              
                  <div className="content2">
                    <span >username      - <b>naresh_2000</b><br></br></span>
                    <span >Max Rating-<b>1200</b> <br></br></span>
                    <span >Question Solved -<b>200</b>  </span>
                  </div>{" "}
                  <div className="ratingmeter">
                    <RatingMeter />
                    <span className="details">Rating-<b>1200</b></span>
                  </div>{" "}
                </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 box" >
            <div className="card">
              {/* <div className="image">
                <img src="http://loremflickr.com/320/150" />
              </div> */}
              <div className="card-inner">
                <div className="header">
                  <img
                    src={require("../../assets/images/codeforces.jpg")}
                    alt="codeforces"
                  />
                  {/* <h2>Codeforces</h2>   */}
                 
                <div className="content">
              
                  <div className="content2">
                    <span >username      - <b>naresh_2000</b><br></br></span>
                    <span >Max Rating-<b>1200</b> <br></br></span>
                    <span >Question Solved -<b>200</b>  </span>
                  </div>{" "}
                  <div className="ratingmeter">
                    <RatingMeter />
                    <span className="details">Rating-<b>1200</b></span>
                  </div>{" "}
                </div>
                </div>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default CodingPlatformProfile;
