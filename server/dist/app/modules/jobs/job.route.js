"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobRouter = void 0;
const express_1 = require("express");
const authCheck_1 = __importDefault(require("../../middleware/authCheck"));
const job_controller_1 = require("./job.controller");
const router = (0, express_1.Router)();
// ! for getting all job
router.get("/", authCheck_1.default, job_controller_1.jobController.getAllJobs);
// ! for creating a job
router.post("/", authCheck_1.default, job_controller_1.jobController.createJob);
// ! for creating a job
router.put("/:id", authCheck_1.default, job_controller_1.jobController.updateJob);
// ! for creating a job
router.delete("/:id", authCheck_1.default, job_controller_1.jobController.deleteJob);
//
exports.jobRouter = router;
