import Image from 'next/image'
import React from 'react'
import { FcLike } from 'react-icons/fc'
import { FaGasPump } from 'react-icons/fa';
import { IoCogSharp } from 'react-icons/io5';
import { MdPeopleAlt } from 'react-icons/md';
import { dataRecomendation } from '@/pages/api/data';
import { useRouter } from 'next/router';

const DetailCari = ({ params }: { params: { slug: string } }) => {
    const router = useRouter();
    const { id: any } = router.query;
    const data = dataRecomendation;
    return (
        <>
            {data.map((item: any, index: number) => (
                <div key={index} className='bg-white rounded-md shadow-md p-5'>
                    <div className='flex justify-between items-center'>
                        <h4 className='text-secondary-500 text-lg font-semibold'>{item.title}</h4>
                        <FcLike size={30} />
                    </div>
                    <p className='text-secondary-300 font-medium text-[12px]'>{item.type}</p>
                    <div className='flex justify-between items-center'>
                        <Image src={item.img} width={221} alt='gaj' height={70} className='mt-7 mb-9' />
                        <div className='flex flex-col space-y-4 text-secondary-300 text-[12px] font-medium '>
                            <span className='flex items-center'>
                                <FaGasPump size={15} className='mr-1' />
                                <p>{item.tank}</p>
                            </span>
                            <span className='flex items-center -ml-1'>
                                <IoCogSharp size={20} className='mr-1' />
                                <p>{item.gear}</p>
                            </span>
                            <span className='flex items-center'>
                                <MdPeopleAlt size={20} className='mr-1' />
                                <p>{item.seat} People</p>
                            </span>
                        </div>
                    </div>
                    <div className='flex items-center justify-between mt-3'>
                        <h4 className='text-secondary-500 tracking-wide'>${item.price}/<span className="text-[12px] text-secondary-300">day</span></h4>
                    </div>
                </div>
            ))}
        </>
    )
}
export default DetailCari