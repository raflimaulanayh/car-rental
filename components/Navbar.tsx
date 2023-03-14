import React, { useState } from 'react'
import Image from 'next/image'
import { RiSearch2Line } from 'react-icons/ri'
import { VscSettings } from 'react-icons/vsc'
import FilterSettings from './filterSettings';
import { FiX } from 'react-icons/fi'
const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);
    return (
        <div>
            <div className=''>
                <div
                    className={`fixed bg-white z-50 top-0 h-full w-full md:hidden transition-all ${sidebar ? "right-0" : "right-full"
                        }`}
                >
                    <FiX
                        onClick={() => setSidebar(false)}
                        size={35}
                        className="right-0 absolute text-right m-5 cursor-pointer"
                    />
                    <FilterSettings />
                </div>
            </div>
            <nav className='flex justify-between items-center py-7 px-5'>
                <div className='text-primary-500 uppercase font-semibold text-2xl'>
                    MORENT
                </div>
                <div>
                    <Image src={`/assets/foto-profil.png`} alt='Foto Profil' width={30} height={30} />
                </div>
            </nav>
            <div className='flex gap-5 px-5'>
                <form className='flex items-center bg-transparent border border-secondary-300 rounded-lg h-[48px] w-10/12'>
                    <RiSearch2Line size={30} className='text-secondary-400 ml-5 mr-3' />
                    <input placeholder='Search something here' type="text" className='outline-none bg-transparent mr-5' />
                </form>
                <div onClick={() => setSidebar(true)} className='flex justify-center items-center bg-transparent border border-secondary-300 rounded-lg h-[48px] w-2/12'>
                    <VscSettings size={30} className='text-secondary-400' />
                </div>
            </div>
        </div>
    )
}

export default Navbar
