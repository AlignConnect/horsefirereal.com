import { Noto_Serif_Devanagari, Poppins } from "next/font/google";
import './my.css'
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


const Section3 = () => {
    return (
        <section className={noto.className}>
            <section className="w-full md:w-[600px] mx-auto p-3">

                <div className="grid grid-cols-12 mx-auto gap-3">


                    <div className="col-span-6 md:col-span-6">
                        <div className="text-end flex items-center justify-end gap-3">
                            <p className="text-[15px] md:text-[17px] font-bold">Suresh Singh</p>
                            <div>
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cc8e31ac-625d-46d4-1c59-767d914db300/public" alt="dsfdsf" loading="lazy" width={60} className="w-[45px] md:w-[60px]" />
                            </div>
                        </div>
                        <div className="bg-[#6be1fa] w-full min-h-[113px] flex items-center justify-center">
                            <p className="text-center p-1 font-bold text-[13px] md:text-[16px] italic">
                                It's really amazing product for sex stamina and penis enlargement.
                            </p>
                        </div>
                    </div>



                    <div className="col-span-6 md:col-span-6">
                        <div className="text-end flex items-center justify-end gap-3">
                            <p className="text-[15px] md:text-[17px] font-bold">Ajay Garg</p>
                            <div>
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4bb0eebc-a424-4d72-c297-ab24b3c68400/public" alt="dsfdsf" loading="lazy" width={60} className="w-[45px] md:w-[60px]" />
                            </div>
                        </div>
                        <div className="bg-[#6be1fa] w-full min-h-[113px] flex items-center justify-center">
                            <p className="text-center p-2 font-bold text-[13px] md:text-[16px] italic">
                                Maine sex timing badhaane ka isase behatar product aaj tak nhi dekha..just buy this!

                            </p>
                        </div>
                    </div>




                    <div className="col-span-6 md:col-span-6">
                        <div className="text-end flex items-center justify-end gap-3">
                            <p className="text-[15px] md:text-[17px] font-bold">Sadik Khan</p>
                            <div>
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/4c1d1da1-7ee7-4362-00b2-f73bb53c8200/public" alt="dsfdsf" loading="lazy" width={60} className="w-[45px] md:w-[60px]" />
                            </div>
                        </div>
                        <div className="bg-[#6be1fa] w-full min-h-[50px] flex items-center justify-center">
                            <p className="text-center p-2 font-bold text-[13px] md:text-[16px] italic">
                                Kash mujhe iske bare me pahle pata chala hta to mere bahut sare paise bach jate jo dusare product par kharch hua.
                            </p>
                        </div>
                    </div>




                    <div className="col-span-6 md:col-span-6">
                        <div className="text-end flex items-center justify-end gap-3">
                            <p className="text-[15px] md:text-[17px] font-bold">Tosif Ansari</p>
                            <div>
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d876d571-2393-4693-ba47-95afa5092e00/public" alt="dsfdsf" loading="lazy" width={60} className="w-[45px] md:w-[60px]" />
                            </div>
                        </div>
                        <div className="bg-[#6be1fa] w-full min-h-[130px]  md:min-h-[110px] flex items-center justify-center">
                            <p className="text-center p-2 font-bold text-[13px] md:text-[16px] italic">
                                Best medicine in market for sex stamina and size...kamjor purush ise jarur try kren.
                            </p>
                        </div>
                    </div>


                </div>



                <section className="text-center bg-[#d4d0cd] mt-5 px-5">

                    <section className="mt-8 mb-8 sm:mb-10 bg-[#7f0709] inline-flex rounded-[50px]">
                        <p className={`${poppin.className} data-grendiant-text px-7 font-black text-3xl py-2  bg-[#7f0709]`}>PROUD TO BE</p>
                    </section>



                    <div className="grid justify-center gap-5">
                        <div className="flex items-center gap-2 ">

                            <div className="">
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e8cf307f-9a33-4401-8f37-58f0fb77c700/public" alt="ertyuiop" className="w-[40px]" />
                            </div>
                            <p className="text-xl font-bold">
                                भारत का #1 सेक्स वर्धक विक्रेता
                            </p>

                        </div>
                        <div className="flex items-center gap-2">

                            <div>
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/9800f412-1e74-49d8-d0f2-e008f8e6ae00/public" alt="ertyuiop" className="w-[40px]" />
                            </div>

                            <p className="text-xl font-bold">
                                10 लाख से ज्यादा संतुष्ट ग्राहक
                            </p>

                        </div>
                        <div className="flex items-unset md:items-center gap-2 ">

                            <div className="">
                                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/424bb3c4-8c36-40a1-f17e-482155192c00/public" alt="ertyuiop" className="w-[57px] sm:w-[45px] md:w-[40px]" />
                            </div>
                            <p className="text-xl font-bold text-start">
                                यौनवर्धक श्रेणी में फ्लिपकार्ट पर #1 ट्रेंडिंग विक्रेता
                            </p>

                        </div>

                    </div>
                </section>
                <div className=" text-xl  bg-[#d4d0cd] px-4 py-5 text-center">
                    <p className="text-justify">
                        हॉर्सफायर टैबलेट वे पुरुष अवश्य आजमाए जिनके लिंग में ढीलापन है, या फिर फर्स्ट राउंड सेक्स के बाद लिंग में इरेक्शन नहीं मिलती है। अगर कोई पुरुष 2  मिनट या उससे भी कम समय में स्खलित हो जाता है यानि वीर्य डिस्चार्ज हो जाता है तो मात्र 30 दिनों तक यानी एक पैक नियमित गुनगने दूध के साथ सेवन करके अंतर खुद देख लें। अगला पैक आप खुद आर्डर करेंगे साथ ही 3-4 महीने नियमित सेवन करने पर आपकी यौन कमजोरी जड़ से खत्म हो जाएगी और आपको किसी भी यौनवर्धक दवा की जरुरत नहीं पड़ेगी।
                    </p>
                    <h1 className="pt-4 border-b-4 inline-block  border-[#680e11] text-2xl text-center font-bold">अंतर साफ है, चुनना बाकी है !</h1>
                </div>
            </section>
        </section>
    )
}

export default Section3