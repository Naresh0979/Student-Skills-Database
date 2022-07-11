import { useEffect, useState } from "react";
import "./admin.css";
import axios from "axios";
const AcceptVerificaton = (props) => {
  const [pendingVerfication, setpendingVerfication] = useState(null);
  async function deleteRequest(email) {
    await axios.post("http://localhost:2000/student//deletePendingDetails", {
      email: email,
    });
    let newData = pendingVerfication.filter((val) => val.email != email);
    setpendingVerfication(newData);
  }
  async function updateRequest(email) {
    await axios.post("http://localhost:2000/student/confirmedEditProfile", {
      email: email,
    });
    let newData = pendingVerfication.filter((val) => val.email != email);
    setpendingVerfication(newData);
  }
  useEffect(() => {
    axios
      .get("http://localhost:2000/student/getPendingDetails", {})
      .then(({ data }) => {
        console.log(data);
        let val  = data.filter((val) => val.email != props.email);
        setpendingVerfication(val);
      });
  }, []);
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
                    <tr className="align-middle" id={idx}>
                      <td id={idx}>{idx + 1}</td>
                      <td id={idx}>{val.name}</td>
                      <td id={idx}>{val.email}</td>
                      <td id={idx}>{val.mobileNumber}</td>
                      <td id={idx}>
                        <button
                          id={idx}
                          className="btn-success"
                          onClick={() => updateRequest(val.email)}
                        >
                          Accept
                        </button>
                        <button
                          id={idx}
                          className="btn-danger"
                          onClick={() => deleteRequest(val.email)}
                        >
                          Delete
                        </button>
                        <button id={idx} className="btn-primary">
                          View Details
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
        </div>
      </div>
    </div>
  );
};

export default AcceptVerificaton;
