import React from 'react'

import { useTranslation } from 'react-i18next'
import { useRecoilState } from 'recoil';

import { settlementState } from '../../Atoms.js'

export default function Input() {
  const [ t ] = useTranslation()

  const [ settetState, setSettleState ] = useRecoilState(settlementState)
  
  const changeSettlement = () => { 
    const location = document.getElementById('settlement-input').value
    setSettleState(location)
  }

  return (
        <div className="relative w-3/4 sm:w-80">
            <input id='settlement-input' type="text" className="w-full p-2 pl-8 rounded border border-gray-50 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent duration-200" placeholder={t("input_text")} defaultValue="" />
            <svg className="w-4 h-4 absolute left-2.5 top-[14px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>

            <button onClick={changeSettlement} className="absolute right-3 top-[5px] py-1 px-2 bg-blue-50 rounded">
              {t('search')}
            </button>
        </div>
  )
}
