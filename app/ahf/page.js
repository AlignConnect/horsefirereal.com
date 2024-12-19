"use client";
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

function page() {


    const Header = dynamic(() => import('./components/Header'), {
        loading: () => <p>loader</p>
    });


    const Benifits = dynamic(() => import('./components/Benifits'), {
        loading: () => <p>loader</p>
    });

    const Problem = dynamic(() => import('./components/Problem'), {
        loading: () => <p>loader</p>
    });

    const Solution = dynamic(() => import('./components/Solution'), {
        loading: () => <p>loader</p>
    });

    const Result = dynamic(() => import('./components/Result'), {
        loading: () => <p>loader</p>
    });


    const Winter = dynamic(() => import('./components/Winter'), {
        loading: () => <p>loader</p>
    });


    const Form = dynamic(() => import('./components/Form'), {
        loading: () => <p>loader</p>
    });

    const OrderNow = dynamic(() => import('./components/OrderNow'), {
        loading: () => <p>loader</p>
    });

    const CustomerReview = dynamic(() => import("@/app/hfo/component/CustomerReview"), {
        loading: () => <p>loader</p>
    });

    const Footer = dynamic(() => import('@/app/commonUse/Footer'), {
        loading: () => <p>load</p>
    });


    const FooterPopup = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'), {
        loading: () => <p>load</p>
    });


    useEffect(() => {

        localStorage.setItem("PATH_KEY", "/ahf");

    }, [])



    return (
        <div>

            <Header />

            <Benifits />

            <Problem />

            <OrderNow />

            <Solution />

            <OrderNow />

            <Result />

            <Winter />

            <Form />

            <CustomerReview />

            <Footer />

            <FooterPopup />

        </div>
    )
}

export default page;