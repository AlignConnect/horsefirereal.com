"use client";
import dynamic from 'next/dynamic';
import { useEffect } from 'react';


const Section1 = dynamic(() => import('./components/Section1'), {
    loading: () => <p>loader</p>
});



const FlipAmazon = dynamic(() => import('./components/FlipAmazon'), {
    loading: () => <p>load</p>
});

const Section2 = dynamic(() => import('./components/Section2'), {
    loading: () => <p>load</p>
});

const Section3 = dynamic(() => import('./components/Section3'), {
    loading: () => <p>load</p>
});

const Section4 = dynamic(() => import('./components/Section4'), {
    loading: () => <p>load</p>
});

const Section5 = dynamic(() => import('./components/Section5'), {
    loading: () => <p>load</p>
});

const Section6 = dynamic(() => import('./components/Section6'), {
    loading: () => <p>load</p>
});



const Section7 = dynamic(() => import('./components/Section7'), {
    loading: () => <p>load</p>
});

const Form = dynamic(() => import('./components/Form'), {
    loading: () => <p>load</p>
});

const CustomerReview = dynamic(() => import('./components/CustomerReview'), {
    loading: () => <p>load</p>
});

const Footer = dynamic(() => import('../commonUse/Footer'), {
    loading: () => <p>load</p>
})

const FooterPoput = dynamic(() => import('../commonUse/bottompopup/BottomHandler'), {
    loading: () => <p>load</p>
});


function page() {

    useEffect(() => {
        localStorage.setItem("PATH_KEY", "/hfv");
    }, []);



    return (

        <div className='w-full fontNoto overflow-hidden'>

            <div className='w-full bg-white text-black mb-[4rem] sm:mb-0'>

                <Section1 />

                <Section2 />

                <Section3 />

                <Section4 />

                <Section5 />

                <Section6 />

                <Form />

                <CustomerReview />


                {/* 

                


                <FlipAmazon />



                <FlipAmazon />


                <FlipAmazon />


                <FlipAmazon />

                <Section6Sub />

                <FlipAmazon />

                <Section7 />

*/}

                <Footer />

                <FooterPoput />

            </div>

        </div>

    )
}
export default page;