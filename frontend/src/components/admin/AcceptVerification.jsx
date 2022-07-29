import { useEffect, useState } from "react";
import "./admin.css";
import axios from "axios";
import EditProfile from "../dashboard/EditProfile";
const AcceptVerificaton = (props) => {
  const [pendingVerfication, setpendingVerfication] = useState(null);
  const [viewDetailStatus, setviewDetailStatus] = useState(false);
  const [emailId, setemailId] = useState();
  function changeViewDetailsStatus(email) {
    setemailId(email);
    if (viewDetailStatus) setemailId(undefined);
    setviewDetailStatus(!viewDetailStatus);
  }
  async function deleteRequest(email) {
    await axios.post("http://localhost:2000/student/deletePendingDetails", {
      email: email,
    });
    let newData = pendingVerfication.filter((val) => val.email !== email);
    setpendingVerfication(newData);
  }
  async function updateRequest(email) {
    await axios.post("http://localhost:2000/student/confirmedEditProfile", {
      email: email,
    });
    let newData = pendingVerfication.filter((val) => val.email !== email);
    setpendingVerfication(newData);
  }
  useEffect(() => {
    axios
      .get("http://localhost:2000/student/getPendingDetails", {})
      .then(({ data }) => {
        // console.log(data);
        let val = data.filter((val) => val.email !== props.email);
        setpendingVerfication(val);
      });
  }, [emailId]);
  return (
    <div className="admin-accept-details">
      <div className="container">
        <div className="">
          <div className="section-title">
            <h2 className="admin-head-black">Update Details Requests</h2>
          </div>

          <div className="pending-account-table">
            <table className="table table-striped admin-side-table">
              <thead className="table-header">
                <tr className="">
                  <th>S No.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile Number</th>
                  <th>Actions</th>
                </tr>
              </thead>
              {pendingVerfication !== null &&
                pendingVerfication.map((val, idx) => {
                  return (
                    <tr className="align-middle" key={idx}>
                      <td key={idx}>{idx + 1}</td>
                      <td key={idx}>{val.name}</td>
                      <td key={idx}>{val.email}</td>
                      <td key={idx}>{val.mobileNumber}</td>
                      <td key={idx}>
                        <button
                          key={idx}
                          className="btn-success"
                          onClick={() => updateRequest(val.email)}
                        >
                          Accept
                        </button>
                        <button
                          key={idx}
                          className="btn-danger"
                          onClick={() => deleteRequest(val.email)}
                        >
                          Delete
                        </button>
                        <button
                          key={idx}
                          className="btn-primary"
                          onClick={() => changeViewDetailsStatus(val.email)}
                        >
                          {viewDetailStatus && val.email === emailId
                            ? "Hide Details"
                            : "View Details"}
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </table>
            {pendingVerfication === null ? (
              <p className="no-account">Loading</p>
            ) : (
              pendingVerfication.length === 0 && (
                <p className="no-account">No Account Found</p>
              )
            )}
          </div>
          {viewDetailStatus && <EditProfile status={true} email={emailId} />}
        </div>
      </div>
    </div>
  );
};

export default AcceptVerificaton;
