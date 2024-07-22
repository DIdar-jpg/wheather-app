import React from 'react'

import { useTranslation } from 'react-i18next'

export default function Input() {
  const [ t ] = useTranslation()

  return (
        <div className="relative w-3/4 sm:w-80">
            <input type="text" className="w-full p-2 pl-8 rounded border border-gray-50 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent duration-200" placeholder={t("input_text")} defaultValue="" />
            <svg className="w-4 h-4 absolute left-2.5 top-[14px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
        </div>
  )
}
