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
              <select
                id={start}
                className="e-p-input"
                placeholder="Start year"
                disabled={!props.status}
                name="startDate"
                value={val.startDate}
                onChange={(event) => props.update(idx, event)}
              >
                <option>Start year</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
              </select>
              <select
                id={end}
                name="endDate"
                value={val.endDate}
                disabled={!props.status}
                onChange={(event) => props.update(idx, event)}
                className="mx-2 e-p-input"
              >
                <option>End year</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
              </select>
              {props.status && idx > 0 && (
                <button
                  className="btn mx-2 mt-3"
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
        {/* <textarea
          className="e-p-input"
          placeholder="Institute Name"
          id={instituteName}
          value={val.instituteName}
          disabled={!props.status}
          name="instituteName"
          onChange={(event) => props.update(idx, event)}
        /> */}
      </div>
    );
  });
};

export default Education;
