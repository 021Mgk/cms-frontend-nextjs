
import React from 'react'
import Head from 'next/head'
import NavBar from './NavBar'
import Footer from './Footer'


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Head>
                <title>Create MGK App</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
            </Head>
            <NavBar />
            <div className="content">

                {children}

            </div>
            <Footer />
        </>
    )
}
