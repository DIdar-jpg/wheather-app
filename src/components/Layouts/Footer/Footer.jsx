import React from 'react'

import FooterIcons from './FooterIcons'

import { useTranslation } from 'react-i18next'

export default function Footer() {

    const [ t ] = useTranslation()

    return (
        <footer class="relative bg-blue-50 pt-4 pb-4 lg:pt-8 mt-10">
            <div className='container'>
                <div class="w-full">
                    <div className="w-full md:flex justify-between items-center">
                        <h4 class="text-base font-semibold text-blueGray-700 lg:text-3xl">{t('keep_in_touch')}</h4>
                        <h5 class="text-xs mt-2 md:mt-0 lg:text-lg">{t('find_me')}</h5>
                    </div>
                    <div class="mt-6 lg:mb-0 mb-6">
                        <FooterIcons/>
                    </div>
                </div>
                <hr class="my-6 border-blueGray-300"></hr>
                <div class="flex flex-wrap items-center md:justify-between justify-center">
                <div class="w-full px-4 mx-auto text-center">
                    <div class="text-sm font-semibold py-1">
                        Copyright &copy; {new Date().getFullYear()} Guneshev Didar
                    </div>
                </div>
                </div>
            </div>
        </footer>
    )
}
