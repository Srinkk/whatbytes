import React from 'react'
import ProgressBar from '../progress/page'

const Syllabus = () => {
  return (
    <div className='flex flex-grow-1 md:w-[450px] flex-col border m-2   rounded-lg p-4 items-start border-slate-200 gap-[10px]'>
        <span className='font-semibold'>Syllabus Wise Analysis</span>
        <div className='flex flex-col mb-10  mt-5 gap-[20px] w-[100%]'>
            <div className='flex flex-col mb-3'>
              <span className='text-slate-500 mb-3' >Html tools,Forms, History</span>
              
              <ProgressBar  percentage={80} outColor='blue-100' inColor='blue-500' />
             
            
            </div>
            <div className='flex flex-col mb-3'>
              <span className='text-slate-500 mb-3' >Tag & References in HTML</span>
              <ProgressBar  percentage={60} outColor='orange-100' inColor='orange-500' />
            </div>
            <div className='flex flex-col mb-3'>
              <span className='text-slate-500 mb-3' >Tables and References in HTML</span>
              <ProgressBar  percentage={24} outColor='red-100' inColor='red-500' />
            </div>
            <div className='flex flex-col mb-3'>
              <span className='text-slate-500 mb-3' >Table and CSS basic</span>
              <ProgressBar  percentage={96} outColor='green-100' inColor='green-500' />
            </div>
          

        </div>
    </div>
  )
}

export default Syllabus