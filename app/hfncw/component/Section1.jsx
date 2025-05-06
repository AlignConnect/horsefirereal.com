
import dynamic from "next/dynamic";
import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Ordernow = dynamic(() => import('./OrderNow'));


const Section1 = () => {
    return (

        <section className={noto.className}>
            <section className="w-full md:w-[600px] mx-auto px-3">

                <p className='text-xl font-semibold text-justify'>
                    हॉर्सफायर टैबलेट आज के पुरुषो की आवश्यकता है। प्राचीन आयुर्वेद और आधुनिक विज्ञान से तैयार हॉर्सफायर टैबलेट उन पुरुषों के लिए अत्यंत उपयोगी है जो <span className="text-red-800"> लिंग कमजोरी, शीघ्रपतन से पीड़ित</span> है या फिर सेक्स के दौरान उत्तेजना और स्टैमिना की कमी महसूस करते है।
                </p>


                <div>

                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e9da845d-e3bb-4481-bad1-b0f80756a200/public" alt="asd" loading='eager' fetchPriority="high" className="w-full" />

                    <Ordernow />
                    <p className="mt-3 text-xl text-justify">
                        दरअसल, सर्वे में पाया गया की आज के समय में ज्यादातर पुरुष जवानी में ही लिंग की मजबूती खोते जा रहे है। रिसर्च में पता चला की इसके पीछे की वजह टेस्टस्टेरॉन हॉर्मोन की कमी है। टेस्टोस्टेरोन हॉर्मोन ब्लड वेसेल्स में नाइट्रिक ऑक्साइड की मात्रा बढ़ाता है जिससे लिंग में रक्त का बहाव तेजी से होता है। बेहतर रक्त संचार की वजह से लिंग में मनचाहा इरेक्शन मिलता है साथ ही छोटा और ढीला लिंग मजबूती के साथ सख्त होकर फौलाद का रूप ले लेता है।
                    </p>


                    <div className="bg-gradient-to-t from-zinc-100 via-zinc-600  to-zinc-600 text-center mt-12 sm:mt-20">
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0b29bbc1-2086-4f30-73be-c5fe27babc00/public" alt="asd" loading='eager' fetchPriority="high" className="relative -top-10 w-[5rem] px-2 inline-block bg-white rounded-full  " />
                        <p className="text-2xl sm:text-4xl font-bold sm:px-10 -mt-6 text-white">यौन सक्रीय महिलाओं पर सर्वे में हुआ <br/><span className="text-blue-700">सबसे बड़ा खुलासा !</span> </p>
                    </div>

                </div>


            </section>

        </section>

    )
}

export default Section1