import Sidebar from "../sidebars/Sidebar";
import React, { useEffect, useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import AddIcon from "@material-ui/icons/Add";
import Education from "../UserDetails/Education";
import Experience from "../UserDetails/Experience";
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons' 

// library.add(faFacebookF); 
import "./editProfile.css";
const EditProfile = () => {
    const [info, setInfo] = useState({
      fname:"",
      lname:"",
      email: "",
      mobile: "",
      country: "",
      state: "",
      district: "",
      pincode: "",
      bio: "",
      currentAdd: "",
      permanentAdd: "",
      linkedin: "",
      youtube: "",
      twitter: "",
      website: ""
    });
  
    // For Education List
    const [educationCount, setEducationCount] = useState(0);
    const [educationList, setEducationList] = useState([
      { 
        index: educationCount,
        instituteName: "", 
        startDate: "", 
        endDate: "" 
      },
    ]);
  
    //For Experience List
    const [experienceCount, setExperienceCount] = useState(0);
    const [experienceList, setExperienceList] = useState([
      {
        index: experienceCount,
        organizationName: "", 
        startDate: "",
        endDate: "",
      },
    ]); 
    
  
    const addNewEducation = () => { 
      const newEducation = {
        index: educationCount + 1,
        instituteName: "",
        startDate: "",
        endDate: "",
      };
      setEducationCount(educationCount + 1);
      setEducationList([...educationList, newEducation]);
    };
  
    const handleEducationChange = (index,event) => {
      const educationTemporay = [...educationList];
      educationTemporay[index][event.target.name] = event.target.value;
      setEducationList(educationTemporay);
    }
  
    const deleteEducation = (index) => {
      const newEducationList = educationList.filter((s) => index !== s.index);
      setEducationList(newEducationList);
    };
  
    const addNewExperience = () => {
      const newExperience = {
        index: experienceCount + 1,
        organizationName: "",
        startDate: "",
        endDate: "",
      };
      setExperienceCount(experienceCount + 1);
      setExperienceList([...experienceList, newExperience]);
    };
  
    const handleExperienceChange = (index,event) => {
      const experienceTemporary = [...experienceList];
      experienceTemporary[index][event.target.name] = event.target.value;
      setExperienceList(experienceTemporary);
    }
  
    const deleteExperience = (index) => {
      const newExperienceList = experienceList.filter((s) => index !== s.index);
      setExperienceList(newExperienceList);
    };
  
    const handleChange = (e) => {
      setInfo({ ...info, [e.target.name]: e.target.value });
    };
    return (
      <div className="edu-personal-info">
        {/* <ToastContainer /> */}
        <div className="details-container">
          <form>
            <div className="details-container-personal-info">
              <h3>Personal Info</h3>
              <div className="flex-div-left-right">
                <div className="flex-div-left">
                  <input
                    className="e-p-input"
                    placeholder="First Name*"
                    name="fname"
                    value={info?.fname}
                    onChange={handleChange}
                  />
                  <input
                    className="e-p-input"
                    placeholder="Email id*"
                    name="email"
                    value={info?.email}
                    onChange={handleChange}
                  />
                  <div className="small-left-right">
                    <div className="small-left">
                      {/* <select
                          class="selectpicker countrypicker"
                          data-flag="true"
                        ></select> */}
  
                      <input
                        className="e-p-input"
                        placeholder="Country*"
                        name="country"
                        value={info?.country}
                        onChange={handleChange}
                      />
                      <input
                        className="e-p-input"
                        id="city"
                        placeholder="City*"
                        name="district"
                        value={info?.district}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="small-right">
                      <input
                        className="e-p-input"
                        name="state"
                        placeholder="State*"
                        value={info?.state}
                        onChange={handleChange}
                      />
                      <input
                        className="e-p-input"
                        name="pincode"
                        placeholder="Pincode*"
                        value={info?.pincode}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
  
                <div className="flex-div-right">
                  <input
                    className="e-p-input"
                    placeholder="Last Name*"
                    name="lname"
                    value={info?.lname}
                    onChange={handleChange}
                  />
                  <input
                    className="e-p-input"
                    placeholder="Mobile no.*"
                    type="tel"
                    name="mobile"
                    value={info?.mobile}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <input
                className="e-p-input"
                name="bio"
                placeholder="Bio*"
                value={info?.bio}
                onChange={handleChange}
              />
              <input
                className="e-p-input"
                placeholder="Your current address*"
                name="currentAdd"
                value={info?.currentAdd}
                onChange={handleChange}
              />
              <input
                className="e-p-input"
                placeholder="Your permanent address*"
                name="permanentAdd"
                value={info?.permanentAdd}
                onChange={handleChange}
              />
  
              <div className="flex-div-left-right">
                <div className="flex-div-left">
                  <div className="social-container">
                    {/* <img
                      className="social-icon"
                      alt=""
                      src="/images/linkedIn.png"
                    /> */}
                    <input
                      className="e-p-input"
                      placeholder="Your LinkedIn profile"
                      name="linkedin"
                      value={info?.linkedin}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="social-container">
                  {/* <FontAwesomeIcon icon="fa-brands fa-twitter" /> */}
                    {/* <img
                      className="social-icon"
                      alt=""
                      src="/images/twitter.png"
                    /> */}
                    <input
                      className="e-p-input"
                      placeholder="Your Twitter profile"
                      name="twitter"
                      value={info?.twitter}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex-div-right">
                  <div className="social-container">
                    {/* <img
                      className="social-icon"
                      alt=""
                      src="/images/youtube.png"
                    /> */}
                    <input
                      className="e-p-input"
                      placeholder="Your youtube channel"
                      name="youtube"
                      value={info?.youtube}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="social-container">
                    {/* <img className="social-icon" alt="" src="/images/web.png" /> */}
                    <input
                      className="e-p-input"
                      placeholder="Your website"
                      name="website"
                      value={info?.website}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
  
            <div className="details-container-education mt-4">
              <div className="ed-container">
                <h3>Education</h3>
                <a onClick={addNewEducation}>
                    ADD
                  {/* <AddIcon /> */}
                </a>
              </div>
              <div className="ed-container">
                <div className="table">
                    <Education
                      status={true}
                      update={handleEducationChange}
                      delete={deleteEducation}
                      educationList={educationList}
                    />
                </div>
              </div>
            </div>
  
            <div className="details-container-education mt-4">
              <div className="ed-container">
                <h3>Experience</h3>
                <a onClick={addNewExperience}>
                    ADD
                  {/* <AddIcon /> */}
                </a>
              </div>
              <div className="ed-container">
                <div className="table">
                    <Experience
                      status={true}
                      update={handleExperienceChange}
                      delete={deleteExperience}
                      experienceList={experienceList}
                    />
                </div>
              </div>
            </div>          
          
  
            <div className="details-container-button">
              <button type="submit" className="btn ed-btn btn-primary">
                Submit
              </button>
            </div>
  
            </form>
        </div>
      </div>
    );
}

 
export default EditProfile;


