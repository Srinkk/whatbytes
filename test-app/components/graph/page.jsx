// components/LineChart.js
'use client';
import React, { useMemo } from 'react';
import { LineChart as MuiLineChart } from '@mui/x-charts/LineChart';

const LineChart = ({ myPercentile, dataPoints }) => {
  const percentiles = dataPoints.map(dp => dp.percentile);
  const counts = dataPoints.map(dp => dp.count);

  const mySeriesData = useMemo(() => 
    percentiles.map(p => (p === myPercentile ? counts[percentiles.indexOf(p)] : null)), 
    [myPercentile, percentiles, counts]
  );

  return (
    <div className='flex flex-row border m-2 rounded-lg p-3 items-center border-slate-200 gap-[10px]'>
      <MuiLineChart
        key={myPercentile} // Ensure re-render when myPercentile changes
        xAxis={[{ data: percentiles }]}
        yAxis={[{ data: counts }]}
        series={[
          {
            label: "Number of Students",
            data: counts,
          },
          {
            label: 'My Percentile',
            data: mySeriesData,
            color: 'red', // Different color for your percentile
          },
        ]}
        width={500}
        height={300}
      />
    </div>
  );
};

export default LineChart;
