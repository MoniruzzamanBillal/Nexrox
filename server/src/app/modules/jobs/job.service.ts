import httpStatus from "http-status";
import AppError from "../../Error/AppError";
import { userModel } from "../auth/auth.model";
import { TJob } from "./job.interface";
import { jobModel } from "./job.model";

// ! for creating a job
const createJob = async (payload: TJob, userId: string) => {
  const userData = await userModel.findById(userId);

  if (!userData) {
    throw new AppError(httpStatus.BAD_REQUEST, "User does not exist !!!");
  }

  const result = await jobModel.create({ ...payload, author: userId });

  return result;
};

// ! for getting all jobs
const getAllJobs = async () => {
  const result = await jobModel.find().populate("author", " _id name email ");

  return result;
};
// ! for updating a job
const updateJob = async (jobId: string) => {
  console.log("job id = ", jobId);
};

// ! for deleting a job
const deleteJob = async (jobId: string) => {
  console.log("job id = ", jobId);
};

//
export const jobServices = {
  createJob,
  getAllJobs,
  updateJob,
  deleteJob,
};
