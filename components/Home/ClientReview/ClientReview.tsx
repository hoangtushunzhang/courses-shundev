import React from "react";
import ClientReviewCard from "./ClientReviewCard";

const ClientReview = () => {
  return (
    <div className="pb-16 pt-16 bg-gray-100 ">
      <h1 className="text-center text-2xl text-blue-950 font-bold">
        Feedback của Khách hàng
      </h1>
      <p className="mt-3 text-center font-medium text-gray-700 w-[90%] mx-auto sm:w-[70%] md:w-[50%]">
        Khách hàng sẽ được hỗ trợ tận tình, chu đáo và nhanh chóng. Đừng ngần
        ngại để lại phản hồi của mình về chúng tôi.
      </p>
      {/* {grid} */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mt-16 w-[80%] mx-auto">
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
          <ClientReviewCard
            image="/images/u1.jpg"
            name="HIEUTHUHAI"
            rating="4.7"
          />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <ClientReviewCard
            image="/images/u2.jpg"
            name="Ngô Kiến Huy"
            rating="4.9"
          />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <ClientReviewCard
            image="/images/u3.jpg"
            name="Ninh Dương Lan Ngọc"
            rating="4.8"
          />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <ClientReviewCard
            image="/images/u4.jpg"
            name="Khổng Tú Quỳnh"
            rating="4.9"
          />
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
