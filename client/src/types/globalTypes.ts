export type TUser = {
  userId: string;
  userEmail: string;
  iat: number;
  exp: number;
};

export type TJob = {
  _id: string;
  author: {
    email: string;
    name: string;
  };
  category: string[];
  createdAt: string;
  description: string;
  highSalary: number;
  lowSalary: number;
  level: string;
  location: string;
  title: string;
  updatedAt: string;
  vacancy: number;
};
