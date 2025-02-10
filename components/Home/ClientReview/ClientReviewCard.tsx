import Image from "next/image";
import React from "react";
import { BsStarHalf } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
type Props = {
  image: string;
  name: string;
  rating: string;
};

const ClientReviewCard = ({ image, name, rating }: Props) => {
  return (
    <div className="bg-white shadow-md p-8 sm:flex items-center space-x-4 sm:space-y-0 space-y-6 rounded-lg">
      {/* {Image} */}
      <div>
        <Image
          src={image}
          alt={name}
          width={350}
          height={350}
          className="rounded-lg"
        />
      </div>
      <div>
        <h1 className="text-lg font-bold text-blue-950">{name}</h1>
        <div className="flex items-center space-x-3">
          <p className="text-2xl font-bold text-orange-500">{rating}</p>
          <div className="flex items-center">
            <FaStar className="text-yellow-600 w-4 h-4" />
            <FaStar className="text-yellow-600 w-4 h-4" />
            <FaStar className="text-yellow-600 w-4 h-4" />
            <FaStar className="text-yellow-600 w-4 h-4" />
            <BsStarHalf className="text-yellow-600 w-4 h-4" />
          </div>
        </div>
        <p className="mt-2 text-base text-gray-700 font-medium">
          Những gì học được ở đây giúp tôi rất nhiều trong công việc của mình.
          Cảm ơn TechDev rất nhiều.
        </p>
      </div>
    </div>
  );
};

export default ClientReviewCard;
