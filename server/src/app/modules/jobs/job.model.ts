import { model, Schema } from "mongoose";
import { TJob } from "./job.interface";
import { jobLevelConst } from "./job.constants";

const jobSchema = new Schema<TJob>(
  {
    title: {
      type: String,
      required: [true, "Job title is required"],
      trim: true,
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
        validator: function (this: TJob, value: number) {
          return value > this?.lowSalary;
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
      enum: {
        values: Object.values(jobLevelConst),
        message: "{VALUE} is not a valid job level",
      },
    },
    category: {
      type: [String],
      required: [true, "Job category is required"],
      validate: {
        validator: (val: string[]) => val.length > 0,
        message: "At least one category is required",
      },
    },
    vacancy: {
      type: Number,
      required: [true, "Number of vacancies is required"],
      min: [1, "At least 1 vacancy is required"],
    },
  },
  { timestamps: true }
);

//

export const jobModel = model<TJob>("Job", jobSchema);
