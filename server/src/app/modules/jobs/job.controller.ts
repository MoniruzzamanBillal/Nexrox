import httpStatus from "http-status";
import catchAsync from "../../util/catchAsync";
import sendResponse from "../../util/sendResponse";
import { jobServices } from "./job.service";

// ! for creating a job
const createJob = catchAsync(async (req, res) => {
  const result = await jobServices.createJob(req?.body);

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Job created successfully!!!",
    data: result,
  });
});

// ! for getting all jobs
const getAllJobs = catchAsync(async (req, res) => {
  const result = await jobServices.getAllJobs();

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Jobs retrived successfully!!!",
    data: result,
  });
});

// ! for updating a job
const updateJob = catchAsync(async (req, res) => {
  const result = await jobServices.updateJob(req?.params?.id);

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Jobs updated successfully!!!",
    data: result,
  });
});

// ! for updating a job
const deleteJob = catchAsync(async (req, res) => {
  const result = await jobServices.deleteJob(req?.params?.id);

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "Jobs deleted successfully!!!",
    data: result,
  });
});

//
export const jobController = {
  createJob,
  getAllJobs,
  updateJob,
  deleteJob,
};
