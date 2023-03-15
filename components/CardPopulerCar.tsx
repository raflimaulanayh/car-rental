import React from 'react'
import { FcLike } from "react-icons/fc"
import { FaGasPump } from "react-icons/fa"
import { IoCogSharp } from "react-icons/io5"
import { MdPeopleAlt } from "react-icons/md"
import Image from 'next/image'
import Button from './Button'
import { useRouter } from 'next/router';

interface Props {
    className?: string;
    title: string;
    type: string;
    img: string;
    tank: number;
    gear: string;
    seat: any;
    price: string;
    button: string;
}

const CardPopulerCar = (props: Props) => {
    const router = useRouter();
    return (
        <div className={`bg-white rounded-md shadow-md w-full mx-3 h-[280px] mb-10 p-5 ${props.className}`}>
            <div className='flex items-center justify-between'>
                <h4 className='font-semibold text-lg text-secondary-500'>{props.title}</h4>
                <FcLike size={30} />
            </div>
            <p className='text-sm text-secondary-300'>{props.type}</p>
            <div className='flex mx-auto mt-6 mb-7'>
                <Image src={props.img} alt='koenigsegg-car' width={180} height={56} className='' />
            </div>
            <div className='flex justify-between text-secondary-300 text-[12px] font-medium '>
                <span className='flex items-center mr-2'>
                    <FaGasPump size={15} className='mr-1' />
                    <p>{props.tank}L</p>
                </span>
                <span className='flex items-center mr-2'>
                    <IoCogSharp size={20} className='mr-1' />
                    <p>{props.gear}</p>
                </span>
                <span className='flex items-center'>
                    <MdPeopleAlt size={20} className='mr-1' />
                    <p>{props.seat} People</p>
                </span>
            </div>
            <div className='flex justify-between mt-7 items-center'>
                <h4 className='text-secondary-500 text-lg tracking-wide'>${props.price}/<span className="text-[12px] text-secondary-300">day</span></h4>
                <Button onClick={() => router.push(props.button)} text='Rental Now' className=' py-2 px-4' />
            </div>
        </div>
    )
}

export default CardPopulerCar