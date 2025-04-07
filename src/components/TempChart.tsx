import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from 'chart.js';

import { UseWeather } from '../hooks/UseWeather.ts';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);

interface TempData {
  temp: number;
  time: string;
}

const TempChart: React.FC = () => { 
  const { data } = UseWeather();
  
  const [windowSize, setSize] = useState<number>(window.innerWidth);
  const [chartHeigth, setChartHeight] = useState<number>(windowSize >= 1024 ? 400 : 300);

  useEffect(() => {
    const handleResize = () => setSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    windowSize >= 1024 ? setChartHeight(400) : setChartHeight(300) 
    return () => window.removeEventListener('resize', handleResize);
  }, [windowSize]);

  const tempData: TempData[] = data.list.slice(0, 30).map((item) => ({
    temp: item.main.temp,
    time: +item.dt_txt.slice(11, 13) > 9 ? item.dt_txt.slice(11, 13) : item.dt_txt[12]
  }));

  const lineChartData = {
    labels: tempData.map(item => `${item.time}${+item.time >= 12 ? 'pm' : 'am'}`),
    datasets: [
      {
        data: tempData.map(item => item.temp),
        borderColor: "rgba(96, 165, 250, 1)",
        backgroundColor: "rgba(96, 165, 250, 0.2)",
        fill: true,
        tension: 0.5
      },
    ],
  };

  return (
    <div className="temp-chart mb-6 w-full overflow-x-scroll" style={{ height: chartHeigth}}>
      <Line
        options={{
          responsive: true, // включаем адаптивность
          maintainAspectRatio: false, // позволяет нам контролировать высоту вручную
          plugins: {
            legend: { display: false },
          },
          scales: {
            x: { 
              type: "category",
              ticks: { font: { size: 14 } }
            },
            y: { 
              ticks: { font: { size: 14 } }
            }
          }
        }}
        height={chartHeigth} // мы оставляем высоту, она может быть разной для desktop/mobile
        data={lineChartData}
      />

    </div>
  );
};

export default TempChart;
