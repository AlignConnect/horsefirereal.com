"use client"
import dynamic from 'next/dynamic';
import React, { useEffect } from 'react'
import './components/home.css'


const Header = dynamic(() => import('./components/Header'), {
    loading: () => <p>loader</p>
});

const HeaderBanner = dynamic(() => import('./components/HeaderBanner'), {
    loading: () => <p>loader</p>
});


const Zero_risk = dynamic(() => import('./components/Zero_risk'), {
    loading: () => <p>loader</p>
});

const Performence_issue = dynamic(() => import('./components/Performence_issue'), {
    loading: () => <p>loader</p>
});

const Women_need = dynamic(() => import('./components/Women_need'), {
    loading: () => <p>loader</p>
});


const Static = dynamic(() => import('./components/Static'), {
    loading: () => <p>loader</p>
});


const Form = dynamic(() => import('./components/Form'), {
    loading: () => <p>loader</p>
});

const CustomerReview = dynamic(() => import('./components/CustomerReview'), {
    loading: () => <p>loader</p>
});

const Footer = dynamic(() => import("@/app/commonUse/Footer"), {
    loading: () => <p>loader</p>
});


const FooterPopup = dynamic(() => import("@/app/commonUse/bottompopup/BottomHandler"), {
    loading: () => <p>loader</p>
});


const page = () => {

    useEffect(() => {
        localStorage.setItem("PATH_KEY", "/hfrtab");
    }, []);

    return (
        <section className=''>

            <Header />

            <HeaderBanner />

            <Performence_issue />

            <Women_need />

            <Static />

            <Zero_risk />

            <Form />

            <CustomerReview />

            <Footer />

            <FooterPopup />

        </section>
    )
}

export default page