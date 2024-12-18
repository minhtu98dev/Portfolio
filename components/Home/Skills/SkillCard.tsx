import Image from "next/image";
import React from "react";
type Props = {
  skill: {
    id: number;
    title: string;
    image: string;
    percent: string;
  };
};
const SkillCard = ({ skill }: Props) => {
  const { image, percent, title } = skill;
  return (
    <div className="p-6 hover:bg-blue-900 duration-300 transition-all bg-gray-900 cursor-pointer rounded-lg text-center">
      <Image
        src={image}
        alt={title}
        height={80}
        width={80}
        className="object-cover mx-auto"
      />
      <h1 className="text-lg mt-4 text-white font-semibold">{title}</h1>
      <div className="bg-black mt-4 rounded-lg text-white opacity-40 p-2">
        {percent}
      </div>
    </div>
  );
};

export default SkillCard;
