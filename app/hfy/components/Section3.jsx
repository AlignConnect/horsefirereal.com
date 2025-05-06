import Image from "next/image";

const Section3 = () => {

    const Intrest = [{
        title: 'लम्बा, मोटा फौलादी लिंग',
        image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/bf1615dd-2868-41ea-c3f2-a6c879a21500/public'
    },
    {
        title: '45 मिनट से ज़्यादा सेक्स अवधि',
        image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4b6db023-c222-42d7-7aee-3f3eb4e34500/public'
    }, {
        title: 'जोरदार इरेक्शन जो घंटो बना रहे',
        image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4e7ecfe8-aa2e-4b6f-98af-343f6f3c8500/public'
    }, {
        title: 'जोश, उत्तेजना और इच्छा में वृद्धि',
        image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cc3cf590-6fbe-4b19-af86-ec92a136d100/public'
    }]

    return (
        <div className='w-full relative text-white'>

            <div className="relative z-10 max-w-6xl mx-auto ">
                <div className=" grid grid-cols-6 sm:gap-2 ">
                    <div className="col-span-3 sm:col-span-4 sm:pt-10">

                        <h1 className="italic text-3xl md:text-5xl font-bold fontPoppins sm:block hidden ">क्या आप ये चाहते है?</h1>

                        <div className="grid grid-cols-1 sm:grid-cols-2 py-2 sm:py-7 gap-x-4 gap-y-2 md:gap-y-4 text-center">
                            {Intrest.map((e, key) => {
                                return <div className="" key={key}>
                                    <img src={e.image} alt="pic" className="w-10/12 sm:w-11/12 mx-auto border border-white" loading="lazy" />

                                    <p className="mt-2 sm:mt-4 text-[4.2vw] sm:text-2xl">{e.title}</p>
                                </div>
                            })}
                        </div>
                    </div>
                    <div className="col-span-3 sm:col-span-2 mt-auto h-full sm:h-fit">

                        <h1 className="italic text-[7.85vw] mr-5 font-bold fontPoppins sm:hidden block mb-1 sm:mb-10 text-center">क्या आप ये चाहते है?</h1>

                        <img src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d14f8107-36f1-460b-8748-5b7192ada800/public' alt="pic" className="w-full h-5/6 sm:h-fit" loading="lazy" />


                    </div>

                </div>
            </div>
            <Image src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3fce3cb5-6bbf-4e0c-53e4-4f35a2075700/public' fill alt="bg" className="absolute top-0 z-0" />

        </div>
    )
}
export default Section3;