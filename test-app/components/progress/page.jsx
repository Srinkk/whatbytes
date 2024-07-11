import React from 'react'

const ProgressBar = ({ percentage, outColor, inColor }) => {
  return (
    <div className="flex items-center gap-3">
      <div className={`relative rounded-md h-3 flex-grow border bg-${outColor}`}>
        <div
          className={`absolute top-0 left-0 h-full rounded-md bg-${inColor}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <span className={`text-sm text-${inColor}`}>{percentage}%</span>
    </div>
  )
}

export default ProgressBar
