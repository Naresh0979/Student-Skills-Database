import React from "react";
import { useState } from "react";
import axios from "axios";
import "../dashboard/editProfile.css";
import { useEffect } from "react";
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
      let data = reviewsList.filter((val) => val._id != reviewId);
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
    let projectName = `inst-${idx}`,
      start = `st-${idx}`,
      end = `end-${idx}`,
      index = val.index;
    return (
      <div className="whiteBackground">
        <div className="name-dates">
          <input
            className="names form-control"
            placeholder="Project Name"
            id={projectName}
            disabled
            value={val.projectName}
            name="projectName"
          />
          <a href={val.link}>
            <button className="link-btn btn btn-success">Go to Project</button>{" "}
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
          <div className="">
            <h3 className="text-center" style={{ color: "black" }}>
              {owner ? "Reviews" : "Give Reviews"}
            </h3>
            {owner ? (
              <div className="pending-account-table">
                <table className="table table-striped admin-side-table">
                  <thead className="table-header">
                    <tr className="">
                      <th>S No.</th>
                      <th>Reviewer</th>
                      <th>Review</th>
                      <th>Actions</th>
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
                  <p className="no-account">Loading</p>
                ) : (
                  reviewsList.length === 0 && (
                    <p className="no-account">No Reviews</p>
                  )
                )}
              </div>
            ) : (
              <div className="give-review-cont">
                <textarea
                  className="form-control review-box"
                  val={reviewContent}
                  onChange={(e) => setreviewContent(e.target.value)}
                />
                <button
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
