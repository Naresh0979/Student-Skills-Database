const mongoose = require("mongoose");

const personalDetail = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
  },
  rollNumber: {
    type: String,
  },
  mobileNumber: {
    type: String,
  },
  country: {
    type: String,
  },
  state: {
    type: String,
  },
  city: {
    type: String,
  },
  pincode: {
    type: String,
  },
  address: {
    type: String,
  },
  bio: {
    type: String,
  },
  educationList: [
    {
      index: {
        type: Number,
      },
      instituteName: {
        type: String,
      },
      degreeName: {
        type: String,
      },
      startDate: {
        type: String,
      },
      endDate: {
        type: String,
      },
      grade: {
        type: String,
      },
    },
  ],
  experienceList: [
    {
      index: {
        type: Number,
      },
      organizationName: {
        type: String,
      },
      startDate: {
        type: String,
      },
      endDate: {
        type: String,
      },
      role: {
        type: String,
      },
      location: {
        type: String,
      },
      description: {
        type: String,
      },
    },
  ],
  projectList: [
    {
      index: {
        type: Number,
      },
      projectName: {
        type: String,
      },
      startDate: {
        type: String,
      },
      endDate: {
        type: String,
      },
      link: {
        type: String,
      },
      description: {
        type: String,
      },
    },
  ],
  linkList: [
    {
      index: {
        type: Number,
      },
      linkName: {
        type: String,
      },
      link: {
        type: String,
      }
    }
  ],
  skills: [
    {
      name:{
        type: String,
      },
    },
  ],
});
const PersonalDetail = new mongoose.model("PersonalDetail", personalDetail);
module.exports = PersonalDetail;
