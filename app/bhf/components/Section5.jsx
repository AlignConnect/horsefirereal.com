import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
  subsets: ['devanagari'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
const Section5 = () => {
  return (
    <section className={`${noto.className} relative`}>
      <div className="w-full md:max-w-5xl m-auto">
        <h1 className="text-green-500  text-center text-5xl md:text-8xl font-bold pt-10">
          CUSTOMER'S STORY
        </h1>
        <h2 className="text-white text-center text-2xl px-3 md:text-3xl pt-2">
          Millions of successful stories of Men from all over India
        </h2>
        <div className="bg-[#f9f6e3] flex md:flex-row flex-col rounded-lg mx-3 p-4 mt-4">
          <div className="flex-none rounded-lg overflow-hidden">
            <img
              src="/main/bhf_images/customer.webp"
              className="w-full h-full shrink-0 min-h-[400px]"
              alt="image1"
              loading="lazy"
            />
          </div>
          <div className="pl-2 pt-4 md:pt-0 italic">
            <p className="indent-12">
              मेरा नाम धीरेन्द्र है, मैं 29 साल का हूँ। मैं पिछले 4-5 सालों से
              शीघ्रपतन की समस्या से परेशान था। इतना ही नहीं एक बार डिस्चार्ज
              होने के बाद दुबारा लिंग में सख्ती नहीं मिलती थी। 21-22 साल की उम्र
              में मुझे नहीं समझ आता थी की आखिर क्यों इतनी जल्दी डिस्चार्ज हो रहा
              है। कई बार तो मैं इतना ज्यादा उत्तेजित हो जाता था की खुद पर
              कण्ट्रोल ही नहीं रहता था जिसकी वजह से लिंग डालते ही वीर्य निकल
              जाता था। मेरी मुश्किल और भी बढ़ गयी जब 24 साल की उम्र में मेरी शादी
              हो गयी।
            </p>
            <p className="pt-3">
              शर्म के मारे मैं किसी से बता भी नहीं पा रहा था। बाद में एक दो बार
              हिम्मत करने मेडिकल से वायग्रा लेके खाया ताकि देर तक सेक्स कर सकूं।
              उससे भी कोई फायदा नहीं हुआ वीर्य जड़ी स्खलित हो गया और लिंग में
              बहुत जलन और दर्द हुआ उसके बाद फिर मैं वायग्रा का इस्तेमाल नहीं
              किया। इसके आलावा मैं घरवालों से छुपाकर और बहुत सारे प्रोडक्ट
              इस्तेमाल किया पर केवल पैसे बर्बाद हुए कोई फायदा नहीं मिला। मेरा
              वैवाहिक जीवन तनावग्रस्त और असंतोष भरा हो गया था।
            </p>
            <p className="pt-3">
              एक दिन ऐसे ही मोबाइल यूज़ कर रहा था तो मुझे हॉर्सफायर का एड दिखा।
              इसके बारे में बहुत अच्छी अच्छी बाते की गई थी पर पिछले हुए नुकसान
              की वजह से मुझे इस प्रोडक्ट पर भी भरोसा नहीं हो रहा था। फिर भी इसके
              बारे में रिसर्च किया पूरा यूट्यूब इसकी वाहवाही से भरा था, गूगल पर
              भी इसके बारे में बहुत सारे पोस्ट मिले जो इसके फायदे के बारे में
              थे। यहा तक की इसे डॉक्टर द्वारा प्रस्तावित किया गया था जिससे मेरा
              हॉर्सफायर टेबलेट भरोसा पर बढ़ गया।
            </p>
            <p className="pt-3">
              इतना ही नहीं यह फ्लिपकार्ट और अमेज़न जैसी ट्रस्टेड प्लेटफार्म पर भी
              4.1 स्टार रेटिंग के साथ लिस्टेड है जो मेरे भरोसे को और मजबूत कर
              दिया। मैंने इसे फ्लिपकार्ट से आर्डर कर दिया और फुल सिक्योरिटी के
              साथ यह डिलीवर हो गया। एक्सपर्ट द्वारा बताये गए तरीके से मैं सुबह
              शाम नियमित इस्तेमाल करने लगा और पहले सप्ताह में ही परिणाम देख मैं
              बहुत खुश हुआ। मेरा कॉन्फिडेंस बढ़ने लगा और सेक्स टाइमिंग भी बढ़ने
              लगी। मैंने पुरे 4 पैक इस्तेमाल किये और मेरी सेक्स समस्या खतम हो
              गयी। सेक्स टाइमिंग कई गुना बढ़ गयी है, लिंग में जोरदार मजबूती और
              साइज में भी बृद्धि हो गयी है। सच कहूँ तो मेरी पूरी सेक्सुअल लाइफ
              ही बदल गयी। हॉर्सफायर टेबलेट बहुत असरदार औषधि है जो हर यौन कमजोर
              पुरुष को आजमाना चाहिए।
            </p>
          </div>
        </div>
      </div>
      <div className="w-full absolute  bottom-0 -z-10 bg-white h-[400px] md:h-[250px]"></div>
    </section>
  );
};

export default Section5;
