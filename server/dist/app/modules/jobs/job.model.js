"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobModel = void 0;
const mongoose_1 = require("mongoose");
const jobSchema = new mongoose_1.Schema({
    author: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Author is required !!!"],
    },
    title: {
        type: String,
        required: [true, "Job title is required"],
    },
    lowSalary: {
        type: Number,
        required: [true, "Minimum salary is required"],
        min: [0, "Salary cannot be negative"],
    },
    highSalary: {
        type: Number,
        required: [true, "Maximum salary is required"],
        validate: {
            validator: function (value) {
                return value > (this === null || this === void 0 ? void 0 : this.lowSalary);
            },
            message: "highPrice must be greater than to lowPrice",
        },
    },
    description: {
        type: String,
        required: [true, "Job description is required"],
    },
    location: {
        type: String,
        required: [true, "Job location is required"],
    },
    level: {
        type: String,
        required: [true, "Job level is required"],
    },
    category: {
        type: [String],
        required: [true, "Job category is required"],
        validate: {
            validator: (val) => val.length > 0,
            message: "At least one category is required",
        },
    },
    vacancy: {
        type: Number,
        required: [true, "Number of vacancies is required"],
        min: [1, "At least 1 vacancy is required"],
    },
}, { timestamps: true });
//
exports.jobModel = (0, mongoose_1.model)("Job", jobSchema);
