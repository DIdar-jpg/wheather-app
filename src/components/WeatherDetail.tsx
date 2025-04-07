import React from 'react'
import TempChart from "./TempChart.tsx";
import { useTranslation } from 'react-i18next';

// import TempChart2 from './TempChart2.tsx'
const WeatherDetail: React.FC = () => {
  const [t] = useTranslation();
  return (
    <section className=''>
      <h2 className="text-2xl mb-5 font-medium">{t('temp_chart')}</h2>
      <TempChart/>
      {/* <TempChart2/> */}
    </section>
  )
}

export default WeatherDetail


