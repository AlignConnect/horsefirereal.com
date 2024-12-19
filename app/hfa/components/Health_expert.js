
function Health_expert() {

    const Before = [

        {
            id: 1,
            cont: "लम्बाई 4 Inch मोटाई 5 Cm",
            url: "/main/hfa_images/1abefore1.webp"
        },

        {
            id: 2,
            cont: "2 मिनट से कम व 30 सेकंड तक",
            url: "/main/hfa_images/2abefore.webp"
        },

        {
            id: 3,
            cont: "जल्दी थकान स्टैमिना की कमी",
            url: "/main/hfa_images/3abefore.webp"
        },



    ]
    const After = [

        {
            id: 1,
            cont: "लम्बाई 9 Inch मोटाई 8 Cm",
            url: "/main/hfa_images/1after.webp"
        },

        {
            id: 2,
            cont: "लगातार 22 मिनट से ज्यादा प्रमाणित",
            url: "/main/hfa_images/2after.webp"
        },

        {
            id: 3,
            cont: "हाई स्टैमिना के साथ बिना थके लम्बा सेक्स",
            url: "/main/hfa_images/3after.webp"
        },



    ]

    return (
        <div>
            <div className="w-full max-w-3xl mx-auto">
                <div className="px-[0.8rem] mt-3 mt-md-4">
                    <h1 className='font-bold md:text-5xl text-3xl font-noto py-3 pb-2 text-center text-white'>हेल्थ एक्सपर्ट्स का सुझाया</h1>

                    <div className="bg-yellow-400 border-2 border-white rounded-lg py-3 px-2 px-md-3">
                        <div className="flex items-center gap-2">
                            <img src="/main/hfa_images/doctor.png" alt="" className="w-4/12 md:w-2/12" />
                            <div className="text-black">
                                <h2 className="text-2xl md:text-3xl font-semibold">Dr. Arun Kumar</h2>
                                <p className='text-[0.83rem] md:text-xxl'>14 years of experience</p>
                                <p className='text-[0.83rem] md:text-xxl'>MD - Alternate Medicine, BAMS</p>
                                <p className='text-[0.83rem] md:text-xxl'>Ayurveda, Sexologist</p>
                            </div>
                        </div>
                        <p className="text-xl font-noto my-3"> लैब टेस्ट में पाया गया की इसमें अश्वगंधा, शिलाजीत, केसर और सफ़ेद मूसली जैसी क्वालिटी हर्ब्स और कुछ अत्यंत उपयोगी भस्म मौजूद है। यह खास मिश्रण है जो टेस्टोस्टेरोन हॉर्मोन बूस्ट करता है और नाइट्रिक ऑक्साइड का उत्पादन करता है। इससे पुरुष के प्राइवेट पार्ट में बेहतर इरेक्शन मिलती है, टाइमिंग बढ़ती है और यौन प्रदर्शन में सुधार होता है। इसके इस्तेमाल से ब्लड वेसल्स पंप होती है और पार्ट की तंग चमड़ी खुलने लगती है। इस प्रक्रिया के बाद इरेक्शन और साइज में सुधार होती है। बेहतर प्रदर्शन के लिए इसका इस्तेमाल सुरक्षित और उपयोगी है।</p>

                        <div className="flex justify-end gap-3 items-center">
                            <img src="/main/hfa_images/signature.png" alt="pic" className="w-4/12 md:w-2/12" />
                            <img src="/main/hfa_images/sign.png" alt="pic" className="w-4/12 md:w-2/12" />

                        </div>
                    </div>
                </div>

                <div>
                    <h1 className='font-bold text-3xl md:text-4xl font-noto py-3 text-center text-white mt-3'> ऐसे दिखते है नतीजे </h1>
                    <div className="flex items-center gap-3 justify-center px-[0.7rem]" >


                        <div className="flex flex-col gap-y-6" >

                            {
                                Before.map((befo) => {
                                    return <div

                                        key={befo.id} className="bg-white p-2 rounded-lg">
                                        <span className="font-young text-xl py-1 bg-red-500 text-white px-4  rounded-full">Before</span>
                                        <p className="text-lg font-bold font-noto py-3">{befo.cont}</p>
                                        <img src={befo.url} alt="" className="w-[300px] h-[150px] rounded-lg bg-cover bg-center" />
                                    </div>
                                })
                            }

                        </div>

                        <div className="flex flex-col gap-y-6">

                            {
                                After.map((aft) => {
                                    return <div key={aft.id} className="bg-white p-2 rounded-lg">

                                        <span className=" font-young text-xl py-1 bg-green-500 text-white px-4  rounded-full">After</span>
                                        <p className="text-lg font-bold font-noto py-3">{aft.cont}</p>
                                        <img src={aft.url} alt="" className="w-[300px] h-[150px] rounded-lg bg-cover bg-center" />

                                    </div>
                                })
                            }



                        </div>



                    </div>
                </div>

                <div className="mt-[1.5rem] bg-yellow-400 rounded-3xl p-3">
                    <h1 className="font-bold font-noto text-4xl -white mt-3 ">
                        आँख बंद करके विश्वास कर सकते है
                    </h1>
                    <p className="font-noto font-semibold mt-2 text-[1.1rem]">
                        हमे अपने प्रोडक्ट पर पूर्ण विश्वास है, इसलिए आत्मविश्वास उच्च स्तर
                        पर है। इसी विश्वास की वजह से मनी बैक गारंटी भी दे रहे है। मतलब
                        परिणाम नहीं तो आप अपना मूल्य वापस पा सकते है। पर हमे यकीन है ऐसा दिन
                        नहीं आएगा क्योंकि यह बहुत प्रभावी तरीके से कार्य करता है। लाखों
                        पुरुषों ने horse fire Tablet की मदद से अपनी शीघ्रपतन, लिंग में
                        ढीलापन, छोटापन, पतलापन, टेढ़ापन व एनर्जी और स्टैमिना की कमी जैसी
                        समस्याओं को जड़ से मिटाया है जिससे सेक्स लाइफ में खुशियों की बहार आ
                        गयी है।
                    </p>
                    <h1 className="text-center font-bold bg-black text-white p-3 rounded-md font-poppin md:text-3xl  uppercase text-xl my-3">
                        More than 5 million bottle sold
                    </h1>
                    <div className="flex flex-col justify-center">
                        <img src="/main/hfa_images/pronu1.png" alt="horsefire" />
                        <h1 className="bg-white pt-4 text-center rounded-lg md:text-5xl text-2xl  font-bold font-noto p-3">
                            ज्यादा सोचने वाले पछताते है !
                        </h1>
                    </div>
                    <h1 className="font-noto text-center text-2xl italic font-bold mt-3 md:max-w-lg mx-auto">
                        आप उन लाखों पुरुषों में शामिल हो जाएँ जो सुडौल लिंग और लम्बी सेक्स
                        टाइमिंग से महिला पार्टनर की चूत की गर्मी उतार रहे है !
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Health_expert