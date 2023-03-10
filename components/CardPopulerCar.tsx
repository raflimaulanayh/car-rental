import React from 'react'
import { FcLike } from "react-icons/fc"
import { FaGasPump } from "react-icons/fa"
import { IoCogSharp } from "react-icons/io5"
import { MdPeopleAlt } from "react-icons/md"
import Image from 'next/image'
import Button from './Button'

interface Props {
    className?: string;
}

const CardPopulerCar = (props: Props) => {
    return (
        <div className={`bg-white rounded-md shadow-md w-[240px] p-5 ${props.className}`}>
            <div className='flex items-center justify-between'>
                <h4 className='font-semibold text-lg text-secondary-500'>Koenigsegg</h4>
                <FcLike size={30} />
            </div>
            <p className='text-sm text-secondary-300'>Sport</p>
            <div className='flex mx-auto mt-6 mb-7'>
                <Image src={`/assets/car/koenigsegg-car.png`} alt='koenigsegg-car' width={180} height={56} className='' />
            </div>
            <div className='flex justify-between text-secondary-300 text-[12px] font-medium '>
                <span className='flex items-center mr-2'>
                    <FaGasPump size={15} className='mr-1' />
                    <p>90L</p>
                </span>
                <span className='flex items-center mr-2'>
                    <IoCogSharp size={20} className='mr-1' />
                    <p>Manual</p>
                </span>
                <span className='flex items-center'>
                    <MdPeopleAlt size={20} className='mr-1' />
                    <p>2 People</p>
                </span>
            </div>
            <div className='flex justify-between mt-7 items-center'>
                <h4 className='text-secondary-500 text-lg tracking-wide'>$99.00/<span className="text-[12px] text-secondary-300">day</span></h4>
                <Button text='Rental Now' className=' py-2 px-4' />
            </div>
        </div>
    )
}

export default CardPopulerCar