import React from 'react'

import { Noto_Serif_Devanagari, Poppins } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const poppin = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});



const OrderBtn = () => {
    return (
        <div className={poppin.className}><div className="text-center text-white font-bold fontPoppins">
            <a href="#form" className="inline-block bg-gradient-to-t from-red-500 to-red-700 px-1 rounded-full py-2 my-2 pop_imagehfv">
                <span className=" bg-gradient-to-b from-red-500 to-red-700 px-5 rounded-full py-2">ORDER NOW</span>
            </a>
        </div></div>
    )
}

export default OrderBtn