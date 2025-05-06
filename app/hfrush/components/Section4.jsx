import dynamic from 'next/dynamic';

const FormRedirect = dynamic(() => import('./FormRedirect'), {
    loading: () => <p>load</p>
});



const Section4 = () => {


    const paraList = ["#1 यौन श्रेणी में विक्रेता", "10 दिनों की मनी बैक गारंटी", "COD यानि डिलीवरी पर भुगतान", "प्रीपेड आर्डर पर 10% अतिरिक्त बचत", "Flipkart, Amazon पर उपलब्ध"]


    return (
        <div className="">
            <div className="relative text-white">
                <div className="relative z-10 ">
                    <div className="max-w-7xl mx-auto px-3 py-7 sm:py-14 ">

                        <p className=" text-[2.1rem] sm:text-5xl lg:text-6xl font-bold text-center mb-3 sm:mb-7 leading-tight"><span className="fontPoppins uppercase">Horse Fire Tablet</span>  की गोली </p>
                        <div className="grid grid-cols-2 gap-5 sm:gap-10 items-center lg:text-2xl">


                            <div className="grid sm:grid-cols-2 items-center gap-3 sm:gap-5" >
                                <img src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ad83d641-a5e0-42c1-415c-01e03133b900/public' alt="pic" className="" width='100%' height='100%' loading="lazy" />
                                <div className="">
                                    <p className='font-bold !leading-none mb-2 text-2xl lg:text-3xl xl:text-[2.5rem]'><span className="text-red-600">लिंग की सख्ती</span> और <span className="text-yellow-400">साइज बढ़ाये</span></p>
                                    <p className="">नसों को पम्प करके, रक्त संचार बेहतर करके साइज और शक्ति बढ़ाए </p>
                                </div>
                            </div>
                            <div className="grid sm:grid-cols-2 items-center gap-3 sm:gap-5" >
                                <img src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/10743c92-66cd-4fdd-f89f-259b52b9e300/public' alt="pic" className="" width='100%' height='100%' loading="lazy" />
                                <div className="">
                                    <p className='font-bold !leading-none mb-2 text-2xl lg:text-3xl xl:text-[2.5rem]'><span className="text-red-600">सेक्स टाइम</span> 1 घंटे <span className="text-yellow-400">से ज्यादा करे</span></p>
                                    <p className="">मानसिक शक्ति बढ़ाकर, कण्ट्रोल क्षमता बढ़ाये और शीघ्रपतन रोके</p>

                                </div>
                            </div>
                            <div className="grid sm:grid-cols-2 items-center gap-3 sm:gap-5" >
                                <img src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/44556576-f42b-4656-8ff0-a100e4ae6e00/public' alt="pic" className="" width='100%' height='100%' loading="lazy" />
                                <div className="">
                                    <p className='font-bold !leading-none mb-2 text-2xl lg:text-3xl xl:text-[2.5rem]'><span className="text-red-600">शरीर में स्टैमिना</span> और <span className="text-yellow-400">एनर्जी बढ़ाये</span></p>
                                    <p className="">टेस्टोस्टेरोन हॉर्मोन बूस्ट करे, बॉडी को नॉरिश करें और शक्ति बढ़ाएं</p>
                                </div>
                            </div>
                            <div className="grid sm:grid-cols-2 items-center gap-3 sm:gap-5" >
                                <img src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a7337321-08e4-4555-dae8-e49e1a669600/public' alt="pic" className="" width='100%' height='100%' loading="lazy" />
                                <div className="">
                                    <p className='font-bold !leading-none mb-2 text-2xl lg:text-3xl xl:text-[2.5rem]'><span className="text-red-600">जोश और उत्तेजना</span> का <span className="text-yellow-400">स्तर बढ़ाये</span></p>
                                    <p className="">इसमें मिश्रित कामोत्तेजक गुणों वाली जड़ीबूटियां जोश और उत्तेजना बढाए</p>
                                </div>
                            </div>

                        </div>


                        <div className="sm:pt-5">
                            <FormRedirect />
                        </div>
                    </div>
                </div>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1008f103-30e0-4def-6b63-2d6adb77b500/public" alt="img11" className="absolute top-0 left-0 h-full" width='100%' height='100%' />
            </div>


            <div className=" py-7 md:py-14 relative">

                <div className="max-w-4xl mx-auto relative z-10">
                    <h1 className="uppercase text-3xl leading-tight font-black mb-5 text-center sm:hidden px-3 text-[yellow]">Why Men Trust Horse Fire</h1>

                    <div className='grid grid-cols-12 gap-2 sm:gap-5 items-center sm:items-center ps-2 pe-3 sm:px-5'>
                        <img src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b244909c-275c-4068-655b-0c1ece909b00/public' alt="pic" width='100%' height='100%' loading='lazy' className='col-span-4 sm:col-span-3' />
                        <div className="col-span-8 sm:col-span-9">
                            <h1 className="uppercase text-4xl leading-tight text-[yellow] font-black mb-8 hidden sm:block">Why Men Trust Horse Fire</h1>
                            <div className="space-y-5  text-white  text-[1.01rem] sm:text-xl lg:text-2xl ">
                                {paraList.map((e, key) => {
                                    return <p className="bg-red-600 rounded-tr-xl px-2 sm:px-5 sm:pt-3 pt-2 " key={key}>{e}</p>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/505da454-e184-48e2-d98e-fccc1e640900/public" alt="img11" className="absolute top-0 left-0 h-full" width='100%' height='100%' />
            </div>
        </div>
    )
}
export default Section4;