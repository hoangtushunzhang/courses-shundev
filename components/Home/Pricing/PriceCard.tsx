import { Button } from "@/components/ui/button";
import React from "react";
type Props = {
  time: string;
  price: string;
};

const PriceCard = ({ time, price }: Props) => {
  return (
    <div className="bg-white rounded-lg p-8 relative border-t-4 border-rose-300">
      <h1 className="text-sky-500 text-xl font-bold">{time} thành viên</h1>
      <p className="mt-4 text-gray-600 font-medium">
        Cùng nhau đồng hành và phát triển suốt {time} với giá chỉ {price}$
      </p>
      <div className="mt-8">
        <div className="text-gray-700 font-semibold text-lg">
          <span className="text-4xl font-bold text-black">${price}</span>
        </div>
      </div>
      <Button className="mt-12 bg-[#CD009F] hover:bg-[#CD009F]/70 py-6 px-10">Nâng cấp gói</Button>
    </div>
  );
};

export default PriceCard;
