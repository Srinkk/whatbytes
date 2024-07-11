'use client'
import React, { useState } from "react";
import Modal from "@/components/modal/page";
import NavBar from "@/components/navbar/page";
import SideContainer from "@/components/sideContainer/page";
import HtmlSection from "@/components/htmlSection/page";
import QuickStatistics from "@/components/statistics/page";
import QuestionAnalysis from "@/components/QuestionAnalysis/page";
import LineChart from "@/components/graph/page";
import Syllabus from "@/components/syllabus_analysis/page";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState({
    rank: 1,
    percentile: 30, // Single percentile value
    correct_answers: 10
  });

  const dataPoints = [
    {percentile: 10, count: 4},
    {percentile: 20, count: 5},
    {percentile: 30, count: 10},
    { percentile: 60, count: 10 },
    { percentile: 70, count: 15 },
    { percentile: 80, count: 12 },
    { percentile: 85, count: 8 },  
    { percentile: 95, count: 5 },
  ]; // Example data

  return (
    <div className="bg-white flex flex-col min-h-screen relative">
      {openModal && <Modal data={data} setData={setData} setOpenModal={setOpenModal} />}
      <NavBar />
      <div className="relative flex-grow mt-[80px]">
        <div className="md:block w-[18%] hidden absolute top-0 left-0 h-full">
          <SideContainer />
        </div>
        <div className="md:ml-[22%] flex-grow">
          <div className="flex flex-col mt-5">
            <span className="mx-3 md:mx-0">Skill Test</span>
            <div className="flex flex-col h-[100vh] mt-4 md:flex-row gap-[2rem]">
              <div className="flex flex-col">
                <HtmlSection setOpenModal={setOpenModal} />
                <QuickStatistics data={data}/>
                <LineChart myPercentile={data.percentile} dataPoints={dataPoints} />
              </div>
              <div className="flex flex-col ">
                <Syllabus />
                <QuestionAnalysis data={data}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
