import dynamic from "next/dynamic";
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

const Ordernow = dynamic(() => import('./OrderNow'));



const Section4 = () => {
    return (
        <section className={noto.className}>

            <div className="w-full md:w-[600px] mx-auto py-3">

                <div className='grid grid-cols-2 text-center items-center  text-white w-[90%] mx-auto font-black  text-xl sm:text-3xl'>
                    <div className="bg-red-600 pt-3 pb-1 sm:pb-0">
                        Before
                    </div>
                    <div className="bg-green-800 pt-3 pb-1 sm:pb-0">
                        After
                    </div>
                </div>


                <div className='grid grid-cols-12 px-3 my-5 text-[1.05rem] sm:text-[1.65rem]'>

                    <div className='col-span-6 font-bold text-center'>
                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/00987804-0f3a-4afd-afaa-7d171222c400/public" alt="asdasd" loading='lazy' className="mx-auto" />
                        </div>
                        <p className="my-3"> छोटा और ढीला लिंग</p>
                    </div>


                    <div className='col-span-6 font-bold text-center'>
                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ac94705b-b49b-40a1-3c94-70f2891d2300/public" alt="asdasd" loading='lazy' className="mx-auto" />
                        </div>
                        <p className="my-3"> बड़ा और सख्त लिंग </p>
                    </div>


                    <div className='col-span-6 font-bold text-center'>
                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/57361ca0-3e80-4980-85a6-fe54cac95b00/public" alt="asdasd" loading='lazy' className="mx-auto" />
                        </div>
                        <p className="my-3"> कम सेक्स अवधि</p>
                    </div>


                    <div className='col-span-6 font-bold text-center'>
                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/136cb5fb-9afb-457a-9dd8-0501a5c23900/public" alt="asdasd" loading='lazy' className="mx-auto" />
                        </div>
                        <p className="my-3">
                            नॉनस्टॉप +45 मिनट सेक्स

                            {/* 

                       */}
                        </p>


                    </div>



                    <div className='col-span-6 font-bold text-center'>
                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/df07d9cf-0e65-4bcc-037c-9873d99e8200/public" alt="asdasd" loading='lazy' className="mx-auto" />
                        </div>
                        <p className="my-3">  सेक्स के दौरान थकान</p>
                    </div>


                    <div className='col-span-6 font-bold text-center'>
                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/56756a3b-0299-458f-8e38-4481d4cedd00/public" alt="asdasd" loading='lazy' className="mx-auto" />
                        </div>
                        <p className="my-3"> उच्च एनर्जी और स्टैमिना</p>
                    </div>


                    <div className='col-span-6 font-bold text-center'>
                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b9c42946-4301-4041-a7d9-2c4e3ca72300/public" alt="asdasd" loading='lazy' className="mx-auto" />
                        </div>
                        <p className="my-3">    पानी जैसा पतला वीर्य
                        </p>
                    </div>


                    <div className='col-span-6 font-bold text-center'>
                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d5f657eb-6eb7-4901-9fb3-66198bcddd00/public" alt="asdasd" loading='lazy' className="mx-auto" />
                        </div>
                        <p className="my-3"> गाढा और उर्वरक वीर्य</p>
                    </div>


                </div>

                <Ordernow />


                <div className="bg-black text-white p-3 text-[17px] sm:text-[20px] pt-2">


                    <div className="flex flex-col justify-end items-start my-2">
                        <div className="menu-line top"></div>
                        <div className="menu-line middle"></div>
                        <div className="menu-line bottom"></div>
                    </div>

                    सोचना छोड़े ! दिल की सुने, सर्वश्रेष्ठ चुने और खुशहाली भरे सेक्स लाइफ की तरफ कदम बढ़ाये। हॉर्सफायर के इस्तेमाल से 10 लाख से ज्यादा खुशहाल पुरुषों में शामिल हो जाये और अपने महिला पार्टनर को वह सेक्स सुख दें जो वह हमेशा से चाहती है।

                    <div className="flex flex-col justify-end items-end">
                        <div className="menu-line top"></div>
                        <div className="menu-line middle"></div>
                        <div className="menu-line bottom"></div>
                    </div>
                </div>


                <section>

                    <h1 className={`${poppin.className} uppercase font-bold text-2xl text-center py-3`}>Why Men Trust Us!</h1>

                    <div className="">
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d125553c-beaf-459f-2da5-f34aa1417200/public" alt="dff" loading="lazy" />
                    </div>

                    <div className="grid grid-cols-2 gap-3 justify-center items-center my-3">
                        <div className="bg-[#9db0bf]  pt-2  font-bold md:text-lg text-center">#1 यौन श्रेणी में विक्रेता </div>
                        <div className="bg-[#9db0bf]  pt-2  font-bold md:text-lg text-center">10 दिनों की मनी बैक गारंटी</div>
                        <div className="bg-[#9db0bf]  pt-2 px-2 font-bold md:text-lg text-center">COD यानि डिलीवरी पर भुगतान</div>
                        <div className="bg-[#9db0bf]  pt-2 px-2 font-bold md:text-lg text-center">प्रीपेड आर्डर पर 10% अतिरिक्त बचत</div>
                    </div>

                    {/* <div className="font-bold text-center text-xl pt-4">
                        Flipkart,  Amazon पर उपलब्ध
                    </div>

                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/5d8ec528-006c-4b32-714e-e502aa742200/public" alt="asdfdsf" className="w-[80px] mx-auto" loading="lazy" /> */}

                </section>


            </div>
        </section>
    )
}

export default Section4