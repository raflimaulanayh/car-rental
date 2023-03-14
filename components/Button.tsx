import React from 'react'

interface Props {
    text: string;
    className?: string
    onClick: () => void;
}

const Button = (props: Props) => {
    return <button onClick={() => props.onClick()} className={`cursor-pointer text-[12px] rounded-md bg-primary-500 hover:bg-primary-400 text-white font-semibold ${props.className}`}>{props.text}</button>
}

export default Button