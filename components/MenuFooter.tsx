import React from 'react'
import Link from 'next/link'

interface Props {
    href: string;
    itemMenu: string;
}

const MenuFooter = (props: Props) => {
    return <Link className='text-secondary-300 font-medium text-[16px] ' href={props.href}>{props.itemMenu}</Link>
}

export default MenuFooter