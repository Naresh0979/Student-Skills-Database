import React from "react";
import "../dashboard/editProfile.css";

const Project = (props) => {
  return props.experienceList.map((val, idx) => {
    let experienceName = `inst-${idx}`,
      start = `st-${idx}`,
      end = `end-${idx}`,
      index = val.index;
    return (
      <div>
        <div id={experienceName} className="flex-div-left-right-med-container">
          <div id={experienceName} className="flex-div-left-med-container">
            <input
              className="e-p-input"
              placeholder="Project Name"
              id={experienceName}
              disabled={!props.status}
              value={val.organizationName}
              name="organizationName"
              onChange={(event) => props.update(idx, event)}
            />
          </div>
          <div id={experienceName} className="flex-div-right-med-container">
            <div
              id={experienceName}
              className="flex-div-right-med-container-line"
            >
              <input
                className="e-p-input endDate-input"
                value="2020-04"
                type="month"
              />

              <input
                className="e-p-input endDate-input"
                value="2021-06"
                type="month"
              />

              {props.status && idx > 0 && (
                <button
                  id={experienceName}
                  className="btn-danger btn-minus"
                  type="button"
                  onClick={() => {
                    props.delete(index);
                  }}
                >
                  <i
                    id={experienceName}
                    className="fa fa-minus"
                    aria-hidden="true"
                  ></i>
                </button>
              )}
            </div>
          </div>
        </div>
        <textarea
          className="e-p-input description"
          placeholder="Description"
          disabled={!props.status}
          name="organizationName"
          onChange={(event) => props.update(idx, event)}
        />
        <input
          className="e-p-input link-input"
          type="text"
          placeholder="Link"
          disabled={!props.status}
          name="instituteName"
          onChange={(event) => props.update(idx, event)}
        />
      </div>
    );
  });
};

export default Project;
