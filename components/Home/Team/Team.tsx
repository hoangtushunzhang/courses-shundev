import BoxText from "@/components/Helper/BoxText";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
        {/* {Text content} */}
        <div className="lg:col-span-2">
          <BoxText>Đội ngũ TechDev</BoxText>
          <h1 className="mt-4 text-xl md:text-2xl font-bold text-gray-800">
            Đội ngũ tài năng, nhiệt huyết và sáng tạo.
          </h1>
          <p className="mt-4 text-gray-700 font-medium">
            Đội ngũ TechDev được tạo ra từ những người trẻ trung, nhiệt huyết và
            sáng tạo. Với sứ mệnh mang lại giá trị cho khách hàng, chúng tôi
            luôn nỗ lực hết mình để phát triển và hoàn thiện bản thân mình.
          </p>
          <Button className="mt-4 bg-green-600 hover:bg-green-800 py-5 px-3">
            Tham gia cùng chúng tôi
          </Button>
        </div>
        {/* {Image} */}
        <div className="sm:flex items-center space-y-4 sm:space-y-0 sm:space-x-4 lg:col-span-3">
          {[
            {
              src: "/images/t1.jpg",
              name: "Nguyễn Xuân Quang",
              role: "(Founder)",
            },
            { src: "/images/t2.jpg", name: "Jun Phạm", role: "(Co-Founder)" },
          ].map((member, index) => (
            <div
              key={index}
              className="relative overflow-hidden w-[300px] h-[350px] rounded-lg"
              data-aos="fade-right"
              data-aos-anchor-placement="top-center"
            >
              <div className="w-full h-full">
                <Image
                  src={member.src}
                  alt="team"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="absolute w-full h-[5rem] bottom-0 p-4 bg-rose-500 bg-opacity-90">
                <p className="text-lg text-white font-bold">{member.name}</p>
                <p className="text-gray-200">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
