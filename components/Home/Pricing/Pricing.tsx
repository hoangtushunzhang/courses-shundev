import React from "react";
import PriceCard from "./PriceCard";

const Pricing = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-100" id="pricing">
      <h1 className="text-center text-2xl text-blue-950 font-bold">
        Chọn gói dịch vụ phù hợp với bạn
      </h1>
      <p className="mt-3 text-center font-medium text-gray-700 w-[90%] mx-auto sm:w-[70%] md:w-[50%]">
        Chúng tôi có các gói dịch vụ phù hợp với nhu cầu của bạn. Hãy chọn gói
        dịch vụ phù hợp với bạn nhất.
      </p>
      <div className="w-[80%] mx-auto mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center">
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
          <PriceCard time="3 Tháng" price="19.99" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <PriceCard time="12 Tháng" price="29.99" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <PriceCard time="3 Năm" price="39.99" />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
