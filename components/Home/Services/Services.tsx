import BoxText from "@/components/Helper/BoxText";
import React from "react";
import { FaBriefcase, FaChess, FaRocket, FaShoppingCart } from "react-icons/fa";
import { IoColorPaletteOutline } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";

const Services = () => {
  return (
    <div className="pt-16 pb-16" id ="services">
      <div className="w-[80%] mx-auto">
        <BoxText> Dịch vụ của chúng tôi</BoxText>
        {/* {Heading} */}
        <h1 className="mt-4 text-2xl md:text-3xl font-bold text-gray-800">
          Bạn muốn sử dụng dịch vụ liên quan đến?
        </h1>
        <p className="mt-4 w-full sm:w-[80%] md:w-[70%] lg:e-[60%] xl:w-[50%] text-gray-600">
          Chúng tôi cung cấp các dịch vụ liên quan đến công nghệ thông tin, giúp
          bạn giải quyết các vấn đề một cách nhanh chóng và hiệu quả nhất.
        </p>
        {/* {Grid} */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-center gap-y-12 mt-16">
          {/* {1st box} */}
          <div
            className="flex items-center space-x-5"
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
          >
            <div className="w-24 h-14 rounded-md flex items-center justify-center bg-pink-500 flex-col bg-opacity-20">
              <FaRocket className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <p className="text-lg font-bold text-gray-700">Start Up</p>
              <p className="text-sm text-gray-600">
                Khởi nghiệp là một quá trình không hề dễ dàng, thử thách và gian
                truân trong những bước đầu.
              </p>
            </div>
          </div>
          {/* {2st box} */}

          <div
            className="flex items-center space-x-5"
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
          >
            <div className="w-24 h-14 rounded-md flex items-center justify-center bg-pink-500 flex-col bg-opacity-20">
              <FaBriefcase className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <p className="text-lg font-bold text-gray-700">Bussiness</p>
              <p className="text-sm text-gray-600">
                Kinh doanh là một lĩnh vực rộng lớn, cá lớn muốn ăn cá nhỏ thì
                hãy trở thành cá lớn.
              </p>
            </div>
          </div>
          {/* {3st box} */}

          <div
            className="flex items-center space-x-5"
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="200"
          >
            <div className="w-24 h-14 rounded-md flex items-center justify-center bg-pink-500 flex-col bg-opacity-20">
              <FaShoppingCart className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <p className="text-lg font-bold text-gray-700">E-commerce</p>
              <p className="text-sm text-gray-600">
                Trang web thương mại điện tử giúp bạn bán hàng một cách dễ dàng
                và nhanh chóng.
              </p>
            </div>
          </div>
          {/* {4st box} */}

          <div
            className="flex items-center space-x-5"
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
          >
            <div className="w-24 h-14 rounded-md flex items-center justify-center bg-pink-500 flex-col bg-opacity-20">
              <MdOutlineDesignServices className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <p className="text-lg font-bold text-gray-700">Digital Design</p>
              <p className="text-sm text-gray-600">
                Design là một phần không thể thiếu trong mỗi sản phẩm, nhu cầu
                về design ngày càng cao.
              </p>
            </div>
          </div>
          {/* {5st box} */}

          <div
            className="flex items-center space-x-5 h-full"
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="400"
          >
            <div className="w-24 h-14 rounded-md flex items-center justify-center bg-pink-500 flex-col bg-opacity-20">
              <IoColorPaletteOutline className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <p className="text-lg font-bold text-gray-700">
                Unlimited Colors
              </p>
              <p className="text-sm text-gray-600">
                Màu sắc đẹp mắt giúp sản phẩm của bạn trở nên nổi bật hơn , thu
                hút hơn.
              </p>
            </div>
          </div>
          {/* {6st box} */}

          <div
            className="flex items-center space-x-5"
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="500"
          >
            <div className="w-24 h-14 rounded-md flex items-center justify-center bg-pink-500 flex-col bg-opacity-20">
              <FaChess className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <p className="text-lg font-bold text-gray-700">
                Strategy Solution
              </p>
              <p className="text-sm text-gray-600">
                Giải pháp chiến lược giúp bạn giải quyết mọi vấn đề một cách
                nhanh chóng.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
