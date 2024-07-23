import React from 'react'

import { IoIosArrowForward } from "react-icons/io";

import { useTranslation } from 'react-i18next'

export default function Dropdown() {
  const langs = ['EN', 'DE', 'RU']

  const [ t, i18n ] = useTranslation()

  const changeLang = (language) => { 
    console.log(language)
    i18n.changeLanguage(language)
  }
  return (
    <>
        <button className="relative group transition-all duration-300 focus:overflow-visible w-max h-max p-2 overflow-hidden flex flex-row items-center justify-center bg-white gap-2 rounded-lg border border-zinc-200">
        <span>EN</span>
        <IoIosArrowForward className='duration-300 group-focus:rotate-90'/>
        <div className="absolute z-10	shadow-lg -bottom-40 left-0 w-full h-max p-2 bg-white border border-zinc-200 rounded-lg flex flex-col gap-2">
            {langs.map( lang => <span onClick={() => { changeLang(lang.toLocaleLowerCase()) }} className="flex flex-row gap-2 items-center hover:bg-zinc-100 p-2 rounded-lg"><p>{lang}</p></span>)}
        </div>
        </button>
    </>
  )
}
