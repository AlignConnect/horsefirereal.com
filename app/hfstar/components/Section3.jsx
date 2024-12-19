import dynamic from 'next/dynamic';


const FormRedirect = dynamic(() => import('./FormRedirect'), {
    loading: () => <p>load</p>
});

const Section3 = () => {

    return (
        <div className=" w-full py-5 md:py-10 px-3 relative text-white">

            <div className="relative z-10 max-w-3xl mx-auto ">

                <div className="text-4xl sm:text-[4.5vw] font-extrabold text-center leading-tight ">
                    <h1 className="">हॉर्सफायर: भारत का</h1>
                    <h1 className="text-[#dbf500]">No.1 सेक्सवर्धक</h1>
                </div>
                <div className="mt-[3vw] mb-[1vw] grid gap-10 text-[1rem] sm:text-xl lg:text-3xl">
                    <div className="grid grid-cols-12 gap-3 items-center">
                        <div className="col-span-6 sm:col-span-5">
                            <div className="parallelogram-container">
                                <div className="parallelogram"></div>
                                <div className="small-parallelogram">
                                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/086984e1-e194-4ef2-589b-9e308985f300/public" alt="pic" width='100%' height='100%' loading='lazy' />
                                </div>
                            </div>
                        </div>

                        <div className="col-span-6 sm:col-span-7">
                            <p className="text-[#19e4ad] font-extrabold text-[1.5rem] sm:text-5xl">+1-2 घंटे टाइमिंग बढ़ाए</p>
                            <p className="sm:mt-3">टाइमिंग के निम्नतम स्तर को उच्चतम स्तर पर ले जाये</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-3 items-center">
                        <div className="col-span-6 sm:col-span-7">
                            <p className="text-[#19e4ad] font-extrabold text-[1.5rem] sm:text-5xl">लिंग साइज बढ़ाए</p>
                            <p className="sm:mt-3">छटे लिंग को 8-9 इंच लम्बा-मोटा और फौलादी बनाए</p>
                        </div>
                        <div className="col-span-6 sm:col-span-5">
                            <div className="parallelogram-container1">
                                <div className="parallelogram1"></div>
                                <div className="small-parallelogram1">
                                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/770bf5e3-85f2-4235-4763-09f6fd55d700/public" alt="pic" width='100%' height='100%' loading='lazy' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-3 items-center">
                        <div className="col-span-6 sm:col-span-5">
                            <div className="parallelogram-container">
                                <div className="parallelogram"></div>
                                <div className="small-parallelogram">
                                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cc7cd247-c2d6-44bc-d7eb-13bcaf534300/public" alt="pic" width='100%' height='100%' loading='lazy' />
                                </div>
                            </div>
                        </div>

                        <div className="col-span-6 sm:col-span-7">
                            <p className="text-[#19e4ad] font-extrabold text-[1.5rem] sm:text-5xl">लिंग को कड़क बनाये</p>
                            <p className="sm:mt-3">स्खलन पश्चात ढीले लिंग को रॉड सा कड़क बनाए</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-3 items-center">
                        <div className="col-span-6 sm:col-span-7">
                            <p className="text-[#19e4ad] font-extrabold text-[1.5rem] sm:text-5xl">एनर्जी और पावर बढ़ाए</p>
                            <p className="sm:mt-3">कमजोरी मिटाकर शरीर को एक्टिव व जोशीला बनाए</p>
                        </div>
                        <div className="col-span-6 sm:col-span-5">
                            <div className="parallelogram-container1">
                                <div className="parallelogram1"></div>
                                <div className="small-parallelogram1">
                                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/473fdfeb-3515-4c29-01a4-2c1d9689fe00/public" alt="pic" width='100%' height='100%' loading='lazy' />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="sm:pt-5">
                    <FormRedirect />
                </div>
            </div>
            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/7f078560-b13e-47d1-7bd8-8ae10153e400/public" alt="img11" className="absolute top-0 left-0 h-full" width='100%' height='100%' loading='lazy' />
        </div>
    )
}
export default Section3;