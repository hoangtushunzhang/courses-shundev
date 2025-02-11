import { footerLinks } from "@/constant/constant";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pb-16 pt-16 " id="contact">
      <div className="w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {footerLinks.map((section, index) => (
          <div key={index} className="space-y-5">
            <h1 className="text-lg font-bold">{section.title}</h1>
            {section.links.map((link, i) =>
              typeof link === "string" ? (
                <p
                  key={i}
                  className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950"
                >
                  {link}
                </p>
              ) : (
                <p key={i} className="text-gray-800 text-sm">
                  {link.text}:{" "}
                  <span className="text-blue-950 font-bold cursor-pointer">
                    {link.value}
                  </span>
                </p>
              )
            )}
          </div>
        ))}
      </div>
      <div className="mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row items-center justify-between text-gray-600 text-sm ">
        <p className="text-center md:text-left">
          Copyright © 2024 HoangTuShunZhang. All rights reserved
        </p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span>Social:</span>
          <span className="text-gray-500 hover:text-gray-800 cursor-pointer">
            <FaFacebook />
          </span>
          <span className="text-gray-500 hover:text-gray-800 cursor-pointer">
            <FaTwitter />
          </span>
          <span className="text-gray-500 hover:text-gray-800 cursor-pointer">
            <FaInstagram />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
