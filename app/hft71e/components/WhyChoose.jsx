import Image from 'next/image'

function WhyChoose() {

    const list6 = [
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/730438db-bb79-43d7-0413-273cfdcddd00/public',
            name: 'कम टेस्टोस्टेरोन हॉर्मोन स्तर',
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cd3c5807-72a0-4347-205d-f2b76b080900/public',
            name: 'टेस्टोस्टेरोन का उच्चतम स्तर',
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/018413ee-5377-4b02-739c-aae07d70a700/public',
            name: 'कमजोर नसें, छोटा और ढीला लिंग',
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/5d105578-7eb0-41b6-abe7-3d5926554500/public',
            name: 'मजबूत नसों के साथ फौलादी लिंग',
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/af061102-d220-415e-0c77-9587ee25ef00/public',
            name: 'अधिकतम 2 मिनट सेक्स या कुछ झटको में स्खलन',
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e240dcba-01f7-4d3b-4e67-b39dde3f2a00/public',
            name: 'कम से कम 30-45 मिनट लगातार सेक्स',
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3288366e-ee17-4c11-edcc-813a73646c00/public',
            name: 'ऑर्गेज्म तक पहुंचने से पहले थकान लो स्टैमिना',
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/673b96ec-d765-43c7-97a9-d523e403ad00/public',
            name: 'जबरदस्त स्टैमिना थकानमुक्त जोरदार सेक्स',
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0505c1c9-16de-41d6-6c7d-7375a190b000/public',
            name: 'पतला वीर्य तथा धात संबधित यौन समस्याएं',
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6e9fdcf5-189c-4bca-ef5b-1266f4ad5700/public',
            name: ' गाढा वीर्य, सभी यौन समस्याओं से राहत',
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f3f1b94b-eb5b-4cb2-3839-0caf12105600/public',
            name: 'मानसिक तनाव और सेक्स का प्रेशर',
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/086787ff-3215-462f-2912-c24f6c5a4100/public',
            name: 'स्ट्रेस-फ्री और कॉन्फिडेंस के साथ सेक्स  ',
        },
    ]

    return (
        <div className='w-full relative'>
            <div className='relative z-10 px-3 text-center'>

                <h1 className=" sm:w-11/12 mx-auto bg-yellow-400 pt-3 pb-1 rounded-b-2xl text-xl sm:text-2xl font-bold ">Horse Fire Tablet के अद्भुत लाभ जो ग्राहक अनुभव करते है !</h1>
                <div className="py-5 ">
                    <div className="grid grid-cols-2 text-3xl mb-5 font-bold">
                        <div className="">

                            <div className="bg-white inline-block px-5 rounded-lg pt-3 ">पहले</div>
                        </div>
                        <div className="">

                            <div className="bg-white inline-block px-5 rounded-lg pt-3 ">बाद में</div>
                        </div>


                    </div>
                    <div className="text-white grid grid-cols-2 px-0 sm:px-5 text-[1.2rem] sm:text-2xl gap-2 sm:gap-5">
                        {list6.map((e, key) => {
                            return <div className="" key={key}>
                                <img src={e.image} alt="pic" className="w-20 mx-auto" width='100%' height='100%' loading='lazy' />
                                <p className="mt-3">{e.name}</p>
                            </div>
                        })}
                    </div>
                </div>
                <div className="text-center text-white font-bold fontPoppins pb-5 ">
                        <a href="#form" className="inline-block text-xl bg-gradient-to-t from-red-500 to-red-700 px-1 rounded-full py-3 pop_imagehfv">
                            <span className=" bg-gradient-to-b from-red-500 to-red-700 px-5 rounded-full py-2">ORDER NOW</span>
                        </a>
                    </div>
            </div>
            <Image src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/8528ea99-4d8e-455f-1b5d-ec9e6c646600/public' fill loading='lazy'  alt='pic' />
        </div>

    )
}

export default WhyChoose