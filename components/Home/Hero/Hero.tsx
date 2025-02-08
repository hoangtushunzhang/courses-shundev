import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { BsStarHalf } from "react-icons/bs";
import { FaStar } from "react-icons/fa";

const Hero = () => {
  return (
    <div
      className='relative w-full h-[100vh] sm:h-screen bg-[url("/images/bg.png")] bg-cover bg-center 
    flex justify-center flex-col'
    >
      <div
        className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2
      gap-10"
      >
        {/* {Text Content} */}
        <div>
          <p className="text-sm sm:text-base md:text-xl font-bold text-blue-950">
            Đầu tư thông minh nhất
          </p>
          <h1
            className="text-2xl md:text-3xl lg:text-4xl mt-6 mb-6
           font-bold text-blue-950 leading-[2.5rem] md:leading-[3.5rem]"
          >
            Bắt đầu, Nâng cao và Phát triển cùng{" "}
            <span className="text-rose-700">TechDev</span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base font-medium text-gray-800">
            TechDev đồng hành cùng bạn từ những bước đầu, phát triển bền vững và
            vươn xa trong thế giới công nghệ!
          </p>
          {/* {Rating} */}
          <div className="flex sm:flex-row flex-col sm:items-center sm:space-x-10 mt-6">
            <div className="flex items-center space-x-4">
              <Image
                src="/images/google.png"
                alt="google"
                width={40}
                height={40}
              />
              <div>
                <div className="flex items-center space-x-2">
                  <h1 className="text-lg sm:text-xl md:text-2xl text-gray-700 font-bold">
                    4.5
                  </h1>
                  <div className="flex items-center">
                    <FaStar className="text-yellow-500 w-4 h-4" />
                    <FaStar className="text-yellow-500 w-4 h-4" />
                    <FaStar className="text-yellow-500 w-4 h-4" />
                    <FaStar className="text-yellow-500 w-4 h-4" />
                    <BsStarHalf className="text-yellow-500 w-4 h-4" />
                  </div>
                </div>
                <p className="text-gray-700 text-sm sm:text-base">
                  Đánh giá trên Google
                </p>
              </div>
            </div>
            <div className="flex mt-6 items-center space-x-4">
              <Image
                src="/images/linkedin.png"
                alt="linkedin"
                width={40}
                height={40}
              />
              <div>
                <div className="flex items-center space-x-2">
                  <h1 className="text-lg sm:text-xl md:text-2xl text-gray-700 font-bold">
                    4.7
                  </h1>
                  <div className="flex items-center">
                    <FaStar className="text-yellow-500 w-4 h-4" />
                    <FaStar className="text-yellow-500 w-4 h-4" />
                    <FaStar className="text-yellow-500 w-4 h-4" />
                    <FaStar className="text-yellow-500 w-4 h-4" />
                    <BsStarHalf className="text-yellow-500 w-4 h-4" />
                  </div>
                </div>
                <p className="text-gray-700 text-sm sm:text-base">
                  Đánh giá trên Linkedin
                </p>
              </div>
            </div>
          </div>
          <div
            className="mt-8 flex flex-col sm:flex-row w-fit sm:items-center
           space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Button
              className="px-10 py-6 font-bold transition 
            duration-300 bg-rose-600 rounded-md hover:bg-rose-800 ease "
            >
              Học thử miễn phí
            </Button>
            <Button
              className="px-10 py-6 font-bold transition 
            duration-300 bg-green-400 rounded-md hover:bg-green-600 ease "
            >
              Đăng ký ngay
            </Button>
          </div>
        </div>
        {/* {Image Content} */}
        <div className="mx-auto hidden xl:block">
          <Image src="/images/hero.jpg" alt="image" width={900} height={900} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
