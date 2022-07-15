import React from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import { useState, useEffect } from "react";
import { DashboardNavigation } from "./DashboardNavigation";
// import { Header } from "./header";
//import { Features } from "./components/features";
import { About } from "./about";
import { Services } from "./services";
import Profile  from "./dashboard/Profile";
import EduExpPresenter from "./EduExpPresenter";
import  CodingPlatformProfile  from "./dashboard/CodingPlatformProfile";
import { Contact } from "./contact";
import JsonData from "../data/data.json";
import RatingMeter from "./animations/RatingMeter";

import ProjectPresenter from "./ProjectPresenter";
import SmoothScroll from "smooth-scroll";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

export default function Dashboard(props) {
  

  axios.defaults.withCredentials = true;
  const location = useLocation();
  return (

    <div>
      <Profile user = {location.state} />
      <EduExpPresenter data={location.state} />
      <ProjectPresenter data={location.state} />
      <CodingPlatformProfile email={location.state.email}/>
      <DashboardNavigation username={location.state.fullName} />
    </div>
  );
}
