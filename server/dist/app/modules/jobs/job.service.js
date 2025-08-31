"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../Error/AppError"));
const auth_model_1 = require("../auth/auth.model");
const job_model_1 = require("./job.model");
// ! for creating a job
const createJob = (payload, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = yield auth_model_1.userModel.findById(userId);
    if (!userData) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "User does not exist !!!");
    }
    const result = yield job_model_1.jobModel.create(Object.assign(Object.assign({}, payload), { author: userId }));
    return result;
});
// ! for getting all jobs
const getAllJobs = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield job_model_1.jobModel
        .find()
        .populate("author", " _id name email ")
        .sort({ createdAt: -1 });
    return result;
});
// ! for updating a job
const updateJob = (jobId, payload, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const jobData = yield job_model_1.jobModel.findOne({ _id: jobId, author: userId });
    if (!jobData) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "This used did not create this job !!!");
    }
    const result = yield job_model_1.jobModel.findByIdAndUpdate(jobId, payload, {
        new: true,
    });
    return result;
});
// ! for deleting a job
const deleteJob = (jobId, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const jobData = yield job_model_1.jobModel.findOne({ _id: jobId, author: userId });
    if (!jobData) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "This used did not create this job !!!");
    }
    yield job_model_1.jobModel.findByIdAndDelete(jobId);
});
//
exports.jobServices = {
    createJob,
    getAllJobs,
    updateJob,
    deleteJob,
};
