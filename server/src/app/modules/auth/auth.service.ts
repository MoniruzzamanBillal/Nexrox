import { TUser } from "./auth.interface";

// ! for registering a user
const registerUser = async (payload: TUser) => {
  console.log(payload);
};

type Tlogin = {
  email: string;
  password: string;
};

// ! for login a user
const loginUser = async (payload: Tlogin) => {
  console.log(payload);
};

//
export const authServices = {
  registerUser,
  loginUser,
};
