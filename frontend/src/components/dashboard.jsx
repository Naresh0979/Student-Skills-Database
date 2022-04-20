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
// import { Gallery } from "./components/gallery";
// import { Testimonials } from "./components/testimonials";
import  CodingPlatformProfile  from "./dashboard/CodingPlatformProfile";
import { Contact } from "./contact";
import JsonData from "../data/data.json";
import RatingMeter from "./animations/RatingMeter";
import SmoothScroll from "smooth-scroll";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

export default function Dashboard(props) {
  const [landingPageData, setLandingPageData] = useState({});
  // const [userName, setuserName] = useState('');
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  axios.defaults.withCredentials = true;
  const location = useLocation();

  return (

    <div>
   {/* <div>Welcome {location.state.fullName}</div> */}
      {/* <RatingMeter/> */}
      <Profile user = {location.state} />
      {/* <Features data={landingPageData.Features} />  */}
      <About data={landingPageData.About} />
      
      <Services data={landingPageData.Services} />
      {/* <Gallery data={landingPageData.Gallery}/>
    <Testimonials data={landingPageData.Testimonials} /> */}
      {/* <Team data={landingPageData.Team} /> */}
      <CodingPlatformProfile/>
      {/* <Contact data={landingPageData.Contact} /> */}
      <DashboardNavigation username={location.state.fullName} />
    </div>
  );
}
