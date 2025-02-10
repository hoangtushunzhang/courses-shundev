import BoxText from "@/components/Helper/BoxText";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* {Image Content} */}
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
          <Image src="/images/about.png" alt="about" width={450} height={450} />
        </div>
        {/* {Text Content} */}
        <div>
          <BoxText> Về chúng tôi</BoxText>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-3 leading-[2.5rem] sm:leading-[3rem]">
            Tập trung phát triển bản thân và công việc của mình
          </h1>
          <p className="mt-3 leading-relaxed text-gray-700 text-sm sm:text-base">
            Tại TechDev, chúng tôi cung cấp một nền tảng giúp bạn tập trung vào
            việc phát triển bản thân và công việc của mình trong lĩnh vực công
            nghệ. Với sự hỗ trợ từ chúng tôi, bạn sẽ không bao giờ cô đơn trong
            quá trình học tập và làm việc.
          </p>
          <button className="mt-5 text-[#f68967] font-bold pb-1 border-b-2 border-[#f68967]">
            Tìm hiểu thêm &#8594;
          </button>
          <div className="mt-8 border-l-2 border-gray-200">
            <div className="ml-6 ">
              <p className="text-gray-700 font-medium">
                &quot; Ai cũng bắt đầu từ đâu đó, hãy cố gắng dù xuất phát điểm
                có bao xa. &quot;
              </p>
              <div className="flex items-center mt-3 space-x-6">
                <Image
                  src="/images/u1.jpg"
                  alt="user"
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium">HIEUTHUHAI</p>
                  <p className="text-gray-700 text-sm">
                    Nghệ sĩ đại diện @TechDev
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
