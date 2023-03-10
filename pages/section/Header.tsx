import Button from '@/components/Button'
import DateTime from '@/components/DateTime'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'
import { HiArrowsUpDown } from 'react-icons/hi2'

const Header = () => {
    return (
        <header className='px-5'>
            <Navbar />
            <div className='bg-[#54A6FF] rounded-lg h-[232px] my-10 bg-silinder relative z-10'>
                <Image src={`/assets/bg-silinder.png`} alt='img-silinder' width={400} height={400} className='absolute -z-10' />
                <h4 className='px-5 pt-5 font-semibold text-white'>The Best Platform for Car Rental</h4>
                <p className='pl-5 w-10/12 font-medium text-sm text-white pt-3 pb-4'>Ease of doing a car rental safely and reliably. Of course at a low price.</p>
                <Button text="Rental Car" className='z-30 mx-5  py-2 px-5' />
                <div className='flex justify-center pt-3'>
                    <Image src={`/assets/car/koenigsegg-car.png`} alt='koenigsegg-car' width={196} height={56} />
                </div>
            </div>
            <div className='relative space-y-5'>
                <DateTime title='Pick - Up' locationContent='Semarang' dateContent='20 July 2023' timeContent='07.00' />
                <div className='flex justify-center'>
                    <div className='bg-primary-500 hover:bg-opacity-90 p-4 flex items-center justify-center mx-auto w-16 h-16 rounded-md shadow-md absolute z-10 bottom-[137px] '>
                        <HiArrowsUpDown size={35} className='text-white' />
                    </div>
                </div>
                <DateTime title='Pick - Up' locationContent='Semarang' dateContent='21 July 2023' timeContent='01.00' />
            </div>
        </header>
    )
}

export default Header