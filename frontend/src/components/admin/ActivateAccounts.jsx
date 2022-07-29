import { useEffect, useState } from "react";
import "./admin.css";
import axios from "axios";
const ActivateAccounts = (props) => {
  const [pendingAccounts, setPendingAccounts] = useState(null);
  async function activateAccount(email) {
    await axios.post("http://localhost:2000/users/activateAccount", {
      email: email,
    });
    let newData = pendingAccounts.filter((val) => val.email != email);
    setPendingAccounts(newData);
  }
  async function deleteAccount(email) {
    await axios.post("http://localhost:2000/users/deleteAccount", {
      email: email,
    });
    let newData = pendingAccounts.filter((val) => val.email != email);
    setPendingAccounts(newData);
  }
  useEffect(() => {
    axios
      .get("http://localhost:2000/users/getPendingAccounts")
      .then(({ data }) => {
        
        let val  = data.filter((val) => val.email != props.email);
        setPendingAccounts(val);
      });
  }, []);
  return (
    <div className="image-container-admin">
      <div className="container">
        <div className="admincc">
          <div className="section-title">
            <h2 className="admin-head-black">Account Activation Requests</h2>
          </div>
          <div className="pending-account-table">
            <table className="table table-striped admin-side-table">
              <thead className="table-header">
                <tr className="">
                  <th>S No.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Account Type</th>
                  <th>Actions</th>
                </tr>
              </thead>
              {pendingAccounts !== null &&
                pendingAccounts.map((val, idx) => {
                  return (
                    <tr className="align-middle" key={idx}>
                      <td key={idx}>{idx + 1}</td>
                      <td key={idx}>{val.fullName}</td>
                      <td key={idx}>{val.email}</td>
                      <td key={idx}> {val.accountType}</td>
                      <td key={idx}>
                        <button
                          key={idx}
                          className="btn-success"
                          onClick={() => activateAccount(val.email)}
                        >
                          Activate
                        </button>
                        <button
                          key={idx}
                          className="btn-danger"
                          onClick={() => deleteAccount(val.email)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </table>
            {pendingAccounts === null ? (
              <p className="no-account">Loading</p>
            ) : (
              pendingAccounts.length === 0 && (
                <p className="no-account">No Account Found</p>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivateAccounts;
