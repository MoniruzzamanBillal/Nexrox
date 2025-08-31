import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Apple, Eye, EyeOff, Facebook, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const registerImg = "https://i.postimg.cc/xdcdzQ8m/register-Img.jpg";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="RegisterContainer w-full min-h-screen  imageCenter flex items-center justify-center ">
      <div className=" w-[92%] xsm:w-[90%] sm:w-[85%] md:w-[82%] xmd:w-[75%] lg:w-[65%] m-auto p-6  rounded-xl shadow-xl bg-prime50  backdrop-blur  border border-gray-300 text-gray-50 flex justify-between gap-x-6  ">
        {/* register left side  */}
        <div className="registerLeft w-[50%]  ">
          <div className=" mb-4 ">
            <h1 className="text-3xl font-bold mb-2">Open your account</h1>
            <p className="text-gray-400">
              Already have an account?{" "}
              <Link to="/login" className="text-green-500 hover:text-green-400">
                Sign in
              </Link>
            </p>
          </div>

          <form className="space-y-4">
            {/* Email Field */}
            <div className="relative">
              <Label htmlFor="email" className="sr-only">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  className="pl-10 bg-transparent border-green-500 border-2 rounded-full h-12 text-white placeholder:text-gray-400 focus:border-green-400"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="relative">
              <Label htmlFor="password" className="sr-only">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="pl-10 pr-10 bg-transparent border-green-500 border-2 rounded-full h-12 text-white placeholder:text-gray-400 focus:border-green-400"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div className="relative">
              <Label htmlFor="confirmPassword" className="sr-only">
                Confirm Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="pl-10 pr-10 bg-transparent border-green-500 border-2 rounded-full h-12 text-white placeholder:text-gray-400 focus:border-green-400"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            {/* Create Account Button */}
            <Button className="w-full bg-green-500 hover:bg-green-600 text-white rounded-full h-12 text-base font-semibold">
              Create Account
            </Button>
          </form>

          <div className="text-center text-gray-200 py-4 flex  justify-between items-center ">
            <Separator className="w-[44%]" />

            <p>or</p>

            <Separator className="w-[44%]" />
          </div>

          {/* Social Login Buttons */}
          <div className="flex gap-4 justify-center pb-4 ">
            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 text-white"
            >
              <Facebook className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 text-white"
            >
              <Apple className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 text-white"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Button>
          </div>

          {/* Terms and Privacy */}
          <div className="text-xs text-gray-400 text-center">
            By joining, you agree to the Fiverr{" "}
            <Link to="/terms" className="text-green-500 hover:text-green-400">
              Terms of Service
            </Link>{" "}
            and to occasionally receive emails from us. Please read our{" "}
            <Link to="/privacy" className="text-green-500 hover:text-green-400">
              Privacy Policy
            </Link>{" "}
            to learn how we use your personal data.
          </div>
        </div>

        {/* register right  */}
        <div className="registerRight bg-orange-400 w-[50%] rounded-lg overflow-auto ">
          <img
            src={registerImg}
            alt="Team collaboration in modern office"
            className="w-full h-full object-cover"
          />
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default Register;
