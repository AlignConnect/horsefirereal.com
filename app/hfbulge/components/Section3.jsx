import dynamic from 'next/dynamic';


const FormRedirect = dynamic(() => import('./FormRedirect'), {
    loading: () => <p>load</p>
});

const Section3 = () => {

    const list = [
        { title: '+1-2 घंटे टाइमिंग बढ़ाए', para: 'टाइमिंग के निम्नतम स्तर को उच्चतम स्तर पर ले जाये' },
        { title: 'लिंग साइज बढ़ाए', para: 'छोटे लिंग को 8-9 इंच लम्बा-मोटा और फौलादी बनाए' },
        { title: 'लिंग को कड़क बनाये', para: 'स्खलन पश्चात ढीले लिंग को रॉड सा कड़क बनाए' },
        { title: 'एनर्जी और पावर बढ़ाए', para: 'कमजोरी मिटाकर शरीर को एक्टिव व जोशीला बनाए' }
    ]

    return (
        <div className=" w-full   relative ">

            <img src="/main/hfbulge_images/11.jpg" alt="img11" width='100%' height='100%' loading='lazy' />

            <div className="py-3 sm:py-5 px-3 fontArya sm:px-10 bg-gradient-to-b from-[#e4e4e4]  to-[#dedede]">

                {list.map((e, key) => {
                    return <div className="mb-3" key={key}>
                        <div className="grid grid-cols-12 gap-3 sm:gap-5 items-center ">
                            <div className=" col-span-2 sm:col-span-1">
                                <img src="/main/hfbulge_images/12.png" alt="img11" width='100%' height='100%' loading='lazy' />

                            </div>
                            <div className="col-span-10 sm:col-span-11">
                                <p className="text-red-600 font-bold text-2xl sm:text-3xl">{e.title}</p>
                                <p className="text-xl sm:text-2xl">{e.para}</p>
                            </div>
                        </div>
                    </div>
                })}
                <div className="fontNoto">

                    <FormRedirect />
                </div>

                <p className="text-justify mt-5">प्रोडक्ट 4 दिनों के अंदर पूरी सुरक्षित डिलीवर हो गयी। मैं सोच रही थी जैसा दुसरो को फायदा मिला है उससे थोड़ा कम फायदा भी मेरे पति को मिल जाए तो सेक्स में थोड़ा मजा बढ़ जाए। मैंने उनको इस्तेमाल के लिए दिया और परिणाम देखने के लिए बेचैन हो रही थी पर बेहतर अनुभव के लिए 1 सप्ताह का इंतजार करना था। आखिर वो दिन आ ही गया मेरे पति का लंड बिल्कुल बदल गया था साइज में थोड़ी बृद्धि पर सख्ती में भरपूर सुधार हुआ था। उनका लौड़ा भी मुझे पाने के लिए बेताब हुए जा रहा था जिसका उभार पैंट के ऊपर से ही साफ दिखाई दे रहा था। </p>
            </div>
        </div>
    )
}
export default Section3;