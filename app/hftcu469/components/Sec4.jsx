
import dynamic from 'next/dynamic';
import Image from 'next/image'
import React from 'react'

const OrderBtn = dynamic(() => import('./OrderBtn'), {
  loading: () => <p>loader</p>
});

const Sec4 = () => {
 
  return (
    <div className=''>
      <div className="relative">
        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b316d71c-8ffa-4e98-64dd-556144b10800/public" alt="pic" height='100%' width='100%' loading='lazy' />
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-[15%] left-1/2 w-3/4 ">

          <div className="relative ">
            <div className="relative z-10 px-10 font-extrabold text-xl sm:text-3xl pt-3 sm:pt-4 pb-1">
              गारंटीड समाधान
            </div>
            <Image src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/31fef984-8726-4ddc-5324-b38cfac0eb00/public" fill fetchPriority='high' alt='pic' className='bg-black' loading='lazy' />
          </div>
        </div>

        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 left-1/2 -bottom-9 sm:-bottom-3">

      <OrderBtn/>
      </div>
      </div>


      <div className="text-white px-3 sm:px-5 mt-3">
        <p className="">पुरुषों में यौन समस्याये तेजी से बढ़ रही है। ऐसे में उन्हें चाहिये <span className="text-[#e4ff00]">Horse Fire Tablet</span> जैसी असरदार औषधि जो समस्या पर तेजी से असर करें और इसे जड़ से उखाड़ फेके। </p>

        <p className="mt-3 sm:mt-5 text-justify">Horse Fire Tablet एक शुद्ध नेचुरल और आयुर्वेदिक औषधि है। <span className="text-[#e4ff00]">Horse Fire Tablet</span> पुरुष यौन कमजोरी का सबसे प्रभावी समाधान बनकर उभरा है, इसके इस्तेमाल से पुरुष लगातार अपने यौन स्वास्थ्य में सुधार कर रहे है। साल 2023-24 में AR Ayurveda ब्रांड के सिर्फ एक उत्पाद Horse Fire Tablet के 5 लाख नए ग्राहक जुड़े है। इस उत्पाद का सक्सेस रेट 97.6% है जो किसी भी अन्य यौन वर्धक उत्पाद से कई गुना बेहतर है। </p>
      </div>
      <div className="px-2 sm:px-10 sm:mt-10 text-[1rem] sm:text-xl" >
        <div className="rounded-2xl  text-yellow-500 my-5" style={{ boxShadow: " white 0px 3px 10px, rgba(0, 0, 0, 0.12) 0px -12px 30px, white 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 1px 2px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }} >

          <div className="grid grid-cols-3   py-3  sm:p-3">
            <div className="border-r-2 border-white border-dashed px-2 sm:px-6">
              <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b47cc7ec-c9cf-4589-738f-f1d867a3d300/public" alt="pic" height='100%' width='100%' loading='lazy' className='w-3/4 sm:w-1/2 mx-auto' />
              <p className="mt-2 sm:mt-3">20 लाख+ संतुष्ट ग्राहक </p>
            </div>

            <div className="border-r-2 border-white border-dashed px-2 sm:px-6">
              <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/5b2a06e6-9eaf-44fe-b294-7551a3b94b00/public" alt="pic" height='100%' width='100%' loading='lazy' className='w-3/4 sm:w-1/2 mx-auto' />
              <p className="mt-2 sm:mt-3">97.6% सफलता दर</p>
            </div>

            <div className=" px-2 sm:px-6">
              <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b47cc7ec-c9cf-4589-738f-f1d867a3d300/public" alt="pic" height='100%' width='100%' loading='lazy' className='w-3/4 sm:w-1/2 mx-auto' />
              <p className="mt-2 sm:mt-3">100% प्रामाणिक प्रोडक्ट</p>
            </div>
          </div>
        </div>

      </div>
      <OrderBtn/>

    </div>
  )
}

export default Sec4