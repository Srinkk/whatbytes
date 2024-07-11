import React from 'react'

const CircleProgress = ({ percentage, radius = 75, strokeWidth = 10, color = 'blue' }) => {
  const normalizedRadius = radius - strokeWidth * 2
  const circumference = normalizedRadius * 2 * Math.PI
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        stroke="lightgrey"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke={color}
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeDasharray={`${circumference} ${circumference}`}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
     
    </svg>
  )
}

export default CircleProgress
