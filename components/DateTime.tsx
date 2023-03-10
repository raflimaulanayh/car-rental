import React from 'react'

interface Props {
    title: string;
    locationContent: string
    dateContent: string;
    timeContent: string;
}

const DateTime = (props: Props) => {
    return (
        <div className='bg-white rounded-lg shadow-md p-5'>
            <div className='flex items-center'>
                <input type="radio" placeholder='none' className='mr-3' />
                <h4 className='text-xl'>{props.title}</h4>
            </div>
            <div className='flex justify-between pt-6'>
                <div className='border-r border-secondary-200'>
                    <h4 className='mr-4 text-lg'>Locations</h4>
                    <p className='mr-4 mt-2 text-sm font-medium text-secondary-400'>{props.locationContent}</p>
                </div>
                <div className='border-r border-secondary-200'>
                    <h4 className='mr-4 text-lg'>Date</h4>
                    <p className='mr-4 mt-2 text-sm font-medium text-secondary-400'>{props.dateContent}</p>
                </div>
                <div className=''>
                    <h4 className='text-lg'>Time</h4>
                    <p className='mr-4 mt-2 text-sm font-medium text-secondary-400'>{props.timeContent}</p>
                </div>
            </div>
        </div>
    )
}

export default DateTime