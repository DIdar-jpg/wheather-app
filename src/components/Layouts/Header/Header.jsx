import React from 'react'

import Input from './Input';
import Dropdown from './Dropdown';

export default function Header() {
  return (
    <header className="bg-blue-50">
      <div className="container flex justify-between items-center py-8">
        <h1 className="text-xl font-medium">Wheather App</h1>
        <Input />
        <Dropdown/>
      </div>
    </header>
  )
}
