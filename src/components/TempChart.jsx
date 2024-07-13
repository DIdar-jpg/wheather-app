import React from "react";
import { useState, useEffect } from 'react';
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import { useRecoilValue } from 'recoil';
import { currentWheather } from './Atoms.js';

export default function TempChart(){
  const wheatherArr = useRecoilValue(currentWheather)
  const [ windowSize, SetSize ] = useState(window.innerWidth )
  const tempData = wheatherArr[0].list.slice(0,30).map(item => {
    return {
      temp: item.main.temp,
      time: +(item.dt_txt[11] + item.dt_txt[12]) > 9 ? `${item.dt_txt[11]}${item.dt_txt[12]}` : item.dt_txt[12]
    }
  })
  const lineChartData = {
    labels: tempData.map( item =>  item.time > 12 ? item.time + 'pm' : item.time + 'am'),
    datasets: [
      {
        data: tempData.map( item =>  item.temp),
        borderColor: "rgba(96, 165, 250, 1)",
        backgroundColor: "rgba(96, 165, 250, 0.2)",
        fill: true,
        lineTension: 0.5
      },
    ]
  };
  useEffect( () => {window.addEventListener('resize', () => { SetSize(window.innerWidth )})})

  return (
    <>
      {/* <h2 className="text-2xl mb-5 font-medium">Temprature Chart</h2> */}
      <div className="temp-chart mb-6 w-full h-auto overflow-x-scroll whitespace-nowrap lg:w-[55%] lg:mb-0 xl:w-[65%]">
        <h2 className="text-2xl mb-5 font-medium">Temprature Chart</h2>
        <Line
          type="line"
          options={{
            maintainAspectRatio: true,
            responsive: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            font: {
              size: 30
            }
            
          }}
          width={1700}
          height={ windowSize >= 1024 ? 400 : 200}
          data={lineChartData}
        />
      </div>
    </>
  );
}