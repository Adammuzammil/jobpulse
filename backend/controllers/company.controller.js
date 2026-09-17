import Company from "../models/company.js";
import { uploadToCloudinary } from "../utils/cloudinaryUpload.js";

//get all companies
export const getCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json({
      success: true,
      companies,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

//to add company(admin)
export const addCompany = async (req, res) => {
  try {
    const { website } = req.body;
    if (!website) {
      res.status(200).json({
        success: true,
        message: "Website is required",
      });
    }

    let logoUrl = "";
    if (req.file) {
      const uploadResult = await uploadToCloudinary(
        req.file.buffer,
        "jobpulse/logos",
        "image",
        req.file.originalname,
      );
      logoUrl = uploadResult.secure_url;
    }

    const company = await Company.create({
      website,
      logo: logoUrl,
      createdBy: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Company added successfully",
      company,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

//to delete company(admin)
export const deleteCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) {
      return res.status(404).json({
        success: false,
        message: "Company not found",
      });
    }
    await company.deleteOne();
    res.status(200).json({
      success: true,
      message: "Company deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
