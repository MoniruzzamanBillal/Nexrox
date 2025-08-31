import { Button } from "@/components/ui/button";
import { ChevronDown, Grid3X3 } from "lucide-react";
import Wrapper from "./Wrapper";

const NavBar = () => {
  return (
    <div className="NavBarContainer bg-prime50 text-gray-50 py-4 ">
      <Wrapper>
        <div className="mx-auto ">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}

            <div className="flex items-center space-x-4">
              <div className=" w-[14rem] h-[3.3rem] ">
                <img
                  src="https://i.postimg.cc/fRDRWXYJ/footer-logo.png"
                  alt="image logo"
                  className=" w-full h-full  "
                />
              </div>

              {/* Categories Button */}
              <div className=" py-2 px-5 rounded-full cursor-pointer flex justify-between items-center  border border-green-600  text-green-500  hover:border-green-700">
                <Grid3X3 className="w-4 h-4 mr-2" />
                Categories
              </div>
            </div>

            {/* Right Navigation */}
            <div className="flex items-center space-x-6">
              <button className="flex items-center text-white hover:text-green-500 transition-colors">
                Freelancer
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>

              <button className="text-green-500 hover:text-green-400 font-medium transition-colors">
                BECOME A SELLER
              </button>

              <button className="text-white hover:text-green-500 transition-colors">
                LOGIN
              </button>

              <Button
                size="sm"
                className=" rounded-full bg-green-600 hover:bg-green-700 text-white"
              >
                Registration
              </Button>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default NavBar;
