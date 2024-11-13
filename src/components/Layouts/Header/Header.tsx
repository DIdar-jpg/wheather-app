import React from 'react'

import Input from './Input.tsx';
import Dropdown from './Dropdown.tsx';

const Header : React.FC = () => {
  return (
    <header className="bg-blue-50">
      <div className="container flex justify-between items-center py-8">
        <h1 className="hidden sm:inline text-xl font-medium">Wheather App</h1>
        <Input />
        <Dropdown/>
      </div>
    </header>
  )
}
export default Header