import React from 'react'

import Input from './Input';
export default function Header() {
  return (
    <header className="container flex justify-between items-center py-5">
        <h1 className="text-xl font-medium">Wheather App</h1>
        <Input />
        <button className="w-[30px] h-[30px] bg-black"></button>
    </header>
  )
}
