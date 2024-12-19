import dynamic from 'next/dynamic';
import React from 'react'


const MostSelling = dynamic(() => import('@/app/commonUse/mostSelling/most_selling_2'), {
    loading: () => <p>loader</p>
});

const Static = () => {
    return (
        <section className='bg-white'>


            <div className="w-full sm:max-w-6xl mx-auto sm:py-10 py-3">

                <div className="grid sm:grid-cols-2 items-center justify-center ">

                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/80144cc0-5a11-43a2-1ec0-b7fdc881dd00/public" alt="" className='w-full px-2 order-2 sm:order-1' />

                    <div className="order-1 sm:order-2">


                        <div className="sm:flex sm:flex-col items-center justify-center sm:px-0 px-2 pt-5">
                            <h1 className="sm:text-6xl text-4xl fontJosefin font-bold text-black">
                                HORSE FIRE <span className="block">TABLET</span>
                            </h1>
                            <div className="mt-4 fontNoto sm:text-4xl text-4xl font-extrabold text-red-600">
                                से मिलता हैं 100 फीसदी <span className="block">सटिस्फैक्शन</span>
                            </div>
                        </div>

                    </div>

                </div>


                <div className=" sm:py-5 py-2">


                    <div className="fontNoto bg-yellow-400 sm:text-4xl text-2xl text-center sm:pt-6 pb-2 pt-5 mx-auto font-bold my-3">
                        जानिए <span className='fontJosefin'>HORSEFIRE TABLET</span> के सराहनीय परिणाम!
                    </div>


                    <div className="fontNoto text-3xl sm:text-4xl text-black font-extrabold  text-center mt-10 px-2">
                        <span className='text-red-600 sm:text-5xl text-4xl'>असली</span> बढ़त, लिंग के साइज़<br /> में <span className='text-red-600 sm:text-5xl text-4xl'>40% तक बढ़त</span>
                    </div>

                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d1824e67-178d-4d98-c588-cd48cc2a3000/public" alt="" className='sm:w-1/2 w-5/6 mx-auto mt-6' />



                    <p className="text-black sm:pt-22 pb-8 pt-16 mt-2 bg-yellow-400 text-[1.6rem] sm:text-4xl  clippath_confidence_1 fontNoto  sm:leading-relaxed font-extrabold  sm:px-5 px-3 ">
                        <span className='fontJosefin'>HORSEFFIRE TABLET</span> के इस्तेमाल करने के बाद न सिर्फ <span className='text-red-600'>लंबाई</span> बल्कि <span className='text-red-600'>मोटाई </span> भी बढ़ जाती है।
                    </p>


                    <div className="fontNoto sm:text-xl text-[1.1rem] px-2 pt-6 text-justify font-semibold">
                        इसके इस्तेमाल से जिनका 2-3 मिनट में वीर्य निकल जाता था अब उनका घंटों तक सेक्स का खेल चलता हैं वो भी नॉनस्टॉप !! इससे आपके सेक्स करने का अंदाज बदल जाता है और सेक्सुअल लाइफ में बहार आ जाती है।

                    </div>

                </div>





            </div>

            <div className="am_bg">
                <div className="w-full sm:max-w-6xl  mx-auto sm:py-7 py-3">


                    <div className="grid sm:grid-cols-1 gap-2 items-center justify-center ">


                        <MostSelling />

                        <div className="">


                            

                        </div>

                    </div>
                </div>
            </div>


        </section >
    )
}

export default Static