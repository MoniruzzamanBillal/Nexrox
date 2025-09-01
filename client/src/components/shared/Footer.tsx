import { Facebook, Instagram, Twitter } from "lucide-react";

import {
  footerAbout,
  footerCard,
  footerCategories,
  footerSupport,
} from "@/constants/footerConst";
import { Button } from "../ui/button";
import Wrapper from "./Wrapper";

type TFooterLink = {
  title: string;
  link: string;
};

const Footer = () => {
  return (
    <div className="FooterContainer bg-prime50 text-gray-50 py-14 ">
      <Wrapper>
        {/* header section  */}
        <div className="  pb-6   ">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-semibold ">
                Reach Your Requirement Goals Right on Schedule
              </h2>
            </div>
            <div className="space-y-4 ">
              <p className="text-gray-100 ">
                Sign up, complete your profile, and start browsing projects.
                Submit proposals and communicate with clients to get hired.
              </p>
              <Button
                size={"sm"}
                className="bg-green-700 hover:bg-green-800 text-white  rounded-full text-sm font-medium  "
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>

        {/* middle footer section  */}
        <div className=" border-y border-gray-400 border-opacity-30 ">
          <div className=" mx-auto py-6 ">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Logo Section */}
              <div className="   ">
                <img
                  src="https://i.postimg.cc/fRDRWXYJ/footer-logo.png"
                  alt="image logo"
                />
              </div>

              {/* About Column */}
              <div className=" pl-10  ">
                <h3 className="font-semibold text-lg mb-4">About</h3>
                <ul className="space-y-3">
                  {footerAbout?.map((item: TFooterLink) => (
                    <li>
                      <a
                        href={item?.link}
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {item?.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Categories Column */}
              <div className="    ">
                <h3 className="font-semibold text-lg mb-4">Categories</h3>
                <ul className="space-y-3">
                  {footerCategories?.map((item: TFooterLink) => (
                    <li key={item.title}>
                      <a
                        href={item.link}
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support Column */}
              <div className="  ">
                <h3 className="font-semibold text-lg mb-4">Support</h3>
                <ul className="space-y-3">
                  {footerSupport?.map((item: TFooterLink) => (
                    <li key={item.title}>
                      <a
                        href={item.link}
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* footer bottom section  */}
        <div className="footerBottom  py-6 flex  items-center justify-between border-b border-gray-400 border-opacity-30 ">
          <div className="flex space-x-4  ">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 cursor-pointer transition-colors">
              <Facebook className="w-5 h-5 text-white" />
            </div>
            <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 cursor-pointer transition-colors">
              <Instagram className="w-5 h-5 text-white" />
            </div>
            <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 cursor-pointer transition-colors">
              <Twitter className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* footer right card section  */}
          <div className=" ">
            <h3 className="font-semibold  mb-8 ">Our Popular Post</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {footerCard?.map(
                (item: { img: string; date: string; title: string }) => (
                  <div className="flex space-x-4">
                    <div className="w-20 h-20 bg-gray-700 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item?.img}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm mb-1">{item?.date}</p>
                      <h4 className="font-semibold text-white leading-tight">
                        {item?.title}
                      </h4>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          {/*  */}
        </div>

        {/* Copyright Section */}
        <div className="">
          <div className="mx-auto pt-10 ">
            <p className="text-center text-gray-400">
              © QuantumEdge Software INC. 2025. All rights reserved.
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
