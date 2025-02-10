import Image from "next/image";
import React from "react";
import { MdOutlineTouchApp } from "react-icons/md";

const Feature = () => {
  return (
    <div className="pt-16 pb-16 bg-gray-100">
      <div>
        <h1 className="text-center text-2xl text-blue-950 font-bold ">
          Các khóa học nổi bật
        </h1>
        <p className="mt-3 text-center font-medium text-gray-700 w-[90%] mx-auto sm:w-[70%] md:w-[50%]">
          Tất cả các khóa học luôn được các học viên đánh giá cao về chất lượng
          giảng dạy và sự hỗ trợ nhiệt tình từ đội ngũ giảng viên.
        </p>
      </div>
      {/* {Main grid} */}
      <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
        {/* {Inner grid} */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* {1st box} */}
          <div
            className="bg-white p-4 rounded-lg"
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-pink-500 bg-opacity-20">
                <MdOutlineTouchApp className="w-6 h-6 text-pink-400" />
              </div>
              <h1 className="text-lg font-bold text-gray-700">
                App Integration
              </h1>
            </div>
            <p className="mt-3 mb-3 text-gray-700 leading-relaxed">
              Chúng tôi có nhiều năm kinh nghiệm trong lĩnh vực này và chúng tôi
              biết những gì cần thiết để mang lại cho bạn những kiến thức cần
              thiết.
            </p>
          </div>
          {/* {2st box} */}
          <div
            className="bg-white p-4 rounded-lg"
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="100"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-pink-500 bg-opacity-20">
                <MdOutlineTouchApp className="w-6 h-6 text-pink-400" />
              </div>
              <h1 className="text-lg font-bold text-gray-700">
                Workflow Builder
              </h1>
            </div>
            <p className="mt-3 mb-3 text-gray-700 leading-relaxed">
              Hãy để chúng tôi giúp bạn xây dựng một quy trình làm việc hiệu
              quả. Khả năng tương tác với các ứng dụng khác nhau tạo nên một
              liên kết chặt chẽ.
            </p>
          </div>
          {/* {3st box} */}
          <div
            className="bg-white p-4 rounded-lg"
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="200"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-pink-500 bg-opacity-20">
                <MdOutlineTouchApp className="w-6 h-6 text-pink-400" />
              </div>
              <h1 className="text-lg font-bold text-gray-700">
                Problem Solution
              </h1>
            </div>
            <p className="mt-3 mb-3 text-gray-700 leading-relaxed">
              Kỹ năng giải quyết vấn đề là một trong những kỹ năng quan trọng
              nhất. Rèn luyện kỹ năng này ngay từ bây giờ, bạn sẽ không còn đắn
              đo với bất kỳ vấn đề nào.
            </p>
          </div>
          {/* {4st box} */}
          <div
            className="bg-white p-4 rounded-lg"
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-3xl flex items-center justify-center flex-col bg-pink-500 bg-opacity-20">
                <MdOutlineTouchApp className="w-6 h-6 text-pink-400" />
              </div>
              <h1 className="text-lg font-bold text-gray-700">
                Lifetime Access
              </h1>
            </div>
            <p className="mt-3 mb-3 text-gray-700 leading-relaxed">
              Học bất cứ lúc nào, bất cứ nơi nào và truy cập mãi mãi. Đừng lo
              lắng về việc học của bạn sẽ bị gián đoạn. Chúng tôi sẽ giúp bạn
              giữ kỷ luật.
            </p>
          </div>
        </div>
        {/* {Image Content} */}
        <div data-aos="fade-left"
            data-aos-anchor-placement="top-center"
            data-aos-delay="400">
          <Image src="/images/f1.png" alt="feature" width={700} height={700} />
        </div>
      </div>
    </div>
  );
};

export default Feature;
