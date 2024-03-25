import React from "react";
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import { useRecoilValue } from 'recoil';
import { currentWheather } from './Atoms';

export default function TempGr(){
  const wheatherArr = useRecoilValue(currentWheather)
  const tempData = wheatherArr[0].list.slice(0,6).map(item => {
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
        label: "Temprature per hour",
        borderColor: "#EB4C42",
        fill: true,
        lineTension: 0.5
      },
      // {
      //   data: [1216410, 1371390, 1477380],
      //   label: "Deaths",
      //   borderColor: "#ff3333",
      //   backgroundColor: "rgba(255, 0, 0, 0.5)",
      //   fill: true,
      //   lineTension: 0.5
      // }
    ]
  };

  return (
    <div className="mb-6">
      <Line
        type="line"
        width={160}
        height={60}
        options={{
      // title: {
      //   display: true,
      //   text: "COVID-19 Cases of Last 6 Months",
      //   fontSize: 20
      // },
      // legend: {
      //   display: true, //Is the legend shown?
      //   position: "top" //Position of the legend.
      // }
        }}
        data={lineChartData}
      />
    </div>
  );
}