import MenuFooter from '@/components/MenuFooter'
import React from 'react'

const Footer = () => {
    return (
        <footer className='px-5'>
            <h4 className='uppercase text-primary-500 text-2xl font-bold'>morent</h4>
            <p className='font-medium text-secondary-300 w-10/12 py-3 '>Our vision is to provide convenience and help increase your sales business.</p>
            <div className='flex flex-wrap justify-between mt-12'>
                <div className='w-8/12'>
                    <h5 className='text-xl text-secondary-500 mb-4'>About</h5>
                    <div className='space-y-5 flex flex-col'>
                        <MenuFooter href='/' itemMenu='How it works' />
                        <MenuFooter href='/' itemMenu='Featured' />
                        <MenuFooter href='/' itemMenu='Partnership' />
                        <MenuFooter href='/' itemMenu='Bussiness Relation' />
                    </div>
                </div>
                <div className='w-4/12'>
                    <h5 className='text-xl text-secondary-500 mb-4'>Sosials</h5>
                    <div className='space-y-5 flex flex-col'>
                        <MenuFooter href='/' itemMenu='Discord' />
                        <MenuFooter href='/' itemMenu='Instagram' />
                        <MenuFooter href='/' itemMenu='Twitter' />
                        <MenuFooter href='/' itemMenu='Facebook' />
                    </div>
                </div>
                <div className='w-6/12 mt-10'>
                    <h5 className='text-xl text-secondary-500 mb-4'>Community</h5>
                    <div className='space-y-5 flex flex-col'>
                        <MenuFooter href='/' itemMenu='Events' />
                        <MenuFooter href='/' itemMenu='Blog' />
                        <MenuFooter href='/' itemMenu='Podcast' />
                        <MenuFooter href='/' itemMenu='Invite a friend' />
                    </div>
                </div>
            </div>
            <div>
                <div className='flex flex-wrap items-center justify-between mt-10 pb-7'>
                    <p className='text-[12px] text-secondary-500 font-semibold w-6/12'>Privacy & Policy</p>
                    <p className='text-[12px] text-secondary-500 font-semibold w-6/12 text-right'>Terms & Condition</p>
                    <p className='text-[12px] text-secondary-500 font-semibold mt-4'>©2022 MORENT. All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer