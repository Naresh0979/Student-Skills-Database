import React, { useEffect, useState } from "react";
import Collapsible from "react-collapsible";
import { Navbar } from "../../Navbar";
import axios from "axios";
import "../styles/dsa.scss";

const ContestCalender = () => {
  const [codeforcesContest, setCodeforcesContest] = useState("Loading");

  useEffect(() => {
    axios.get("http://localhost:2000/getCFContests").then((contest) => {
      //  console.log(contest.data);
      setCodeforcesContest(contest.data);
     // setCodeforcesContest(codeforcesContest.sort())    ;
     // setCodeforcesContest(codeforcesContest.reverse());
            
    });
  }, []);

  return (
    <div id="profileContainer">
      <Navbar />
      <div className="container">
        <h1 className="head">Contest Calender</h1>

        <div className="emp-profile">
          {codeforcesContest === "Loading" ? (<p>Loading...</p>) : codeforcesContest.length !== 0 ? (
            codeforcesContest.map((problem, index) => (
              <Collapsible key={index} trigger={problem.name}>
                <a
                  key={index}
                  href={`https://codeforces.com/contests/${problem.id}`}
                >
                  <button className="form-control btn-primary ">
                    Proceed to Contest
                  </button>
                </a>
              </Collapsible>
            ))
          ) : (
            <p>No contest available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContestCalender;
