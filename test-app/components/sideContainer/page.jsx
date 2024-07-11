import React from "react";
import Image from "next/image";
import dashboard from "../../assets/dashboard.svg";
import skill_test from "../../assets/skill_test.svg";
import internship from "../../assets/internship.svg";

const SideContainer = () => {
  const sidecomponents = [
    {
      name: "Dashboard",
      value: dashboard,
    },
    {
      name: "Skill Test",
      value: skill_test,
    },
    {
      name: "Internship",
      value: internship,
    },
  ];
  return (
    <div className=" h-full  px-7 mt-10 py-2 flex flex-col gap-[20px] border-r">
      {sidecomponents.map((item, index) => (
        <div className="flex flex-row items-center gap-[1.75rem]" key={index}>
          <Image src={item.value} alt="dashboard" width={30} height={30} />
          <span className="font-semibold">{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default SideContainer;
