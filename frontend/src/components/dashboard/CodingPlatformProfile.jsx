import { Navbar } from "../../Navbar";
//import Card from "react-bootstrap/Card";
import "./codingplatform.css";

import React from "react";
//import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit';

const CodingPlatformProfile = () => {
  return (
    <div id='team' className='text-center'>
      <div className="container">
        {/* <Navbar /> */}
        <h1 className="heading">Coding Profiles</h1>
        <div className="row">
          <div className="col-sm-4">
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

                  <h3>username</h3>
                  <h3>MaxRating</h3>
                  <h3>Total Question Solved </h3>
                </div>
                <div className="content">
                  
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
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

                  <h3>username</h3>
                  <h3>MaxRating</h3>
                  <h3>Total Question Solved </h3>
                </div>
                <div className="content">
                 
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
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

                  <h3>username</h3>
                  <h3>MaxRating</h3>
                  <h3>Total Question Solved </h3>
                </div>
                <div className="content">
                  
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
