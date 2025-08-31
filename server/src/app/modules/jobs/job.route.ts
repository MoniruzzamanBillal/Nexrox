import { Router } from "express";
import authCheck from "../../middleware/authCheck";
import { jobController } from "./job.controller";

const router = Router();

// ! for getting all job
router.get("/", jobController.getAllJobs);

// ! for creating a job
router.post("/", authCheck, jobController.createJob);

// ! for creating a job
router.put("/:id", authCheck, jobController.updateJob);

// ! for creating a job
router.delete("/:id", jobController.deleteJob);

//
export const jobRouter = router;
