import express from "express";
import { authMiddleware, authorize } from "../middleware/authMiddleware.js";
import { upload } from "../middleware/uploadMiddleware.js";
import {
  closeJob,
  createJob,
  deleteJob,
  getAllJobs,
  getDashboardStats,
  getJobById,
  getJobsByAdmin,
  updateJob,
} from "../controllers/job.controller.js";

const jobRouter = express.Router();

jobRouter.post(
  "/",
  authMiddleware,
  authorize("admin"),
  upload.single("companyLogo"),
  createJob,
);
jobRouter.get(
  "/admin/stats",
  authMiddleware,
  authorize("admin"),
  getDashboardStats,
);
jobRouter.get(
  "/admin/jobs",
  authMiddleware,
  authorize("admin"),
  getJobsByAdmin,
);

jobRouter.get("/", getAllJobs);
jobRouter.get("/:id", getJobById);

jobRouter.put(
  "/:id",
  authMiddleware,
  authorize("admin"),
  upload.single("companyLogo"),
  updateJob,
);

jobRouter.delete("/:id", authMiddleware, authorize("admin"), deleteJob);
jobRouter.patch("/:id/close", authMiddleware, authorize("admin"), closeJob);

export default jobRouter;
