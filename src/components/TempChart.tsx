import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

import { useTranslation } from 'react-i18next';
import { UseWeather } from '../hooks/UseWeather.ts';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);

interface TempData {
  temp: number;
  time: string;
}

const TempChart: React.FC = () => { 
  const [t] = useTranslation();
  const { data } = UseWeather();
  
  const [windowSize, setSize] = useState<number>(window.innerWidth);
  const [chartHeigth, setChartHeight] = useState<number>(windowSize >= 1024 ? 400 : 200);

  useEffect(() => {
    const handleResize = () => setSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    windowSize >= 1024 ? setChartHeight(400) : setChartHeight(200) 
    console.log(chartHeigth)
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
    <div className="temp-chart mb-6 w-full h-auto overflow-x-scroll whitespace-nowrap">
      <h2 className="text-2xl mb-5 font-medium">{t('temp_chart')}</h2>
      <Line
        options={{
          maintainAspectRatio: true,
          responsive: false,
          plugins: {
            legend: { display: false },
          },
          scales: {
            x: { 
              type: "category", // Явно указываем, что используем категориальную шкалу
              ticks: { font: { size: 14 } }
            },
            y: { ticks: { font: { size: 14 } } }
          }
        }}
        width={1700}
        height={chartHeigth}
        // updateMode="resize"
        data={lineChartData}
      />
    </div>
  );
};

export default TempChart;
