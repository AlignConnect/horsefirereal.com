"use client"
import { useEffect } from 'react';
import './beta.css'
import dynamic from "next/dynamic"

const Header = dynamic(() => import('./component/Header'), {
    loading: () => <p>loader</p>
});

const TopRating = dynamic(() => import('./component/TopRating'), {
    loading: () => <p>loader</p>
});

const Hard = dynamic(() => import('./component/Hard'), {
    loading: () => <p>loader</p>
});

const Servedata = dynamic(() => import('./component/Servedata'), {
    loading: () => <p>loader</p>
});
const Bharat = dynamic(() => import('./component/Bharat'), {
    loading: () => <p>loader</p>
});

const Usedto = dynamic(() => import('./component/Usedto'), {
    loading: () => <p>loader</p>
});


const Formdata = dynamic(() => import('./component/FormData'), {
    loading: () => <p>loader</p>
});


const CustomerReview = dynamic(() => import('./component/CustomerReview'), {
    loading: () => <p>loader</p>
});



const Footer = dynamic(() => import('@/app/commonUse/Footer'), {
    loading: () => <p>loader</p>
});

const Footerp = dynamic(() => import('@/app/commonUse/bottompopup/BottomHandler'), {
    loading: () => <p>loader</p>
});

const Ordernow = dynamic(() => import('./component/OrderNow'), {
    loading: () => <p>loader</p>
})

const page = () => {


    useEffect(() => {
        localStorage.setItem("PATH_KEY", "/hftbet")
    }, [])

    const resolvedProm = Promise.resolve(33);
    console.log(resolvedProm);


    return (
        <section>

            <Header />
            <TopRating />
            <Ordernow />

            <Hard />

            <Servedata />
            <Ordernow />

            <Bharat />
            <Ordernow />

            <Usedto />
            <Formdata />
            <CustomerReview />
            <Footer />
            <Footerp />


        </section>
    )
}

export default page