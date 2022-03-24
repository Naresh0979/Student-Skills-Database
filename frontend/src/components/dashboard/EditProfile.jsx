import React, { useState } from "react";
import "../styles/profile.css";
const EditProfile = () => {

    const [webLinks,setWebLinks]=useState([]);

    const addWebLink = () =>{
        let templink=[]
    }
    const [experienceCount, setExperienceCount] = useState(0);
    const [experienceList, setExperienceList] = useState([
        {
          index: experienceCount,
          organizationName: "", 
          startDate: "",
          endDate: "",
        },
      ]);
      const addNewExperience = () => {
          
        const newExperience = {
          index: experienceCount + 1,
          organizationName: "",
          startDate: "",
          endDate: "",
        };
        setExperienceCount(experienceCount + 1);
        setExperienceList([...experienceList, newExperience]);
      };
    
      const handleExperienceChange = (index,event) => {
        const experienceTemporary = [...experienceList];
        experienceTemporary[index][event.target.name] = event.target.value;
        setExperienceList(experienceTemporary);
      }
      const deleteExperience = (index) => {
        const newExperienceList = experienceList.filter((s) => index !== s.index);
        setExperienceList(newExperienceList);
      };
  return (
    <div id="profileContainer">
      <div classNameName="container">
        <div className="emp-profile">
          <form method="post">
            <div className="row">
              <div className="col-md-4">
                <div className="profile-img">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                    alt=""
                  />
                  {/* <div className="file btn btn-lg btn-primary">
                    Change Photo
                    <input type="file" name="file" />
                  </div> */}
                </div>
              </div>
              <div className="col-md-6">
                <div className="profile-head">
               
                  
                  <ul className="nav nav-pills" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="home-tab"
                        data-toggle="tab"
                        href="#home"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link "
                        id="profile-tab"
                        data-toggle="tab"
                        href="#profile"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                          Expereince
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2">
                
                <input
                  type="submit"
                  className="profile-edit-btn"
                  name="btnAddMore"
                  value='EditProfile'
                />
              
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="profile-work">
                  <p>WORK LINK</p>
                
                  <a href="">Website Link</a>
                  <br />
                  <a href="">Bootsnipp </a>
                  <br />
                  <a href="">Bootply</a>
                  <p>SKILLS</p>
                  <a href="">Web Designer</a>
                  <br />
                  <a href="">Web Developer</a>
                  <br />
                  <a href="">WordPress</a>
                  <br />
                  <a href="">WooCommerce</a>
                  <br />
                  <a href="">PHP, .Net</a>
                  <br />
                </div>
              </div>
              <div className="col-md-8">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div
                    className="tab-pane active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>Name</label>
                      </div>
                      <div className="col-md-6">
                      <input type='text'></input>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Email</label>
                      </div>
                      <div className="col-md-6">
                        <p>kshitighelani@gmail.com</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Phone</label>
                      </div>
                      <div className="col-md-6">
                      <input type='text'></input>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Profession</label>
                      </div>
                      <div className="col-md-6">
                      <input type='text'></input>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                      <a onClick={addNewExperience}> </a>
                    <div  className="row" >

                        
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
