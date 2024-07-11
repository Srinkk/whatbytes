import React from 'react'

const ProgressBar = ({ percentage, outColor, inColor }) => {
  return (
    <div className="flex items-center gap-3">
      <div className={`relative rounded-md h-3 flex-grow border ${outColor}`}>
        <div
          className={`absolute top-0 left-0 h-full rounded-md ${inColor}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <span className={`text-sm `}>{percentage}%</span>
    </div>
  )
}

export default ProgressBar
