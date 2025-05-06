import React from 'react'
import { BiSolidOffer } from "react-icons/bi";

const Header = () => {
    return (
        <section className=''>

            <div className='text-md bg-yellow-500 fontPoppins py-1 font-semibold text-center'>

                <div className="flex items-center justify-center">
                    <BiSolidOffer size={20} />

                    <div className="">
                        EXCLUSIVE OFFER AVAILABLE
                    </div>
                </div>


            </div>

            <div className="header_back_hfrtab ">


                <div className="w-full sm:max-w-6xl mx-auto">

                    <div className="grid sm:grid-cols-2 items-center justify-center sm:py-7 py-2">

                        <div className="">


                            <div className="fontJosefin font-extrabold sm:text-3xl text-xl uppercase text-center sm:text-left">
                                #india's no.1
                            </div>

                            <div className="fontBebas font-extrabold sm:text-[10rem] text-[3.6rem] text-center sm:text-left text-red-700 uppercase  leading-none title_shaddow py-2 ">
                                <div className="">
                                    horse fire <span className="text-black">tablet</span>
                                </div>
                            </div>

                            <div className="fontNoto font-extrabold sm:text-5xl text-3xl  text-center sm:text-left sm:py-5 py-1 leading-none">
                                लिंग और टाइमिंग बढ़ाने<br /> की <span className='fontMaamli italic text-[#21894a] '>Premium</span> औषधि
                            </div>

                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1c5de9e1-0820-48a1-dc1f-3fb935f5f500/public" alt="" className=' hidden sm:block w-1/2' />

                        </div>

                        <div className="">

                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2c9161b6-c1a7-4877-d1ae-f79719279600/public" alt="img" className='w-full mx-auto' />

                        </div>

                    </div>

                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1c5de9e1-0820-48a1-dc1f-3fb935f5f500/public" alt="" className='sm:hidden block w-3/4 mx-auto pb-8' />

                </div>
            </div>



        </section>
    )
}

export default Header