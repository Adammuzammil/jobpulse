import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    logo: {
      type: String,
      //   required: true,
    },
    website: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Company = mongoose.model("Company", companySchema);
export default Company;
