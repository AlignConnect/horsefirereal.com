"use client";
import dynamic from 'next/dynamic';
import './components/home.css'
import { useEffect } from 'react';


const Header = dynamic(() => import('./components/Header'), {
    loading: () => <p>loader</p>
});

const Kadva_sach = dynamic(() => import('./components/Kadva_sach'), {
    loading: () => <p>loader</p>
});

const Trusted_factors = dynamic(() => import('./components/Trusted_factors'), {
    loading: () => <p>loader</p>
});

const Hft_work = dynamic(() => import('./components/Hft_work'), {
    loading: () => <p>loader</p>
});

const Health_expert = dynamic(() => import('./components/Health_expert'), {
    loading: () => <p>loader</p>
});

const Visesh_suvidha = dynamic(() => import('./components/Visesh_suvidha'), {
    loading: () => <p>loader</p>
});

const Form = dynamic(() => import('./components/Form'), {
    loading: () => <p>loader</p>
});

const CustomerYoutube = dynamic(() => import('./components/CustomerYoutube'), {
    loading: () => <p>loader</p>
});

const CustomerReview = dynamic(() => import('../hfo/component/CustomerReview'), {
    loading: () => <p>loader</p>
});

const Footer = dynamic(() => import('../commonUse/Footer'), {
    loading: () => <p>loader</p>
});


const FooterPopup = dynamic(() => import('../commonUse/bottompopup/BottomHandler'), {
    loading: () => <p>loader</p>
});


function page() {

    useEffect(() => {
        localStorage.setItem("PATH_KEY", "/hfa");
    }, []);



    return (
        <div className='bg-black'>

            <Header />

            <Kadva_sach />

            <Trusted_factors />

            <Hft_work />

            <Health_expert />

            <Visesh_suvidha />

            <Form />

            <CustomerYoutube />

            <CustomerReview />

            <Footer />
            
            <FooterPopup />

        </div>
    )
}

export default page