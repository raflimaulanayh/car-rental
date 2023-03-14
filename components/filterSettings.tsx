import React from 'react'
import MenuItemSettings from './MenuItemSettings'
import { FiX } from 'react-icons/fi'

const FilterSettings = () => {
    return (
        <div className='p-7'>
            <div>
                <h6 className='text-secondary-300 font-semibold text-[12px] py-2'>TYPE</h6>
                <div>
                    <MenuItemSettings menu='SUV' />
                    <MenuItemSettings menu='Sport' />
                    <MenuItemSettings menu='MPV' />
                    <MenuItemSettings menu='Sedan' />
                    <MenuItemSettings menu='Coupe' />
                    <MenuItemSettings menu='Hatchback' />
                </div>
            </div>
            <div>
                <h6 className='text-secondary-300 font-semibold text-[12px] pt-7 pb-2'>CAPACITY</h6>
                <div>
                    <MenuItemSettings menu='2 Person' />
                    <MenuItemSettings menu='4 Person' />
                    <MenuItemSettings menu='6 Person' />
                    <MenuItemSettings menu='8 or More' />
                </div>
            </div>
        </div>
    )
}

export default FilterSettings