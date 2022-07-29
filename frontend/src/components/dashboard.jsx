import React from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { Navbar } from "../Navbar";
import { useState } from "react";
import { DashboardNavigation } from "./DashboardNavigation";

import Profile from "./dashboard/Profile";
import EduExpPresenter from "./EduExpPresenter";
import CodingPlatformProfile from "./dashboard/CodingPlatformProfile";

import ProjectPresenter from "./ProjectPresenter";
import SmoothScroll from "smooth-scroll";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

export default function Dashboard(props) {
  axios.defaults.withCredentials = true;

  const params = useParams();
  const location = useLocation();

  const owner = props.owner;
  let emailId = location.state.email;
  // const [emailId, setEmailId] = useState(location.state.email);
  if (owner === false) emailId = params.profileEmail;

  return (
    <div>
      <Profile email={emailId} owner={owner} />
      <EduExpPresenter email={emailId} owner={owner} />
      <ProjectPresenter
        email={emailId}
        reviewer={location.state.email}
        owner={owner}
      />
      <CodingPlatformProfile email={emailId} owner={owner} />
      {owner ? (
        <DashboardNavigation username={location.state.fullName} owner={owner} />
      ) : (
        <Navbar />
      )}
    </div>
  );
}
