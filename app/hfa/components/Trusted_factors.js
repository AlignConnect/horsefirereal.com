function Trusted_factors() {

    const tructedData = [
        {
            id: 1,
            statement: "100% सुरक्षित",
            image: '/main/hfa_images/trust1.png'
        },
        {
            id: 2,
            statement: "COD पेमेंट",
            image: '/main/hfa_images/trust3.png'

        },
        {
            id: 3,
            statement: "मनी बैक गारंटी",
            image: '/main/hfa_images/trust5.png'

        },
        {
            id: 4,
            statement: "आयुष प्रमाणित",
            image: '/main/hfa_images/trust4.png'

        },
        {
            id: 5,
            statement: "कस्टम प्रोडक्ट",
            image: '/main/hfa_images/trust2.png'

        },
        {
            id: 6,
            statement: "ऑफिसियल वेबसाइट",
            image: '/main/hfa_images/trust6.png'

        },
    ];

    const performanceData = [
        {
            id: 1,
            statement: "सेक्स टाइम 10x बढ़ सकता है",
        },
        {
            id: 2,
            statement: "कड़कपन 2x बढ़ जाएगा",
        },
        {
            id: 3,
            statement: "लम्बाई 15 दिनों में 5CM तक बढ़ सकती है",
        },
        {
            id: 4,
            statement: "मोटाई 1.5 से 2 CM तक बढ़ सकती है",
        },
        {
            id: 5,
            statement: "4x स्टैमिना और एनर्जी बढ़ सकती है",
        },
    ];
    const modifiedPerformanceData = performanceData.map((item) => ({
        ...item,
        img: "/main/hfa_images/sparkling.png",
    }));


    return (
        <div>
            <div className="w-full max-w-3xl mx-auto">
                <div className="bg-gradient-to-b from-transparent via-[#003e42]  to-black py-3 px-[0.8rem] mt-4 ">

                    <div className="py-5 pb-4 pt-1">
                        <h1 className="bg-gradient-to-r from-cyan-200 to-yellow-400  bg-clip-text text-transparent md:text-6xl text-4xl py-2 font-bold font-noto">
                            Trusted Factors
                        </h1>

                        <div className="border-white border-solid border-2 rounded-lg">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 gap-y-4 gap-md-4 p-2 p-md-4">

                                {tructedData.map((e, key) => {
                                    return <div className="flex gap-md-3 gap-2 items-center align-middle" key={key}>
                                        <img src={e.image} alt="pic" className="w-3/12" />
                                        <h2 className="text-[0.9rem] md:text-xl font-medium text-white font-noto text-justify"> {e.statement}</h2>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center py-3">
                        <img src="/main/hfa_images/pro3.png" alt="" />
                    </div>
                    <div className=" py-4 md:px-2">
                        <ul>
                            {modifiedPerformanceData.map((item) => {
                                return (
                                    <li key={item.id} className="flex items-center pb-3 gap-2">
                                        <img src={item.img} alt="stars" className=" w-8 " />
                                        <h1 className="font-bold font-noto text-[1.2rem] text-white md:text-2xl">
                                            {item.statement}
                                        </h1>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <h1 className="text-4xl font-bold shadow-lg font-noto bg-gradient-to-r from-cyan-200 to-yellow-400  bg-clip-text text-transparent py-4 pb-md-2">
                        Horse Fire - हर पुरुष की जरुरत !
                    </h1>

                    <h2 className="text-xl font-medium text-white font-noto text-justify">
                        देखें, महिला को सेक्स में ऑर्गेज़्म सुख देने के लिए पुरुष का लिंग
                        लम्बा मोटा और सुडौल होना चाहिए। साथ ही सेक्स टाइम भी बिना झड़े 20
                        मिनट से ज्यादा होनी चाहिए। क्योंकि महिला योनि के आंतरिक हिस्से में
                        मौजूद G-SPOT पर सुडौल लिंग के लम्बे समय तक के घर्षण से ही महिलाओं को
                        ऑर्गेज़्म सुख मिलता है।
                    </h2>
                    <div className="flex justify-center mt-4">
                        <img src="/main/hfa_images/lab.jpg" alt="" className="rounded-md" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold font-noto bg-gradient-to-r from-cyan-200 to-yellow-400  bg-clip-text text-transparent shadow-xl pt-6 leading-[3rem]">
                        इस्तेमाल से होगा विश्वास
                    </h1>
                    <h2 className="text-xl font-medium text-white font-noto text-justify pt-2">
                        "काफी रिसर्चो के बाद इस फार्मूलेशन को तैयार किया है जिसे लैब
                        रिसर्च में एक्सपर्ट ने बेस्ट फार्मूलेशन बताया है। वैसे ही हम चाहते
                        है की इसकी उपयोगिता आप तय करें।" जब यह आपकी समस्या को हल करें तो आप
                        इसे बेस्ट बोले, ताकि आपके रिव्यु से दूसरे पुरुष भी जो अन्य प्रोडक्ट
                        के पीछे ठगी का शिकार हुए है वो इसे खाकर अपनी समस्या जड़ से मिटा सकें।
                    </h2>

                </div>
            </div>
        </div>
    )
}

export default Trusted_factors