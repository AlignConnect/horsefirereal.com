import Image from 'next/image'
import React from 'react'

function Header() {
    return (
        <div className='w-full relative'>
            <div className=" relative z-10 pt-5 text-center px-3 sm:px-5">
                <p className="text-[1.3rem] sm:text-3xl  text-white">जाने सेक्स टाइमिंग और लिंग साइज बढ़ाने की </p>
                <p className="inline-block bg-white fontPoppins text-3xl sm:text-5xl px-5 pt-2 sm:pt-4 font-semibold italic"><span className="font-bold text-sky-500">NO.1</span> औषधि के बारे में</p>

                <div className="flex text-[1rem] sm:text-3xl text-white items-end text-start mt-8 sm:mt-5">
                    <div className="w-[40%] sm:w-[40%] space-y-1 sm:space-y-5">
                        <p className="text-yellow-500 text-[1.2rem] sm:text-4xl w-[150%] font-extrabold">MEN'S 3 WISH</p>
                        <p className="">Stay Longer</p>
                        <p className="">Stay Harder</p>
                        <p className="">Stay Energetic</p>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c57c22fc-d280-4b40-4784-b39a8e788e00/public" alt="pic" width='100%' height='100%' fetchPriority='high' className='pt-[18vw] sm:pt-0 block'/>

                    </div>
                    <div className="w-[80%] sm:w-[60%]">
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d40c9aa1-d86b-472a-a02b-1b06c25ab000/public" alt="pic" width='100%' height='100%' fetchPriority='high'/>
                    </div>
                </div>
            </div>
            <Image src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ab43456f-e9dd-466d-05f1-ee19d6d9f800/public' fill fetchPriority='high'  alt='pic' />
        </div>
    )
}

export default Header