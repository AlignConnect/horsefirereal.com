import dynamic from 'next/dynamic';
import Image from 'next/image';
import React from 'react'

const YoutubeVideo = dynamic(() => import('./YoutubeFrame'), {
  loading: () => <p>loader</p>
});

const OrderBtn = dynamic(() => import('./OrderBtn'), {
  loading: () => <p>loader</p>
});

const Sec6 = () => {

  const DataList = [
    {
      image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/be653dd5-2be6-4567-8a0b-18d6b31ae900/public',
      para: 'पुरुष सेक्स हॉर्मोन टेस्टोस्टेरोन बढ़ाए'
    },
    {
      image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d33019c8-3f85-4370-1fa3-c9673d814600/public',
      para: 'लिंग में ढीली पड़ी नसों की मरम्मत'
    },
    {
      image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d8e40fd9-d409-44ca-2e7b-431004c7f900/public',
      para: 'लिंग में रॉड जैसी सख्ती और शक्ति'
    },
    {
      image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/be689761-d2bf-4b8f-62ac-06e71546b400/public',
      para: '2 मिनट की टाइमिंग को घंटो में बदले'
    },
    {
      image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/68f347b0-a06b-43e1-e48b-c9ede8125100/public',
      para: 'स्ट्रेंथ, एनर्जी और स्टैमिना बूस्ट करे '
    },
    {
      image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/191460f6-7ffa-43c9-dae7-a221ea83bf00/public',
      para: 'धातु संबंधित अन्य यौन रोगों से राहत'
    },
  ]

  return (

    <>
      <div className='relative  text-white text-center'>
        <div className="px-3 sm:px-5 ">
          <div className="  max-w-lg mx-5 sm:mx-auto ">

            <div className="borderRL my-7 sm:my-12 inline  ">
              <p className="fontPoppins  font-extrabold text-3xl sm:text-5xl">Horse Fire Tablet</p>
              <p className=" text-2xl sm:text-3xl sm:mt-3">पर ग्राहकों की प्रतिक्रिया</p>
            </div>


          </div>

          <p className="mb-5">सर्वश्रेष्ठ यौनवर्धक <span className="text-red-500 font-bold">Horse Fire Tablet</span> ने ऑनलाइन मार्केट में धूम मचा दिया है। कमजोर पुरुष इसके इसके इस्तेमाल से असली मर्दानगी का अनुभव कर रहे है, ग्राहकों की प्रतिक्रिया आप खुद देख सकते है-</p>

          <YoutubeVideo vid='rf51nF8mlb0' />
        </div>

        <div className="relative px-3 sm:px-5 mt-3 sm:mt-0">
          <div className="relative z-10 pt-5">
          <OrderBtn />
            <div className="grid grid-cols-2 py-5 sm:py-10 gap-3 sm:gap-10 ">

              {DataList.map((e, key) => {
                return <div className="w-3/4 sm:w-8/12 mx-auto" key={key}>
                  <img src={e.image} alt="pic" height='100%' width='100%' loading='lazy' className='' />
                  <p className="mt-3 sm:mt-7">{e.para}</p>
                </div>
              })}

            </div>
          </div>
          <Image src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/01dd2b73-3355-47d9-9d6b-199df4e0dc00/public' fill loading='lazy' alt='sock' />
        </div>

      </div>
      <div className="relative border-y-2 border-green-500 pt-5 text-center">

        <div className="text-white pt-5 ">
          <div className={`w-full text-xl sm:text-2xl  font-extrabold  bg-red-600 inline leading-none px-5 pt-4 pb-1 sm:px-10  outline-1 outline-dashed -outline-offset-8 `}>
            नक्कालों से सावधान!
          </div>
          <marquee className=" text-[1rem] sm:text-xl mt-5"><span className="text-yellow-300">Horsefire Tablet</span> की बढ़ती लोकप्रियता को देखते हुए मार्केट में कुछ नकली विक्रेता आ गए है। ध्यान से <span className="text-yellow-300">AR Ayurveda</span> ब्रांड देखकर ही प्रोडक्ट खरीदें !</marquee>
        </div>

      </div>

      <img src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/20f6f0dd-1230-4d5e-6f93-e229fea61600/public' alt="pic" height='100%' width='100%' loading='lazy' className='' />


    </>
  )
}

export default Sec6