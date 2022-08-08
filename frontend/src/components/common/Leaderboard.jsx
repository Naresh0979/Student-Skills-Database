import React, { useEffect, useState } from "react";
import "../recruiter/recruiter.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Leaderboard = (props) => {
  let navigate = useNavigate();
  const [codingData, setCodingData] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState("Overall");
//   const [fetchStatus, setFetchStatus] = useState("Enter Filter");
  useEffect(() => {
    axios
      .get("http://localhost:2000/users/getCodingProfile")
      .then(({ data }) => {
        setCodingData(data);
      });
  }, []);
  useEffect(() => {
    if (searchCriteria === "Overall") {
      let data = codingData;

      data.sort(
        (x, y) =>
          0.4 * x.codechefRating +
            0.3 * x.codeforcesRating +
            0.2 * x.leetcodeQuestion >
          0.4 * y.codechefRating +
            0.3 * y.codeforcesRating +
            0.2 * y.leetcodeQuestion
      );
      setCodingData(data);
    } else if (searchCriteria === "LeetCode") {
      let data = codingData;

      data.sort((x, y) => x.leetcodeQuestion > y.leetcodeQuestion);
      setCodingData(data);
    } else if (searchCriteria === "CodeChef") {
      let data = codingData;

      data.sort((x, y) => x.codechefRating > y.codechefRating);
      setCodingData(data);
    } else if (searchCriteria === "CodeForces") {
      let data = codingData;

      data.sort((x, y) => x.codeforcesRating > y.codeforcesRating);
      setCodingData(data);
    }
  }, [searchCriteria]);
  return (
    <div id="profileContainer" className="deactivate-container">
      <div className="container">
        <div className="">
          <div className="section-title">
            <h2 className="admin-head-white">Search Profile through Email</h2>
          </div>
          <div className="find-using-email">
            <p>Select Criteria : </p>
            <select
              value={searchCriteria}
              onChange={(e) => setSearchCriteria(e.target.value)}
              id="cars"
            >
              <option value="Overall">Overall</option>
              <option value="CodeChef">CodeChef</option>
              <option value="LeetCode">LeetCode</option>
              <option value="Codeforces">CodeForces</option>
            </select>
            {/* <button placeholder="Enter Email " onClick={getData} className="btn-warning">
              Find Account
            </button> */}
          </div>

          <div className="pending-account-table">
            <table className="table table-striped admin-side-table">
              <thead className="table-header">
                <tr className="">
                  <th>S No.</th>
                  {/* <th>Name</th> */}
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {codingData !== null &&
                  codingData.map((val, idx) => {
                    return (
                      <tr className="align-middle" key={idx + "1"}>
                        <td key={idx + "2"}>{idx + 1}</td>
                        {/* <td key={idx + "3"}>{val.fullName}</td> */}
                        <td key={idx + "4"}>{val.email}</td>
                        <td key={idx + "6"}>
                          <button
                            key={idx + "7"}
                            className="btn-success"
                            onClick={() => {
                              navigate(`/viewProfile/${val.email}`, {
                                state: props.data,
                              });
                            }}
                          >
                            View Profile
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
            {codingData === null ? (
              <p className="no-account">loading..</p>
            ) : (
              codingData.length === 0 && (
                <p className="no-account">No Account Found</p>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
