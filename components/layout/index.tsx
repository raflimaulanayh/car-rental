import React, { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
    children: ReactNode
    pageTitle: string
}

const Layout = (props: LayoutProps) => {
    const { children, pageTitle } = props;
    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content="Learn Typescript with next js and tailwind css" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/assets/logo-morent.png" />
            </Head>
            <div className='bg-secondary-500'>
                <div className='mx-auto max-w-sm'>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Layout