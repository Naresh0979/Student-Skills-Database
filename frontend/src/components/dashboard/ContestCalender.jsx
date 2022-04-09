import React, { useEffect, useState } from "react";
import Collapsible from "react-collapsible";
//import QuestionBank from "../../data/questionBank.json";
import { Navbar } from "../../Navbar";
import axios from "axios";
//import Question from './Question';
// import {QuestionBank} from './questionBank.json'
import "../styles/dsa.scss";

const ContestCalender = () => {
  const [codeforcesContest, setCodeforcesContest] = useState();
 
  
  useEffect(() => {    
    axios.get('http://localhost:2000/getCFContests').then((contest)=>{
      //  console.log(contest.data);
        setCodeforcesContest(contest.data);
    })
  }, []);

  return (
    <div id="profileContainer">
      <Navbar />
      <div className="container">
        <h1 className="head">Contest Calender</h1>

        <div className="emp-profile">
          {
            
            codeforcesContest ? codeforcesContest.map((problem,index) => (
                  <Collapsible key={index} trigger={problem.name} >
                  {/* <p key={index}>
              {problem.paragraph}
                 </p>
                       */}
                 <a key={index} href={`https://codeforces.com/contests/${problem.id}`}><button className='form-control btn-primary '>Proceed to Contest</button></a>
                 </Collapsible>
                 )) : <h1>No contest available</h1>

          }
        </div>
      </div>
    </div>
  );
};

export default ContestCalender;
