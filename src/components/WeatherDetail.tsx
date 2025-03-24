import React from 'react'
import TempChart from "./TempChart.tsx";

const WeatherDetail: React.FC = () => {
  return (
    <section className='lg:flex justify-between'>
      <TempChart/>
    </section>
  )
}

export default WeatherDetail




// export default function WheatherDetail() {
//   return (
//     <section className='lg:flex justify-between'>
//       <TempChart/>
//       <DaysForcast/>
//     </section>
//   )
// }