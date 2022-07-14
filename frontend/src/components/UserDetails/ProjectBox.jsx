import React from "react";
import { useState } from "react";
import axios from "axios";
import "../dashboard/editProfile.css";
const ProjectBox = (props) => {
  const [reviewsList, setreviewsList] = useState(null);
  const [getReviewBtnStatus, setGetReviewBtnStatus] = useState(false);
  const [clickedProjectIdx, setClickedProjectIdx] = useState(-1);
  const [reviewContent, setreviewContent] = useState("");

  const owner = true;
  const creatorEmail = "xyz@gmail.com";
  const reviewerEmail = "xyz@gmail.com";
  async function deleteRequest(reviewId) {
    try {
      await axios.post("http://localhost:2000/student/deleteProjectReview", {
        reviewId: reviewId,
      });
      let data = reviewsList.filter((val) => val._id !== reviewId);
      setreviewsList(data);
    } catch (error) {
      console.log(error);
    }
  }
  async function postReview(projectId) {
    try {
      await axios.post("http://localhost:2000/users/addReview", {
        projectId: projectId,
        content: reviewContent,
        creatorEmail: creatorEmail,
        reviewerEmail: reviewerEmail,
      });
      setreviewContent("");
      setGetReviewBtnStatus(false);
    } catch (error) {
      console.log(error);
    }
  }
  async function getReview(projectId) {
    try {
      const { data } = await axios.post(
        "http://localhost:2000/student/getProjectReviews", {
          projectId: projectId,
        }
      );
      setreviewsList(data);
    } catch (error) {
      console.log(error);
    }
  }

  return props.projectList.map((val, idx) => {
    let projectName = `inst-${idx}`;
      // start = `st-${idx}`,
      // end = `end-${idx}`,
      // index = val.index;
    return (
      <div id={projectName} className="whiteBackground">
        <div id={projectName} className="name-dates">
          <input
            className="names form-control"
            placeholder="Project Name"
            id={projectName}
            disabled
            value={val.projectName}
            name="projectName"
          />
          <a id={projectName} href={val.link}>
            <button id={projectName} className="link-btn btn btn-success">Go to Project</button>{" "}
          </a>
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
          <button
            type="button"
            className="show-review-btn"
            id={projectName}
            onClick={() => {
              if (!getReviewBtnStatus) getReview(val._id);
              else setreviewsList(null);
              setGetReviewBtnStatus(!getReviewBtnStatus);
              setClickedProjectIdx(val._id);
            }}
          >
            {!owner
              ? "Give Review"
              : getReviewBtnStatus && clickedProjectIdx === val._id
              ? "Hide Reviews"
              : "Get Reviews"}
          </button>
        </div>

        <textarea
          className="card-description form-control"
          value={val.description}
          id={projectName}
          placeholder="Description"
          disabled
          name="description"
        />
        {getReviewBtnStatus && clickedProjectIdx === val._id && (
          <div id={projectName} className="">
            <h3 id={projectName} className="text-center" style={{ color: "black" }}>
              {owner ? "Reviews" : "Give Reviews"}
            </h3>
            {owner ? (
              <div id={projectName} className="pending-account-table">
                <table id={projectName} className="table table-striped admin-side-table">
                  <thead id={projectName} className="table-header">
                    <tr id={projectName} className="">
                      <th id={projectName}>S No.</th>
                      <th id={projectName}>Reviewer</th>
                      <th id={projectName}>Review</th>
                      <th id={projectName}>Actions</th>
                    </tr>
                  </thead>
                  {reviewsList !== null &&
                    reviewsList.map((val, idx) => {
                      return (
                        <tr className="align-middle" id={idx}>
                          <td id={idx}>{idx + 1}</td>
                          <td id={idx}>{val.reviewerEmail}</td>
                          <td id={idx}>{val.content}</td>
                          <td id={idx}>
                            <button
                              id={idx}
                              className="btn-danger"
                              onClick={() => deleteRequest(val._id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </table>
                {reviewsList === null ? (
                  <p id={projectName} className="no-account">Loading</p>
                ) : (
                  reviewsList.length === 0 && (
                    <p id={projectName} className="no-account">No Reviews</p>
                  )
                )}
              </div>
            ) : (
              <div id={projectName} className="give-review-cont">
                <textarea
                  id={projectName}
                  className="form-control review-box"
                  val={reviewContent}
                  onChange={(e) => setreviewContent(e.target.value)}
                />
                <button
                  id={projectName}
                  className="btn-success review-submit"
                  onClick={() => postReview(val._id)}
                >
                  Post
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  });
};

export default ProjectBox;
