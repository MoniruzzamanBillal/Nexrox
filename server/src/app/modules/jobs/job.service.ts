import { TJob } from "./job.interface";

// ! for creating a job
const createJob = async (pyaload: TJob) => {
  console.log(pyaload);
};

// ! for getting all jobs
const getAllJobs = async () => {
  console.log("all jobs ");
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
