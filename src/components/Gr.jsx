import React from "react";
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';


export default function Gr(){
  const lineChartData = {
    labels: ["6pm", "9pm", "12pm", "15pm", "18pm"],
    datasets: [
      {
        data: [6, 7, 8, 4, 10],
        label: "Infected",
        borderColor: "#3333ff",
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
  );
}