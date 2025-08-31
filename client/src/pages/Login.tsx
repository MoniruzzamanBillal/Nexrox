import { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Apple, Eye, EyeOff, Facebook, Lock, Mail, X } from "lucide-react";

const loginImg = "https://i.postimg.cc/xdcdzQ8m/register-Img.jpg";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { email, password, rememberMe });
  };

  return (
    <div className="LoginContainer w-full min-h-screen  imageCenter flex items-center justify-center ">
      <div className=" w-[92%] xsm:w-[90%] sm:w-[85%] md:w-[82%] xmd:w-[75%] lg:w-[65%] m-auto p-6  rounded-xl shadow-xl bg-prime50  backdrop-blur  border border-gray-300 text-gray-50 flex justify-between gap-x-6   relative">
        {/* Close Button */}
        <Link
          to="/"
          className="absolute top-5 right-6 bg-prime50 rounded-l-lg  "
        >
          <Button
            variant="ghost"
            size="icon"
            className="text-green-500 hover:text-green-400 hover:bg-green-500/10"
          >
            <X className="h-6 w-6" />
          </Button>
        </Link>

        {/* register left side  */}
        <div className="registerLeft w-[50%]  ">
          {/* Header */}
          <div className=" mb-6 space-y-2 ">
            <h1 className="text-3xl font-bold text-white">
              Login your account
            </h1>
            <p className="text-gray-400">
              {"Don't have an account? "}
              <Link
                to="/register"
                className="text-green-500 hover:text-green-400"
              >
                Sign Up
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-12 h-14 bg-transparent border-2 border-green-500 text-white placeholder:text-gray-400 focus:border-green-400 rounded-full"
                required
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-12 pr-12 h-14 bg-transparent border-2 border-green-500 text-white placeholder:text-gray-400 focus:border-green-400 rounded-full"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) =>
                    setRememberMe(checked as boolean)
                  }
                  className="border-green-500 data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                />
                <label
                  htmlFor="remember"
                  className="text-sm text-gray-400 cursor-pointer"
                >
                  Remember Me
                </label>
              </div>
              <Link
                to="/forgot-password"
                className="text-sm text-gray-400 hover:text-green-500"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              className="w-full h-14 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full text-lg"
            >
              Login Now
            </Button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2  text-gray-400">or</span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="flex space-x-4">
              <Button
                type="button"
                variant="outline"
                className="flex-1 h-12 bg-gray-800 border-gray-700 hover:bg-gray-700 text-white rounded-full"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                type="button"
                variant="outline"
                className="flex-1 h-12 bg-gray-800 border-gray-700 hover:bg-gray-700 text-white rounded-full"
              >
                <Apple className="h-5 w-5" />
              </Button>
              <Button
                type="button"
                variant="outline"
                className="flex-1 h-12 bg-gray-800 border-gray-700 hover:bg-gray-700 text-white rounded-full"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Button>
            </div>
          </form>
        </div>

        {/* register right  */}
        <div className="registerRight bg-orange-400 w-[50%] rounded-lg overflow-auto ">
          <img
            src={loginImg}
            alt="Team collaboration in modern office"
            className="w-full h-full object-cover"
          />
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default Login;
