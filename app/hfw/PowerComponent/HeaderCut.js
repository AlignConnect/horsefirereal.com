const Problems = (arr) => {
    return arr?.map((e, key) => {
        return <div key={key}>
            <img src={e.problem_icon} alt='problem_icon' className='mx-auto w-[80px]  py-2' loading="lazy" />
            <div className={`md:text-xl text-sm font-semibold text-center text-white`}>{e.problem_title}</div>
        </div >
    })
}


const HeaderCut = () => {
    return (
        <section>
            <div className='w-full max-w-6xl mx-auto py-2'>
                <p className='fontNoto text-[1.1rem] md:text-[1.4rem] text-justify px-1'>
                    सर्दी का मजा तभी है जब ठिठुरती रात में आप अपनी बीवी को जिस्म की गर्मी देने में काबिल हो। ये सच है की सेक्स के लिए ठण्ड के मौसम को सबसे ज्यादा माकूल माना जाता है ऐसे में अगर पुरुष शीघ्रपतन, लिंग कमजोरी शारीरिक अक्षमता के शिकार हो तो सेक्स का मजा कैसे उठायें!! सेक्स कमजोरी सिर्फ ठंडी का मजा ख़राब नहीं करती बल्कि उम्र रहते लाइफ से रोमांस ख़त्म कर देती है। पति-पत्नी के रिश्ते बिगड़ने लगते है। हर साल अखबारों में लाखों मामले बाहरी अफेयर के छपते है जिनका कारण पति की यौन कमजोरी और पत्नी की असंतोष को माना जाता है।
                </p>
            </div>

            <div className="w-full bg-[url('/main/hfkt_images/problem_background.jpg')] bg-cover">
                <div className='w-full max-w-6xl mx-auto py-4'>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
                        {
                            Problems([
                                {
                                    problem_icon: "/main/hfkt_images/icon01.png",
                                    problem_title: "छोटा, ढीला और कमजोर लिंग"
                                },
                                {
                                    problem_icon: "/main/hfkt_images/icon02.png",
                                    problem_title: "2 मिनट या कुछ शॉट्स में स्खलन"
                                },
                                {
                                    problem_icon: "/main/hfkt_images/icon03.png",
                                    problem_title: "महिला को संतुष्ट नहीं कर पाना"
                                },
                                {
                                    problem_icon: "/main/hfkt_images/icon04.png",
                                    problem_title: " जोश, शक्ति, लिबिडो की कमी"
                                }
                            ])
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeaderCut