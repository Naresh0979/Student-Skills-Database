import Sidebar from "../sidebars/Sidebar";
import React, { useEffect, useState } from "react";
import Education from "../UserDetails/Education";
import Experience from "../UserDetails/Experience";
import { Navbar } from "../../Navbar";
import "./editProfile.css";
import Project from "../UserDetails/Project";
import Links from "../UserDetails/Links";
import axios from "axios";
import { useLocation } from "react-router-dom";
const EditProfile = () => {
  const location = useLocation();
  // console.log(location);
  const [info, setInfo] = useState({
    name: "",
    rollNumber: "",
    email: location.state || "",
    mobileNumber: "",
    country: "",
    state: "",
    district: "",
    pincode: "",
    bio: "",
    address: "",
  });

  //Skills
  // document
  //   .getElementById("skills-add")
  //   .addEventListener("keypress", function (event) {
  //     if (event.key == "Enter") {
  //       event.preventDefault();
  //     }
  //   });
  const [skills, setSkills] = useState([]);
  function handleKeyDown(e) {
    if(e.key === "Enter")
      e.preventDefault();
    if (e.key !== "Enter") return false;
    const value = e.target.value;
    if (!value.trim()) return false;
    setSkills([...skills, value]);
    e.target.value = "";
    return false;
  }
  function removeSkills(index) {
    setSkills(skills.filter((skills, idx) => idx !== index));
  }
  // Links
  const [linkCount, setLinkCount] = useState(0);
  const [linkList, setLinkList] = useState([
    {
      index: linkCount,
      linkName: "",
      link: "",
    },
  ]);

  const addNewLink = () => {
    const newLink = {
      index: linkCount + 1,
      linkName: "",
      link: "",
    };
    setLinkCount(linkCount + 1);
    setLinkList([...linkList, newLink]);
  };

  const handleLinkChange = (index, event) => {
    const linkTemporay = [...linkList];
    linkTemporay[index][event.target.name] = event.target.value;
    setLinkList(linkTemporay);
  };

  const deleteLink = (index) => {
    const newLinkList = linkList.filter((s) => index !== s.index);
    setLinkList(newLinkList);
  };

  // For Education List
  const [educationCount, setEducationCount] = useState(0);
  const [educationList, setEducationList] = useState([
    {
      index: educationCount,
      instituteName: "",
      degreeName: "",
      startDate: "2021-04",
      endDate: "2022-06",
      grade: "",
    },
  ]);

  const addNewEducation = () => {
    const newEducation = {
      index: educationCount + 1,
      instituteName: "",
      degreeName: "",
      startDate: "2021-04",
      endDate: "2022-06",
      grade: "",
    };
    setEducationCount(educationCount + 1);
    setEducationList([...educationList, newEducation]);
  };

  const handleEducationChange = (index, event) => {
    const educationTemporay = [...educationList];
    educationTemporay[index][event.target.name] = event.target.value;
    setEducationList(educationTemporay);
  };

  const deleteEducation = (index) => {
    const newEducationList = educationList.filter((s) => index !== s.index);
    setEducationList(newEducationList);
  };

  //For Experience List
  const [experienceCount, setExperienceCount] = useState(0);
  const [experienceList, setExperienceList] = useState([
    {
      index: experienceCount,
      organizationName: "",
      startDate: "2021-04",
      endDate: "2022-06",
      role: "",
      location: "",
      description: "",
    },
  ]);

  const addNewExperience = () => {
    const newExperience = {
      index: experienceCount + 1,
      organizationName: "",
      startDate: "2021-04",
      endDate: "2022-06",
      role: "",
      location: "",
      description: "",
    };
    setExperienceCount(experienceCount + 1);
    setExperienceList([...experienceList, newExperience]);
  };

  const handleExperienceChange = (index, event) => {
    const experienceTemporary = [...experienceList];
    experienceTemporary[index][event.target.name] = event.target.value;
    setExperienceList(experienceTemporary);
  };

  const deleteExperience = (index) => {
    const newExperienceList = experienceList.filter((s) => index !== s.index);
    setExperienceList(newExperienceList);
  };

  // For Project List

  const [projectCount, setProjectCount] = useState(0);
  const [projectList, setProjectList] = useState([
    {
      index: projectCount,
      projectName: "",
      startDate: "2021-04",
      endDate: "2022-06",
      link: "",
      description: "",
    },
  ]);

  const addNewProject = () => {
    const newProject = {
      index: projectCount + 1,
      projectName: "",
      startDate: "2021-04",
      endDate: "2022-06",
      link: "",
      description: "",
    };
    setProjectCount(projectCount + 1);
    setProjectList([...projectList, newProject]);
  };

  const handleProjectChange = (index, event) => {
    const ProjectTemporary = [...projectList];
    ProjectTemporary[index][event.target.name] = event.target.value;
    setProjectList(ProjectTemporary);
  };

  const deleteProject = (index) => {
    const newProjectList = projectList.filter((s) => index !== s.index);
    setProjectList(newProjectList);
  };

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    axios
      .post("http://localhost:2000/student/getStudentData", {
        email: location.state,
      })
      .then(({ data }) => {
        // console.log("Inside DATA ",data);
        let temporaryInfo = {
          name: data.name,
          rollNumber: data.rollNumber,
          email: location.state,
          mobileNumber: data.mobileNumber,
          country: data.country,
          state: data.state,
          district: data.district,
          pincode: data.pincode,
          bio: data.bio,
          address: data.address,
        };
        setInfo(temporaryInfo);
        setEducationList(data.educationList);
        setEducationCount(data.educationList.length - 1);
        setExperienceList(data.experienceList);
        setExperienceCount(data.experienceList.length - 1);
        setProjectList(data.projectList);
        setProjectCount(data.projectList.length - 1);
        setLinkList(data.linkList);
        setLinkCount(data.linkList.length - 1);
        setSkills(data.skills);
      });
  }, []);

  const saveDetails = async (e) => {
    e.preventDefault();
    console.log("KEY" , e.key);
    if (e.key === "Enter") return;
    try {
      console.log("INFO", info);
      let fullDetails = { ...info };
      fullDetails["skills"] = JSON.stringify(skills);
      fullDetails["linkList"] = JSON.stringify(linkList);
      fullDetails["educationList"] = JSON.stringify(educationList);
      fullDetails["experienceList"] = JSON.stringify(experienceList);
      fullDetails["projectList"] = JSON.stringify(projectList);
      const responce = await axios.post(
        "http://localhost:2000/student/editProfile",
        fullDetails
      );
      if (responce) alert("done");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="background-body-for-editProfile">
      <Navbar />
      <div className="edu-personal-info">
        {/* <ToastContainer /> */}
        <div className="details-container">
          <form onSubmit={saveDetails}>
            <div className="details-container-personal-info">
              <h3 className="text-center">Personal Information</h3>
              <hr className="line-practice-head"></hr>
              <div className="flex-div-left-right">
                <div className="flex-div-left">
                  <input
                    className="e-p-input"
                    placeholder="Full Name*"
                    name="name"
                    value={info?.name}
                    onChange={handleChange}
                  />
                  <input
                    className="e-p-input"
                    placeholder="Email id*"
                    name="email"
                    disabled
                    value={info?.email}
                  />
                  <div className="small-left-right">
                    <input
                      className="e-p-input"
                      placeholder="Country*"
                      name="country"
                      value={info?.country}
                      onChange={handleChange}
                    />
                    <input
                      className="e-p-input"
                      name="state"
                      placeholder="State*"
                      value={info?.state}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="flex-div-right">
                  <input
                    className="e-p-input"
                    placeholder="Roll Number*"
                    name="rollNumber"
                    value={info?.rollNumber}
                    onChange={handleChange}
                  />
                  <input
                    className="e-p-input"
                    placeholder="Mobile no.*"
                    type="tel"
                    name="mobileNumber"
                    value={info?.mobileNumber}
                    onChange={handleChange}
                  />

                  <div className="small-left-right">
                    <input
                      className="e-p-input"
                      id="district"
                      placeholder="City*"
                      name="district"
                      value={info?.district}
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

              <input
                className="e-p-input"
                placeholder="Your Address"
                name="address"
                value={info?.address}
                onChange={handleChange}
              />
              <input
                className="e-p-input"
                name="bio"
                placeholder="Bio*"
                value={info?.bio}
                onChange={handleChange}
              />
              {/* <input
                className="e-p-input"
                placeholder="Your permanent address*"
                name="permanentAdd"
                value={info?.permanentAdd}
                onChange={handleChange}
              /> */}
            </div>
            <div className="skills-adder">
              <h3>Skills</h3>
              <div className="tags-input-container">
                {skills.map((skills, index) => (
                  <div className="tag-item" key={index} id={index}>
                    <span className="tags-text">{skills}</span>
                    <span
                      className="tags-close"
                      onClick={() => removeSkills(index)}
                    >
                      &times;
                    </span>
                  </div>
                ))}

                <input
                  type="text"
                  onKeyDown={handleKeyDown}
                  id="skills-add"
                  className="tags-input"
                  placeholder="Enter Skill"
                />
              </div>
            </div>

            <div className="details-container-education">
              <div className="ed-container">
                <h3>Website Links</h3>
                <button
                  type="button"
                  onClick={addNewLink}
                  className=" btn-success btn-adder"
                >
                  <i className="fa fa-plus" />
                </button>
              </div>
              <div className="ed-container">
                <div className="table">
                  <Links
                    status={true}
                    update={handleLinkChange}
                    delete={deleteLink}
                    linkList={linkList}
                  />
                </div>
              </div>
            </div>

            <div className="details-container-education mt-4">
              <div className="ed-container">
                <h3>Education</h3>
                <button
                  type="button"
                  onClick={addNewEducation}
                  className=" btn-success btn-adder"
                >
                  <i className="fa fa-plus" />
                </button>
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
                <button
                  type="button"
                  onClick={addNewExperience}
                  className=" btn-success btn-adder"
                >
                  <i className="fa fa-plus" />
                </button>
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
            <div className="details-container-education mt-4">
              <div className="ed-container">
                <h3>Projects</h3>
                <button
                  type="button"
                  onClick={addNewProject}
                  className=" btn-success btn-adder"
                >
                  <i className="fa fa-plus" />
                </button>
              </div>
              <div className="ed-container">
                <div className="table">
                  <Project
                    status={true}
                    update={handleProjectChange}
                    delete={deleteProject}
                    projectList={projectList}
                  />
                </div>
              </div>
            </div>
            <div className="details-container-button">
              <button type="submit" className="btn ed-btn btn-primary">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
