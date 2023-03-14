import React from 'react'
import Image from 'next/image'

const PaymentCarRental = () => {
    return (
        <>
            <section className='bg-[#F6F7F9] h-full'>
                <nav className='flex bg-white justify-between items-center py-7 px-5'>
                    <div className='text-primary-500 uppercase font-semibold text-2xl'>
                        MORENT
                    </div>
                    <div>
                        <Image src={`/assets/foto-profil.png`} alt='Foto Profil' width={30} height={30} />
                    </div>
                </nav>
                <div className='px-5 py-7'>
                    <div className='bg-white h-full rounded-md px-5 py-6'>
                        <h4 className='font-bold text-secondary-500 text-lg'>Rental Summary</h4>
                        <p className='font-medium text-secondary-300 text-[12px]'>Prices may change depending on the length of the rental and the price of your rental car.</p>
                        <div className='flex items-center justify-between mt-6 '>
                            <div className='bg-primary-500 w-[148px] h-[80px] rounded-md flex justify-center items-center relative overflow-hidden'>
                                <Image src={`/assets/bg-car-payment.png`} alt='bg-aksesoris' width={148} height={80} className='absolute' />
                                <Image src={`/assets/car/nissanGTR-car.png`} width={102} height={32} alt='Payment Car' />
                            </div>
                            <div>
                                <h3 className='font-bold text-xl text-secondary-500 mb-2'>Nissan GT - R</h3>
                                <Image src={`/assets/star-rating.png`} alt='' width={76} height={12} />
                                <p className='font-medium text-[12px] tracking-wider mt-1 text-[#3D5278] '>440+ Reviewer</p>
                            </div>
                        </div>
                        <div className='w-full mt-6 mb-4 border-b border-[#C3D4E9] h-2'></div>
                        <div>
                            <div className='flex items-center justify-between'>
                                <p className='text-secondary-300 font-semibold text-[12px] tracking-[-1%]'>Subtotal</p>
                                <p className='text-lg font-semibold text-secondary-500'>$80.00</p>
                            </div>
                            <div className='flex items-center justify-between mt-3'>
                                <p className='text-secondary-300 font-semibold text-[12px] tracking-[-1%]'>Tax</p>
                                <p className='text-lg font-semibold text-secondary-500'>$0</p>
                            </div>
                        </div>
                        <form className='bg-[#F6F7F9] flex items-center px-4 py-2 rounded-md justify-between mt-6'>
                            <input placeholder='Apply promo code' type='text' className='bg-transparent outline-none text-secondary-300 text-[12px] font-medium' />
                            <button className='bg-transparent outline-none text-secondary-500 text-[12px] font-semibold '>Apply Now</button>
                        </form>
                        <div className='flex items-center justify-between mt-6'>
                            <div>
                                <p className='text-lg text-secondary-500 font-semibold tracking-[-1%]'>Total Rental Price</p>
                                <p className='text-[12px] text-secondary-300'>Overall price rental</p>
                            </div>
                            <p className='text-secondary-500 text-xl font-bold -tracking-wide '>$80.00</p>
                        </div>
                    </div>
                    <div className='bg-white h-full mt-7 rounded-md px-5 py-6'>
                        <div className='flex justify-between'>
                            <div className=''>
                                <h4 className='text-lg text-secondary-500 font-bold -tracking-wide'>Billing Info</h4>
                                <p className='text-[12px] text-secondary-300 font-medium'>Please enter your billing info</p>
                            </div>
                            <p className='text-[12px] text-secondary-300 font-medium'>Step 1 of 4</p>
                        </div>
                        <form>
                            <div className='flex flex-col mt-6'>
                                <label htmlFor="name" className='text-sm text-secondary-500 font-semibold'>Name</label>
                                <input type="text" placeholder='Your name' className='text-[12px] rounded-md font-semibold text-secondary-300 outline-none bg-[#F6F7F9] px-6 py-3 mt-3' />
                            </div>
                            <div className='flex flex-col mt-6'>
                                <label htmlFor="Address" className='text-sm text-secondary-500 font-semibold'>Address</label>
                                <input type="text" placeholder='Address' className='text-[12px] rounded-md font-semibold text-secondary-300 outline-none bg-[#F6F7F9] px-6 py-3 mt-3' />
                            </div>
                            <div className='flex flex-col mt-6'>
                                <label htmlFor="Phone" className='text-sm text-secondary-500 font-semibold'>Phone Number</label>
                                <input type="text" placeholder='Phone Number' className='text-[12px] rounded-md font-semibold text-secondary-300 outline-none bg-[#F6F7F9] px-6 py-3 mt-3' />
                            </div>
                            <div className='flex flex-col mt-6'>
                                <label htmlFor="Town/City" className='text-sm text-secondary-500 font-semibold tracking-wider'>Town/City</label>
                                <input type="text" placeholder='Town or city' className='text-[12px] rounded-md font-semibold text-secondary-300 outline-none bg-[#F6F7F9] px-6 py-3 mt-3' />
                            </div>
                        </form>
                    </div>
                    <div className='bg-white h-full mt-7 rounded-md px-5 py-6'>
                        <div className='flex justify-between'>
                            <div className=''>
                                <h4 className='text-lg text-secondary-500 font-bold -tracking-wide'>Rental Info</h4>
                                <p className='text-[12px] text-secondary-300 font-medium'>Please select your rental date</p>
                            </div>
                            <p className='text-[12px] text-secondary-300 font-medium'>Step 2 of 4</p>
                        </div>
                        <form>
                            <div className='flex flex-col mt-6'>
                                <label htmlFor="name" className='text-sm text-secondary-500 font-semibold'>Locations</label>
                                <input type="text" placeholder='Your name' className='text-[12px] rounded-md font-semibold text-secondary-300 outline-none bg-[#F6F7F9] px-6 py-3 mt-3' />
                            </div>
                            <div className='flex flex-col mt-6'>
                                <label htmlFor="Address" className='text-sm text-secondary-500 font-semibold'>Time</label>
                                <input type="text" placeholder='Address' className='text-[12px] rounded-md font-semibold text-secondary-300 outline-none bg-[#F6F7F9] px-6 py-3 mt-3' />
                            </div>
                            <div className='flex flex-col mt-6'>
                                <label htmlFor="Phone" className='text-sm text-secondary-500 font-semibold'>Date</label>
                                <input type="text" placeholder='Phone Number' className='text-[12px] rounded-md font-semibold text-secondary-300 outline-none bg-[#F6F7F9] px-6 py-3 mt-3' />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PaymentCarRental