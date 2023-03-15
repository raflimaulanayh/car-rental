import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image'
import Button from '@/components/Button'
import { useRouter } from 'next/router';
import { IoIosArrowDown } from 'react-icons/io'
import CarouselPopulerCar from '@/components/CarouselPopulerCar';
import Footer from '../section/Footer';
import Layout from './../../components/layout/index';

const DetailCar = () => {
    const router = useRouter();
    return (
        <Layout pageTitle="Detail Car">
            <Navbar />
            <div className='bg-[#F6F7F9] h-full px-5 py-8 mt-8'>
                <div className='bg-primary-500 flex flex-col justify-center text-white w-[327px] h-[232px] rounded-md relative'>
                    <Image src={`/assets/bg-car-payment.png`} alt='bg-aksesoris' width={327} height={232} className='absolute' />
                    <div className='mx-5'>
                        <h4 className='font-semibold mb-2 w-10/12'>Sports car with the best design and acceleration</h4>
                        <p className='font-medium text-[12px] w-8/12 mb-12'>Safety and comfort while driving a
                            futuristic and elegant sports car</p>
                    </div>
                    <div className='flex mx-auto'>
                        <Image src={`/assets/car/nissanGTR-car.png`} width={192} height={60} alt='Payment Car' className="z-10" />
                    </div>
                </div>
                <div className='pt-6 flex justify-between'>
                    <button className='bg-transparent focus:border focus:border-secondary-500 p-1 rounded-lg'>
                        <Image src="/assets/carDetail/look-body.png" alt='Image Look View' width={86} height={56} />
                    </button>
                    <button className='bg-transparent focus:border focus:border-secondary-500 p-1 rounded-lg'>
                        <Image src="/assets/carDetail/look-seat.png" alt='Image Look View' width={82} height={51} />
                    </button>
                    <button className='bg-transparent focus:border focus:border-secondary-500 p-1 rounded-lg'>
                        <Image src="/assets/carDetail/look-stir.png" alt='Image Look View' width={82} height={51} />
                    </button>
                </div>
                <div className='mt-8 bg-white rounded-md p-4'>
                    <h4 className='text-xl font-bold text-secondary-500'>Nissan GT-R</h4>
                    <div className='flex items-center'>
                        <Image src="/assets/star-rating.png" alt="Rating" width={76} height={12} />
                        <p className='ml-2 text-secondary-300 text-[12px] font-medium'>440+ Reviewer</p>
                    </div>
                    <p className='text-secondary-300 text-[12px] font-medium mt-4'>NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the race track.</p>
                    <div className='flex items-center justify-between text-[12px] font-semibold mt-4'>
                        <p className='text-secondary-300'>Type Car</p>
                        <p className='text-secondary-500'>Sport</p>
                        <p className='text-secondary-300'>Capacity</p>
                        <p className='text-secondary-500'>2 Person</p>
                    </div>
                    <div className='flex items-center justify-between text-[12px] font-semibold mt-2'>
                        <p className='text-secondary-300'>Steering</p>
                        <p className='text-secondary-500'>Manual</p>
                        <p className='text-secondary-300'>Gasoline</p>
                        <p className='text-secondary-500'>70L</p>
                    </div>
                    <div className='mt-6 flex items-center justify-between'>
                        <div>
                            <p className='font-bold text-secondary-500 text-xl'>$80.00/<span className='text-[12px] text-secondary-300'>days</span></p>
                            <p className='text-secondary-300 text-[12px] font-bold line-through'>$100.00</p>
                        </div>
                        <div>
                            <Button onClick={() => router.push('/paymentCarRental/4')} text='Rent Now' className='py-4 px-6' />
                        </div>
                    </div>
                </div>
                <div className='my-8 px-4 py-5 bg-white rounded-md shadow-md'>
                    <div className='flex items-center'>
                        <h4 className='font-semibold text-xl text-secondary-500 mr-3'>Reviews</h4>
                        <p className='py-1 px-3 bg-primary-500 text-white font-bold rounded-md flex justify-center items-center text-sm'>13</p>
                    </div>
                    <div className='py-6'>
                        <div className='flex items-center'>
                            <Image src="/assets/foto-profil.png" alt='' width={44} height={44} className='h-[50px] w-[50px]' />
                            <div className='ml-2 w-5/12'>
                                <h6 className='text-secondary-500 font-semibold'>Rafli Maulana</h6>
                                <p className='text-secondary-300 text-[12px] font-medium mt-2'>CEO at Sky Universe</p>
                            </div>
                            <div className='flex flex-col items-end w-5/12'>
                                <p className='text-end text-secondary-300 text-[12px] font-medium mb-2'>21 July 2022</p>
                                <Image src="/assets/star-rating.png" width={76} height={12} alt='Rating' />
                            </div>
                        </div>
                        <p className='text-secondary-300 text-[12px] font-medium mt-4'>We are very happy with the service from the MORENT App. Morent has a low price...</p>
                    </div>
                    <div className='py-6'>
                        <div className='flex items-center'>
                            <Image src="/assets/foto-profil.png" alt='' width={44} height={44} className='h-[50px] w-[50px]' />
                            <div className='ml-2 w-5/12'>
                                <h6 className='text-secondary-500 font-semibold'>Skylar Dias</h6>
                                <p className='text-secondary-300 text-[12px] font-medium mt-2'>CEO at Amazon</p>
                            </div>
                            <div className='flex flex-col items-end w-5/12'>
                                <p className='text-end text-secondary-300 text-[12px] font-medium mb-2'>20 July 2022</p>
                                <Image src="/assets/star-rating.png" width={76} height={12} alt='Rating' />
                            </div>
                        </div>
                        <p className='text-secondary-300 text-[12px] font-medium mt-4'>We are greatly helped by the services of the MORENT Application. Morent has a low...</p>
                    </div>
                    <div className='flex items-center justify-center space-x-2 font-medium text-secondary-300 text-sm'>
                        <p>Show All</p>
                        <IoIosArrowDown size={20} />
                    </div>
                </div>
                <div>
                    <div className='text-sm font-semibold flex items-center justify-between mt-8 mb-5'>
                        <h4 className='text-secondary-300'>Recent Car</h4>
                        <p className='text-primary-500'>View All</p>
                    </div>
                    <div className='-mx-5'>
                        <CarouselPopulerCar />
                    </div>
                </div>
                <div className='mb-10'>
                    <div className='text-sm font-semibold flex items-center justify-between mt-8 mb-5'>
                        <h4 className='text-secondary-300'>Recomendation Car</h4>
                        <p className='text-primary-500'>View All</p>
                    </div>
                    <div className='-mx-5'>
                        <CarouselPopulerCar />
                    </div>
                </div>
                <Footer />
            </div>
        </Layout>
    )
}

export default DetailCar