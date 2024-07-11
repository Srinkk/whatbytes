import React, { useState, useEffect } from "react";
import Image from "next/image";
import html_logo from "../../assets/html_logo.svg";

const Modal = ({ data, setData, setOpenModal }) => {
  const [tempData, setTempData] = useState(data);

  useEffect(() => {
    setTempData(data);
  }, [data]);

  const handleCancel = () => {
    setOpenModal(false);
  };

  const handleSave = () => {
    setData(tempData);
    setOpenModal(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-950 bg-opacity-50 z-50">
      <div className="bg-white md:w-[40%] w-[60%] flex flex-col p-4 rounded shadow-lg">
        <div className="flex flex-row items-center justify-between">
          <span className="md:text-2xl text-lg font-bold">Update Scores</span>
          <Image src={html_logo} alt="html_logo" width={40} height={40} />
        </div>
        <div className="flex flex-col gap-[20px] mt-6">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-[15px]">
              <span className="rounded-full px-2 bg-blue-950 text-white">1</span>
              <div>Update your <span className="font-bold">Rank</span></div>
            </div>
            <div className="border border-blue-950 rounded-md px-4 py-2 w-[35%]">
              <input
                type="text"
                className="bg-transparent w-full outline-none focus:ring-2 focus:ring-blue-950 rounded-md"
                value={tempData.rank}
                onChange={(e) => setTempData({ ...tempData, rank: e.target.value })}
              />
            </div>
          </div>

          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-[15px]">
              <span className="rounded-full px-2 bg-blue-950 text-white">2</span>
              <div>Update your <span className="font-bold">Percentile</span></div>
            </div>
            <div className="border border-blue-950 rounded-md px-4 py-2 w-[35%]">
              <input
                type="text"
                className="bg-transparent w-full outline-none focus:ring-2 focus:ring-blue-950 rounded-md"
                value={tempData.percentile}
                onChange={(e) => setTempData({ ...tempData, percentile: e.target.value })}
              />
            </div>
          </div>

          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-[15px]">
              <span className="rounded-full px-2 bg-blue-950 text-white">3</span>
              <div>Update your <span className="font-bold">Current Score (out of 15)</span></div>
            </div>
            <div className="border border-blue-950 rounded-md px-4 py-2 w-[35%]">
              <input
                type="text"
                className="bg-transparent w-full outline-none focus:ring-2 focus:ring-blue-950 rounded-md"
                value={tempData.correct_answers}
                onChange={(e) => setTempData({ ...tempData, correct_answers: e.target.value })}
              />
            </div>
          </div>

          <div className="flex justify-end flex-row gap-[6px]">
            <button
              className="px-5 py-2 border bg-blue-950 text-white text-sm font-semibold rounded-md"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              className="px-5 py-2 border bg-blue-950 text-white text-sm font-semibold rounded-md"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
