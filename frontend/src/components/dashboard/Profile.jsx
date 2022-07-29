import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/profile.css";
import { useState, useEffect } from "react";
import axios from "axios";
const Profile = (props) => {
  let navigate = useNavigate();
  let location = useLocation();
  const [navBtnClicked, setNavBtnClicked] = useState(false);
  const emailId = props.email || location.state.email;
  const [name, setName] = useState();
  const [bio, setBio] = useState();
  const [skills, setSkills] = useState();
  const [worklink, setWorklink] = useState();
  const [rollno, setRollno] = useState();
  const [mobno, setMobno] = useState();
  const [totalProjects, settotalProjects] = useState(0);
  const [totalExpereince, settotalExpereince] = useState(0);
  const [doubtsSolved, setDoubtsSolved] = useState(0);
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .post("http://localhost:2000/student/getStudentData", {
        email: emailId,
      })
      .then((response) => {
        // console.log(response);
        // console.log(typeof(response.data._id));
        setName(response.data.name);
        setBio(response.data.bio);
        setSkills(response.data.skills);
        setWorklink(response.data.linkList);
        settotalProjects(response.data.projectList.length);
        settotalExpereince(response.data.experienceList.length);
        setRollno(response.data.rollNumber);
        setMobno(response.data.mobileNumber);
        setDoubtsSolved(response.data.doubtSolved);
      });
  }, [emailId]);

  return (
    <div id="profileContainer">
      <div className="container">
        <div className="emp-profile">
          <form method="post">
            <div className="row">
              <div className="col-md-4">
                <div className="profile-img">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                    alt=""
                  />
                  {/* <div className="file btn btn-lg btn-primary">
                    Change Photo
                    <input type="file" name="file" />
                  </div> */}
                </div>
              </div>
              <div className="col-md-6">
                <div className="profile-head">
                  <h5>{name}</h5>
                  <h6>{bio}</h6>
                  <p className="proile-rating">
                    RANKINGS : <span>8/10</span>
                  </p>
                  <ul key="003" className="nav nav-pills" id="myTab" role="tablist">
                    <li key="001" className="nav-item">
                      <a
                        key="004"
                        className= {navBtnClicked ? "nav-link default-active-nav" : "nav-link active-default-pill default-active-nav" }
                        id="home-tab" 
                        data-toggle="tab"
                        onClick={() => setNavBtnClicked(true)}
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                        
                      >
                        About
                      </a>
                    </li>
                    <li key="002" className="nav-item">
                      <a
                        key="005"
                        onClick={() => setNavBtnClicked(true)}
                        className="nav-link "
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Timeline
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2">
                <form action="/EditProfile">
                  <input
                    onClick={() => {
                      navigate("/editProfile", { state: emailId });
                    }}
                    type="submit"
                    className="profile-edit-btn"
                    name="btnAddMore"
                    value="EditProfile"
                  />
                </form>

                <form action="/DSAPractice">
                  <input
                    type="submit"
                    className="profile-edit-btn"
                    //  name="btnAddMore"
                    value="DSAPractice"
                  />
                </form>

                <form action="/DailyProblems">
                  <input
                    type="submit"
                    className="profile-edit-btn"
                    //  name="btnAddMore"
                    value="Daily Problem"
                  />
                </form>

                <form action="/ContestCalender">
                  <input
                    type="submit"
                    className="profile-edit-btn"
                    //  name="btnAddMore"
                    value="Calender"
                  />
                </form>
                {/* <form action="/CodingPlatformProfile">
                  <input
                    type="submit"
                    className="profile-edit-btn"
                    name="btnAddMore"
                    value="CodingProfiles"
                  />
                </form> */}
                <form action="/DoubtBlogs">
                  <input
                    onClick={() => {
                      navigate("/DoubtBlogs", { state: location.state });
                    }}
                    type="submit"
                    className="profile-edit-btn"
                    name="btnAddMore"
                    value="Doubt Blogs"
                  />
                </form>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="profile-work">
                  <p>WORK LINK</p>
                  {worklink ? (
                    worklink.map((worklink, index) => (
                      <>
                        <a href={worklink.link} key={index + "1"}>
                          {worklink.linkName}
                        </a>
                        <br key={index + "2"}  />
                      </>
                    ))
                  ) : (
                    <>Not Mentioned</>
                  )}
                  <p>SKILLS</p>
                  {/* <a href="">Web Designer</a>
                  <br />
                  <a href="">Web Developer</a>
                  <br />
                  <a href="">WordPress</a>
                  <br />
                  <a href="">WooCommerce</a>
                  <br />
                  <a href="">PHP, .Net</a> */}
                  {skills ? (
                    skills.map((skill, index) => (
                      <>
                        <a key={index+'1'}>
                          {skill}
                        </a>
                        <br key={index+'2'}/>
                      </>
                    ))
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="col-md-8">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div
                    className="tab-pane active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>Roll Number</label>
                      </div>
                      <div className="col-md-6">
                        <p>{rollno}</p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <label>Email</label>
                      </div>
                      <div className="col-md-6">
                        <p>{emailId}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Phone</label>
                      </div>
                      <div className="col-md-6">
                        <p>{mobno}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Profession</label>
                      </div>
                      <div className="col-md-6">
                        <p>{bio}</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>Codeforces Rating</label>
                      </div>
                      <div className="col-md-6">
                        <p>NA</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>CodeChef Rating</label>
                      </div>
                      <div className="col-md-6">
                        <p>NA</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Questions Solved</label>
                      </div>
                      <div className="col-md-6">
                        <p>230</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Doubts Solved</label>
                      </div>
                      <div className="col-md-6">
                        <p>{doubtsSolved}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Total Projects</label>
                      </div>
                      <div className="col-md-6">
                        <p>{totalProjects}</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Total Experience</label>
                      </div>
                      <div className="col-md-6">
                        <p>{totalExpereince}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
