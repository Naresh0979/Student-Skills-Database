import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Project from "./UserDetails/Project";
const ProjectPresenter = (props) => {
  let navigate = useNavigate();
  let location = useLocation();
  axios.defaults.withCredentials = true;
  const [projectList, setProjectList] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:2000/student/getStudentData", {
        email: location.state.email,
      })
      .then((response) => {
        //   console.log(response);
        console.log(response.data);
        setProjectList(response.data.projectList);
      });
  }, [location.state.email]);
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Project Works</h2>
          <div className="ed-container">
            <div className="table">
              <Project status={false} projectList={projectList} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPresenter;
