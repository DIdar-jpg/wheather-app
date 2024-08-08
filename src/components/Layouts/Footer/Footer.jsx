import React from 'react'

import FooterIcons from './FooterIcons'

import { useTranslation } from 'react-i18next'

export default function Footer() {

    const [ t ] = useTranslation()

    return (
        <footer className="relative bg-blue-50 pt-4 pb-4 lg:pt-8 mt-10">
            <div className='container'>
                <div className="w-full">
                    <div className="w-full md:flex justify-between items-center">
                        <h4 className="text-base font-semibold text-blueGray-700 lg:text-3xl">{t('keep_in_touch')}</h4>
                        <h5 className="text-xs mt-2 md:mt-0 lg:text-lg">{t('find_me')}</h5>
                    </div>
                    <div className="mt-6 lg:mb-0 mb-6">
                        <FooterIcons/>
                    </div>
                </div>
                <hr className="my-6 border-blueGray-300"></hr>
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full px-4 mx-auto text-center">
                    <div className="text-sm font-semibold py-1">
                        Copyright &copy; {new Date().getFullYear()} Guneshev Didar
                    </div>
                </div>
                </div>
            </div>
        </footer>
    )
}
