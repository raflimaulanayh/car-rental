import CardRecomendation from '@/components/CardRecomendation'
import React from 'react'
import Button from '@/components/Button'

const Recomendation = () => {
    return (
        <section className='pb-7 px-5 space-y-6'>
            <h2 className='text-secondary-300 my-7 font-semibold'>Recomendation Car</h2>
            <CardRecomendation />
            <div className='flex justify-around py-10'>
                <Button text='Show More Car' className='py-2 px-4' />
                <p className='text-secondary-300 w-3/12 text-right'>30 Car</p>
            </div>
        </section>
    )
}

export default Recomendation