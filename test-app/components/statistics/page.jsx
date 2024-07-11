import React from "react";
import Image from "next/image";
import trophy from "../../assets/trophy.svg";
import correct from "../../assets/correct.svg";
import percentile from "../../assets/percentile.svg";

const QuickStatistics = ({data}) => {
  return (
    <div className="flex flex-col border m-2  rounded-lg p-3  border-slate-200 gap-[10px]">
      <span className="font-semibold">Quick Statictics</span>
      <div className="flex flex-row px-3 py-2 ">
        <div className="flex flex-row gap-[10px] items-center">
            <div className="bg-slate-200 rounded-full md:p-3">
                <Image src={trophy} alt="trophy" width={20} height={20} />
            </div>
            <div className="flex flex-col">
                <span className="font-bold text-lg">{data.rank}</span>
                <span className="text-[12px] text-slate-500">YOUR RANK</span>
            </div>
        </div>
        <div className="border-l border-slate-200 h-[70px] mx-6"></div>
        <div className="flex flex-row gap-[10px] items-center">
            <div className="bg-slate-200 rounded-full md:p-3">
                <Image src={percentile} alt="trophy" width={20} height={20} />
            </div>
            <div className="flex flex-col">
                <span className="font-bold text-lg">{data.percentile}</span>
                <span className="text-[12px] text-slate-500">PERCENTILE</span>
            </div>
        </div>
        <div className="border-l border-slate-200 h-[70px] mx-6"></div>
        <div className="flex flex-row gap-[10px] items-center">
            <div className="bg-slate-200 rounded-full md:p-3">
                <Image src={correct} alt="trophy" width={20} height={20} />
            </div>
            <div className="flex flex-col">
                <span className="font-bold text-lg">{data.correct_answers} / 15</span>
                <span className="text-[12px] text-slate-500">CORRECT ANSWERS</span>
            </div>
        </div>

      </div>
    </div>
  );
};

export default QuickStatistics;
