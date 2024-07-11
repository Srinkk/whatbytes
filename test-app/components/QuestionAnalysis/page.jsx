import React from 'react'
import CircleProgress from '../CircleProgress/page'

const QuestionAnalysis = ({data}) => {
const percentage = (data.correct_answers / 15) * 100
  return (
    <div className='flex flex-grow-1 md:w-[450px] flex-col border m-2   rounded-lg p-4 items-center border-slate-200 gap-[10px]'>
        <div className='flex flex-row w-full justify-between'>
            <span>Question Analysis</span>
            <span>{data.correct_answers}/15</span>
        </div>
        <span className='text-slate-500'><span className='font-bold'>You scored {data.correct_answers} questions out of 15.</span> Hence you still need improvements</span>
        <div className='flex items-center w-[100%] justify-center'>
            <CircleProgress className='w-[100%]' percentage={percentage}/>
        </div>
    </div>
  )
}

export default QuestionAnalysis