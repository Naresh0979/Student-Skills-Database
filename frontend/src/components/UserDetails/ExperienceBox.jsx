import React from "react";
import "../dashboard/editProfile.css";
const ExperienceBox = (props) => {
    return props.experienceList.map((val, idx) => {
        let projectName = `inst-${idx}`
        // ,
        //   start = `st-${idx}`,
        //   end = `end-${idx}`,
        //   index = val.index;
        return (
          <div id={projectName} className="coloredBackground">
            <div id={projectName} className="name-dates">
              <input
                className="names form-control"
                placeholder="Organization Name"
                id={projectName}
                disabled
                value={val.organizationName}
                name="projectName"
              />
              <input
                className="startDate form-control"
                value={val.role}
                id={projectName}
                disabled
                name="startDate"
              />
              <input
                className="startDate form-control"
                value={val.startDate}
                id={projectName}
                type="month"
                disabled
                name="startDate"
              />
              <input
                className="endDate form-control"
                value={val.endDate}
                id={projectName}
                type="month"
                disabled
                name="endDate"
              />
              <input
                id={projectName}
                className="form-control grades"
                type="text"
                placeholder="Location"
                disabled
                value={val.location}
                name="location"
              />
            </div>
    
            <textarea
              id={projectName}
              className="card-description form-control"
              value={val.description}
              placeholder="Description"
              disabled
              name="description"
            />
            
            
             
          </div>
        );
      });
}
 
export default ExperienceBox;