import React from 'react'
import TempChart from "./TempChart";
import DaysForcast from './DaysForcast/DaysForcast';
export default function WheatherDetail() {
  return (
    <section className='lg:flex justify-between'>
      <TempChart/>
      <DaysForcast/>
    </section>
  )
}
