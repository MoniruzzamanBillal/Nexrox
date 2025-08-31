import argon2 from "argon2";
import httpStatus from "http-status";
import Jwt from "jsonwebtoken";
import config from "../../config";
import AppError from "../../Error/AppError";
import { TUser } from "./auth.interface";
import { userModel } from "./auth.model";

// ! for registering a user
const registerUser = async (payload: TUser) => {
  const result = await userModel.create(payload);

  return result;
};

type Tlogin = {
  email: string;
  password: string;
};

// ! for login a user
const loginUser = async (payload: Tlogin) => {
  const userData = await userModel.findOne({ email: payload?.email });

  if (!userData) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "User dont exist with this email !!!"
    );
  }

  const isPasswordMatch = await argon2.verify(
    userData?.password,
    payload?.password
  );

  if (!isPasswordMatch) {
    throw new AppError(httpStatus.FORBIDDEN, "Password don't match !!");
  }

  const jwtPayload = {
    userId: userData?.id,
    userEmail: userData?.email,
  };

  const token = Jwt.sign(jwtPayload, config.jwt_secret as string, {
    expiresIn: "20d",
  });

  userData.password = " ";

  return {
    userData,
    token,
  };
};

//
export const authServices = {
  registerUser,
  loginUser,
};
