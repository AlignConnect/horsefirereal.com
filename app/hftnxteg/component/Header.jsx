
import Image from 'next/image'
import React from 'react'


import { Noto_Sans_Devanagari } from "next/font/google";

const devanagariFont = Noto_Sans_Devanagari({
    subsets: ["devanagari", "latin"],
    weight: ["400", "700"],
    variable: "--font-devanagari",
});


const Header = () => {



    return (
        <div className={devanagariFont.variable}>


            <div className="relative w-full min-h-[110px] text-center my-8">
                <img
                    src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/90d73dc1-f50a-4ae7-9d56-c22bb4bf0500/public"
                    alt="Example Image"
                    width={400} // Set fixed width
                    height={450} // Set fixed height

                    className='mx-auto'
                />
            </div>




            <div>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1670e2a6-2704-4fa4-f6f9-cd31b6e39300/public" alt="sdsd" loading="lazy" />
            </div>


            <div className='text-yellow-400 fontPoppins font-bold text-center text-lg p-2   '>

                A powerful blend of 17 rare Ayurvedic herbs designed to make your performance stronger, longer, and more satisfying!

            </div>


            <div className="problems-container bg-white text-black !pb-8">
                <h2 className="problems-heading font-bold   anek">Problems</h2>
                <code className="problems-subtext">that affected romance</code>
            </div>

            {/* https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f4266090-b923-4851-f098-458191e2a800/public */}




            <div className='grid grid-cols-2  bg-white gap-5 p-4'>


                <div className='min-h-[200px] relative  flex items-end justify-center'>
                    <div className='absolute top-0 sm:top-0 z-10'>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f4266090-b923-4851-f098-458191e2a800/public" alt="asdad" loading='lazy' className='w-[140px]' />
                    </div>
                    <div className='min-h-[100px] sm:min-h-[120px] relative  bg-[#12566f] flex items-end justify-center text-center w-full fontPoppins font-bold text-xl sm:text-xl text-white sm:pb-3'>
                        Premature ejaculation
                    </div>
                </div>


                <div className='min-h-[200px] relative  flex items-end justify-center'>
                    <div className='absolute top-0 sm:top-0 z-10'>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b4a0af45-7521-4558-024d-71028f38e800/public" alt="asdad" loading='lazy' className='w-[140px]' />
                    </div>
                    <div className='min-h-[100px] relative  bg-[#d43532] flex items-end justify-center w-full fontPoppins text-center font-bold text-xl sm:text-xl  text-white sm:pb-3'>
                        Weak or soft erection
                    </div>
                </div>

                <div className='min-h-[200px] relative  flex items-end justify-center'>
                    <div className='absolute top-0 sm:top-0 z-10'>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d264954a-a21c-4897-1ac3-fd3ecb4ef200/public" alt="asdad" loading='lazy' className='w-[140px]' />
                    </div>
                    <div className='min-h-[100px] relative  bg-[#00abad] flex items-end justify-center w-full text-center fontPoppins font-bold text-xl sm:text-xl  text-white pb-3'>
                        Low stamina
                    </div>
                </div>






                <div className='min-h-[200px] relative  flex items-end justify-center'>
                    <div className='absolute top-0 sm:top-0 z-10'>
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cfef4056-0ab1-4835-6a1a-11cc1c6a3b00/public" alt="asdad" loading='lazy' className='w-[140px]' />
                    </div>
                    <div className='min-h-[100px] relative  bg-[#df7d00] flex items-end justify-center w-full fontPoppins text-center font-bold text-xl sm:text-xl  text-white sm:pb-3'>
                        Lack of sexual desire
                    </div>
                </div>


            </div>



            <p className='bg-white fontPoppins text-lg p-2'>
                Are you struggling in bed? Losing control within minutes, not being able to please your partner, or feeling too weak to enjoy the moment? You're not alone—millions of men face the same issues. If your erection doesn't last or you finish too soon, it’s time to fix your sexual weakness.
            </p>




            <div className='relative w-full bg-white'>
                <div className="w-full text-center absolute">
                    <h2 className="problems-heading relative -top-2 sm:top-6 anek font-bold">Solution</h2>
                    <code className="problems-subtext text-xl block relative -top-4 sm:top-6 font-light -m-3">that increase romance</code>
                </div>


                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/941bab8b-4767-47fe-99eb-c08c449a5200/public" alt="sdsd" loading='lazy' className='w-full ' />
            </div>


            <div className='text-lg fontPoppins text-white bg-red-700 px-4 pt-4 pb-2 leading-[1.4rem]'>
                The only safe and effective solution for these problems is AR Ayurveda’s Horse Fire Tablet – recommended by sexual health experts and trusted by satisfied customers across India.
                Made with powerful herbs like Ashwagandha, Shilajit, Gokshura, and Safed Musli, this formula works deeply to:
            </div>







        </div>
    )
}

export default Header
