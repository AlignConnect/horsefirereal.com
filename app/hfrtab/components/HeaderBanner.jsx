import React from 'react'

const HeaderBanner = () => {
    return (
        <section className='bg-white'>
            <div className="bg-orange-700  text-white py-5 flex items-center justify-between">

                <div className="w-full sm:max-w-6xl mx-auto grid sm:grid-cols-3 justify-center items-center ">

                    <div className='flex items-center py-1'>
                        <span className="font-bold sm:text-6xl text-4xl">NO.1</span>
                        <span className="ml-3 sm:text-xl text-[1.1rem] fontJosefin">Male Enhancement Product</span>
                    </div>

                    <div className='flex items-center py-1'>
                        <span className="font-bold sm:text-6xl text-3xl">99.8%</span>
                        <span className="ml-2 sm:text-xl text-[1.1rem] fontJosefin">Over all Success Ratings</span>
                    </div>


                    <a href='#form' className="bg-yellow-400 fontJosefin sm:text-xl text-center text-black font-extrabold pt-2 pb-1 mt-3 sm:mt-0 px-4 rounded w-1/2 mx-auto box_shaddow">
                        BUY NOW
                    </a>

                </div>

            </div>


            <div className="w-full sm:max-w-4xl mx-auto py-7 sm:py-10">

                <div className="grid sm:grid-cols-2 items-center justify-center bg-[#fbf7f4] mx-2 py-3 rounded-xl box_shaddow">

                    <div className="">
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4616a459-8aa2-428e-2f3c-f1cedde27000/public" alt="Couple" className=" sm:w-2/3 w-[90%] mx-auto py-3" />
                    </div>


                    <div className="">
                        <div className=" sm:py-3 ">

                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/7fbe888a-3a70-4d34-995f-70cc440a8800/public" alt="" className='sm:w-24 w-10 px-1' />

                            <div className='text-[1.1rem] md:text-2xl fontNoto sm:py-10 py-3 font-semibold text-center sm:text-left'>
                                आजकल के अधिकांश कपल्स अपनी सेक्शुअल लाइफ को इंजॉय नहीं कर पाते हैं, वजह हैं पुरुषों में सेक्स पावर की कमी। पुरुष तमाम सेक्स कमजोरी महसूस करते हैं?
                            </div>

                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/7fbe888a-3a70-4d34-995f-70cc440a8800/public" alt="" className='sm:w-24 px-1 w-10 scale-x-[-1] scale-y-[-1] ms-auto mr-2' />

                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default HeaderBanner