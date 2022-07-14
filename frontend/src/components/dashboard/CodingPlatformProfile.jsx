// import { Navbar } from "../../Navbar";
//import Card from "react-bootstrap/Card";
import "./codingplatform.css";
import RatingMeter from "../animations/RatingMeter";
import React from "react";
import axios from "axios";
// import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
const CodingPlatformProfile = (props) => {
  const [codeforces, setCodeforces] = useState([]);
  const [codechef, setCodechef] = useState([]);
  const [leetcode, setLeetcode] = useState([]);
  const [codeforcesHandle, setCodeforcesHandle] = useState("loading");
  const [codechefHandle, setCodechefHandle] = useState("loading");
  const [leetcodeHandle, setLeetcodeHandle] = useState("loading");
 
  useEffect(() => {
    axios
      .post("http://localhost:2000/student/getStudentData", {
        email: props.email,
      })
      .then(({ data }) => {
        // console.log(data);
        setCodeforcesHandle(data.codeforces);
      });
      axios
      .post("http://localhost:2000/student/getStudentData", {
        email: props.email,
      })
      .then(({ data }) => {
        //  console.log(data.leetcode);
        setLeetcodeHandle(data.leetcode);
      });
      axios
      .post("http://localhost:2000/student/getStudentData", {
        email: props.email,
      })
      .then(({ data }) => {
        // console.log(data);
        setCodechefHandle(data.codechef);
      });
      
  }, []);
  useEffect(() => {
    if(codeforcesHandle !== "loading" ){
      axios
      .post("http://localhost:2000/contest/CodeForces/getUserData", {
        userHandle: codeforcesHandle,
      })
      .then((details) => {
        // console.log(details);
        setCodeforces(details.data);
      });
    }
    if(codechefHandle !== "loading"){
      axios
      .post("http://localhost:2000/contest/Codechef/getUserData", {
        userHandle: codechefHandle,
      })
      .then((details) => {
        // console.log(details);
        setCodechef(details.data);
      });
    }
    if(leetcodeHandle !== "loading" &&leetcodeHandle !== ""){
      axios
      .post("http://localhost:2000/contest/Leetcode/getUserData", {
        userHandle: leetcodeHandle,
      })
      .then((details) => {
        // console.log(details);
        setLeetcode(details.data);
      });
    }
  }, [codeforcesHandle,codechefHandle,leetcodeHandle]);
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Coding Profiles</h2>
        </div>
        <div className="row">
          <div className="col-sm-4 box">
            <div className="card">
              <div className="card-inner">
                <div className="header">
                  <img
                    src={require("../../assets/images/codeforces.jpg")}
                    alt="codeforces"
                  />

                  <div className="content">
                    {codeforcesHandle === "loading"  ? (
                      <p>Loading</p>
                    ) : codeforces.length !== 0 ? (
                      <>
                        <div className="content2">
                          <span>
                            username - <b>{codeforces[3]}</b>
                            <br></br>
                          </span>
                          <span>
                            Max Rating-<b>{codeforces[1]}</b> <br></br>
                          </span>
                          <span>
                            Question Solved -<b>{codeforces[0]}</b>
                          </span>
                        </div>
                        <div className="ratingmeter">
                          <RatingMeter />
                          <span className="details">
                            Rating-<b>{codeforces[2]}</b>
                          </span>
                        </div>
                      </>
                    ) : (
                      <span> codeforces handle not available</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 box">
            <div className="card">
              {/* <div className="image">
                <img src="http://loremflickr.com/320/150" />
              </div> */}
              <div className="card-inner">
                <div className="header">
                  <img className="Img"
                    src={require("../../assets/images/Codechef.png")}
                    alt="codeforces"
                  />
                  {/* <h2>Codeforces</h2>   */}

                  <div className="content">
                    {codechefHandle === "loading"  ? (
                      <p>Loading</p>
                    ) : codechef.length !== 0 ? (
                      <>
                        <div className="content2">
                          <span>
                            username - <b>{codechef[2]}</b>
                            <br></br>
                          </span>
                          <span>
                            Max Rating-<b>{codechef[0]}</b> <br></br>
                          </span>
                          <span>
                            Global Rank -<b>{codechef[3]}</b>
                          </span>
                        </div>
                        <div className="ratingmeter">
                          <RatingMeter />
                          <span className="details">
                            Rating-<b>{codechef[1]}</b>
                          </span>
                        </div>
                      </>
                    ) : (
                      <span> codechef handle not available</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 box">
            <div className="card">
              {/* <div className="image">
                <img src="http://loremflickr.com/320/150" />
              </div> */}
              <div className="card-inner">
                <div className="header">
                  <img className="Img"
                    src={require("../../assets/images/leetcode.png")}
                    alt="codeforces"
                  />
                  {/* <h2>Codeforces</h2>   */}

                  <div className="content">
                    {leetcodeHandle === "loading"  ? (
                      <p>Loading</p>
                    ) : codechef.length !== 0 ? (
                      <>
                        <div className="content2">
                          <span>
                            username - <b>{leetcodeHandle}</b>
                            <br></br>
                          </span>
                          <span>
                             Ranking-<b>{leetcode[2]}</b> <br></br>
                          </span>
                          <span>
                            Question Solved -<b>{leetcode[0]}</b>
                          </span>
                        </div>
                        <div className="ratingmeter">
                          <RatingMeter />
                          <span className="details">
                            Acceptance-<b>{leetcode[1]}</b>
                          </span>
                        </div>
                      </>
                    ) : (
                      <span> Leetcode handle not available</span>
                    )}
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
