import { ObjectId } from "mongoose";

export type TJob = {
  author: ObjectId;
  title: string;
  lowSalary: number;
  highSalary: number;
  description: string;
  location: string;
  level: string;
  category: [string];
  vacancy: number;
};
