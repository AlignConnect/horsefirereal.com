import dynamic from 'next/dynamic';
import React from 'react'
import './components/home.css'


const Header = dynamic(() => import("./components/Header"), {
    loading: () => <p>Loading...</p>,
});

const Footer = dynamic(() => import("./components/footer"), {
    loading: () => <p>Loading...</p>,
});

const page = () => {
    return (
        <div className='bg-black min-h-screen'>
            <section className='max-w-xl mx-auto relative -top-2'>

                <Header />

                <Footer />

            </section>
        </div>
    )
}

export default page