import React from "react";
import "../dashboard/editProfile.css";

const Education = (props) => {
  return props.educationList.map((val, idx) => {
    let instituteName = `inst-${idx}`,
      start = `st-${idx}`,
      end = `end-${idx}`,
      index = val.index;
    return (
      <div>
        <div id={instituteName} className="flex-div-left-right-med-container">
          <div id={instituteName} className="flex-div-left-med-container">
            <input
              className="e-p-input"
              placeholder="Institute Name"
              id={instituteName}
              value={val.instituteName}
              disabled={!props.status}
              name="instituteName"
              onChange={(event) => props.update(idx, event)}
            />
          </div>
          <div id={instituteName} className="flex-div-right-med-container">
            <div
              id={instituteName}
              className="flex-div-right-med-container-line"
            >
              <input className="e-p-input endDate-input" defaultValue="2020-04" type="month"/>
              
              <input className="e-p-input endDate-input" defaultValue="2021-06" type="month"/>
              
              <input
              className="e-p-input grade-input"
              placeholder="Grade"
              id={instituteName}
              value={val.instituteName}
              disabled={!props.status}
              name="instituteName"
              onChange={(event) => props.update(idx, event)}
            />
              {props.status && idx > 0 && (
                <button
                  className="btn-danger btn-minus"
                  type="button"
                  id={instituteName}
                  onClick={() => {
                    props.delete(index);
                  }}
                >
                  <i
                    id={instituteName}
                    className="fa fa-minus"
                    aria-hidden="true"
                  ></i>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default Education;
