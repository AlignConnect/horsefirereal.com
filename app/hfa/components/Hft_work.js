function Hft_work() {

    const benefits1 = [
        {
            id: 1,
            statement: "टेस्टोस्टेरोन बढ़ाए",
            description: "टेस्टोस्टेरोन लेवल बढ़ाता है जिससे शरीर में एनर्जी, स्टैमिना और लिंग में कड़कपन बढ़ जाता है।",
            url: "/main/hfa_images/testo.png"

        },
        {
            id: 2,
            statement: "टाइमिंग बढ़ाए",
            description: "दिमाग पर कण्ट्रोल बढ़ जाता है, टाइमिंग बढ़ती है और शीघ्रपतन से रिकवरी हो जाती है।",
            url: "/main/hfa_images/time.png"
        },
        {
            id: 3,
            statement: "लिंग साइज बढ़ाए",
            description: "लिंग की नसों को मजबूत करता है और तंग चमड़ी को ग्रो कर साइज में सुधार करता है।",
            url: "/main/hfa_images/ling.png"
        },
    ]

    const benefits2 = [
        {

            id: 4,
            statement: "जोश जगाए",
            description: "गोली खाने के कुछ ही देर में पुरुष जोशीले और उत्तेजित होकर सेक्स के लिए तैयार हो जाते हैं।",
            url: "/main/hfa_images/josh.png"
        },
        {
            id: 5,
            statement: "स्पर्म काउंट बढ़ाए",
            description: "पुरुषों में स्पर्म काउंट बढ़ता है, यानि की नैचुरली शुक्राणुओं की संख्या में सुधार करता है।",
            url: "/main/hfa_images/sperm.png"
        },
        {
            id: 6,
            statement: "दोबारा उत्तेजित करे",
            description: "शुरुआत में जब स्खलन होता है, तो दोबारा कुछ ही देर में लिंग सेक्स के लिए उत्तेजित हो जाता है।",
            url: "/main/hfa_images/time.png"
        }
    ]


    return (
        <div className="w-full max-w-3xl mx-auto">
            <div className="bg-gradient-to-b from-transparent via-[#200608fa]  to-black py-3 pt-0 pt-md-4 px-3">
                <h1 className="text-4xl md:text-5xl font-bold font-noto text-center bg-gradient-to-r from-cyan-500 to-green-400 py-3 bg-clip-text text-transparent">
                    कैसे काम करता है?
                </h1>
                <div className="benefits1 flex justify-center ">
                    <ul className="flex flex-col gap-y-4">
                        {benefits1.map((item) => {
                            return (
                                <div className="flex font-noto border pt-3 bg-pink-100 border-red-400 p-2 rounded-md  gap-3 text-white items-center">
                                    <div className="flex-none">
                                        <img
                                            src={item.url}
                                            alt={item.statement}
                                            className="w-24"
                                        />
                                    </div>

                                    <div>
                                        <h1 className="font-bold md:text-4xl text-2xl text-black">
                                            {item.statement}
                                        </h1>
                                        <p className="md:text-xl text-black">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </ul>
                </div>
                <div className="flex justify-center my-4 mt-8">
                    <img src="/main/hfa_images/pro1.png" alt="pro1" className='w-60 md:w-100' />
                </div>
                <div className="benefits2 flex justify-center ">
                    <ul className="flex flex-col gap-y-4">
                        {benefits2.map((item) => {
                            return (
                                <div className="flex font-noto border pt-3 bg-pink-100 border-red-400 p-2 rounded-md  gap-3 text-white items-center">
                                    <div className="flex-none">
                                        <img
                                            src={item.url}
                                            alt={item.statement}
                                            className="w-24"
                                        />
                                    </div>
                                    <div className="">
                                        <h1 className="font-bold text-2xl md:text-4xl  text-black">
                                            {item.statement}
                                        </h1>
                                        <p className="md:text-xl text-black">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </ul>
                </div>
            </div>

            <div className=" bg-red-500">
                <div className="md:w-10/12 mx-auto  px-3 mt-4">
                    <h1 className="text-center pb-3 pt-6 text-white font-bold font-noto text-4xl"> क्या कहते है एक्सपर्ट्स?</h1>
                </div>
            </div>

            <div className="mx-auto pt-4 md:py-5">
                <iframe className="mx-auto w-[350px] h-[250px] md:w-[650px] md:h-[350px]" src="https://www.youtube.com/embed/I7RqbSjlptY?si=U0FWjEXQFOMtsKw3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default Hft_work