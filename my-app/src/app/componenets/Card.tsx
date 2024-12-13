import React from 'react';
import Image from 'next/image';

interface PropsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<PropsType> = ({ title, desc, img, tags }) => {
  return (
    <div
      className="border border-accent rounded-md w-full max-w-[300px] sm:max-w-[350px] overflow-hidden shadow-lg transition-transform transform hover:scale-105"
      data-aos="zoom-out"
    >
      <div className="w-full">
        <Image
          className="w-full h-auto object-cover"
          src={img}
          width={350}
          height={350}
          alt={title}
        />
      </div>

      <div className="p-4 space-y-4">
        <div className="text-2xl sm:text-3xl font-semibold text-green-500">{title}</div>
        <div className="text-gray-300 text-sm sm:text-base">{desc}</div>
        <div className="flex flex-wrap gap-2">
          {tags.map((el) => (
            <span
              className="bg-yellow-400 text-gray-900 text-xs sm:text-sm px-3 py-1 rounded-full"
              key={el}
            >
              {el}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
