import Link from 'next/link'
import React from 'react'

interface Props {
    menu: string;
}

const MenuItemSettings = (props: Props) => {
    return (
        <div className='flex items-center space-x-2'>
            <input type="checkbox" />
            <p>{props.menu}</p>
        </div>
    )
}

export default MenuItemSettings