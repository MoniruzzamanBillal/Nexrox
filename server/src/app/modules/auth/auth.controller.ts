import httpStatus from "http-status";
import catchAsync from "../../util/catchAsync";
import sendResponse from "../../util/sendResponse";
import { authServices } from "./auth.service";

// ! for registering a user
const registerUser = catchAsync(async (req, res) => {
  const result = await authServices.registerUser(req?.body);

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "User Registered successfully!!!",
    data: result,
  });
});

// ! for login a user
const loginUser = catchAsync(async (req, res) => {
  const result = await authServices.loginUser(req?.body);

  const { userData, token } = result;

  sendResponse(res, {
    status: httpStatus.OK,
    success: true,
    message: "User logged in  successfully!!!",
    data: userData,
    token: token,
  });
});

//
export const authController = {
  registerUser,
  loginUser,
};
