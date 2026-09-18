import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    companyLogo: {
      type: String,
      //   required: true,
    },
    roleName: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    techStack: {
      type: [String],
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    salaryType: {
      type: String,
      default: "/month",
    },
    jobType: {
      type: String,
      required: true,
    },
    postDate: {
      type: Date,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    openings: {
      type: Number,
      required: true,
    },
    overview: {
      type: String,
      required: true,
    },
    responsibilities: {
      type: [String],
      required: true,
    },
    jobCriteria: {
      type: [String],
      required: true,
    },
    education: {
      type: [String],
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "closed"],
      default: "active",
    },
  },
  {
    timestamps: true,
  },
);

const Job = mongoose.model("Job", jobSchema);
export default Job;
