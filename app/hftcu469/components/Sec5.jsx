import dynamic from 'next/dynamic';
import Image from 'next/image'
import React from 'react'

const OrderBtn = dynamic(() => import('./OrderBtn'), {
  loading: () => <p>loader</p>
});


const trustList = [
  {
    image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/fb5505c6-15bd-405e-c846-45506a96aa00/public',
    text: '100% मनी बैक गारंटी'
  },
  {
    image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f310e461-0937-4789-2d25-4d368ced3100/public',
    text: "India's No.1 यौनवर्धक उत्पाद"
  },
  {
    image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1b54f1fd-33fe-4e7c-09c8-2f2eb9548600/public',
    text: "COD पेमेंट सुविधा उपलब्ध"
  },
  {
    image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/75ffcf6d-2d14-479e-58b6-171e60271300/public',
    text: "Flipkart, Amazon पर लिस्टेड"
  },
]

const Sec5 = () => {
  return (
    <div className='relative'>
      <div className='relative z-10 px-3 sm:px-3 py-5 sm:py-10'>
        <div className="">
          <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2afcb038-3314-42c6-b45d-15ac5258a700/public" alt="pic" height='100%' width='100%' loading='lazy' className='float-left w-4/12' />

          <div className="text-end">
            <div className="fontPoppins uppercase bg-[#036301] inline text-white text-[1.4rem] sm:text-4xl px-1 font-bold sm:px-3 py-1 sm:py-2">Horse Fire Tablet</div>
            <p className=" mt-2 sm:mt-5 text-2xl sm:text-4xl font-semibold">एक विशेष औषधि</p>

            <p className="text-justify">लैब टेस्टिंग में एक्सपर्ट्स से इसे मार्केट में उपलब्ध अन्य उत्पादों की तुलना में सर्वश्रेष्ठ फार्मूलेशन करार दिया है। यह पुरुष यौन समस्या पर दूसरों की तुलना में ज्यादा सटीक असर करता है। Horse Fire की प्रत्येक गोली शुद्धता और यौनवर्धक क्षमता से भरपूर है जिसकी वजह से इसकी मांग प्रतिदिन बढ़ती जा रही है। </p>
          </div>
        </div>

        <p className="mt-3 sm:mt-5 text-justify">
          <span className="text-red-600 font-semibold ">Horse Fire Tablet</span> से लिंग में रॉड जैसी सख्ती मिलने लगती है जो घंटो तक बनी रहती है। सेक्स टाइमिंग और स्टैमिना में जोरदार बढोत्तरी होती है जिससे कोई भी पुरुष नॉनस्टॉप सेक्स प्रदर्शन कर सकता है।
        </p>




        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-10 mt-5 sm:mt-8  sm:text-xl text-center font-bold sm:px-3 ">
          {
            trustList.map((e, key) => {
              return <div className="" key={key}>
                <img src={e.image} alt="pic" height='100%' width='100%' loading='lazy' className='w-3/4 sm:w-11/12 mx-auto' />
                <p className="mt-3">{e.text}</p>
              </div>
            })
          }
        </div>

        <OrderBtn/>
      </div>
      <Image src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/39019f22-125a-4b80-09bb-ae5d72569300/public' fill loading='lazy' alt='sock' />
    </div>
  )
}

export default Sec5