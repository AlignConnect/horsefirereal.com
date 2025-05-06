import React from 'react'

const Sec3 = () => {
  const list = [
    {
        image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0fb0f93e-f324-4ce4-ac53-7e54bcdc7200/public',
        title: 'शीघ्रपतन',
        para: '2 मिनट से कम, कुछ झटके में स्खलन'
    },
    {
        image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/75b26f35-799a-4694-6b1c-0317e0c09500/public',
        title: 'कमजोर लिंग',
        para: 'छोटा/पतला/ढीला लिंग आकार'
    },
    {
        image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/3151b423-2e36-43a7-17e0-e405a0a7b400/public',
        title: 'कमजोरी',
        para: 'स्ट्रेंथ, स्टैमिना और एनर्जी की कमी'
    },
]
  return (
    <div className=''>
      <div className="px-3 mt-3 sm:mt-5">
        <div className="relative z-10 mt-10">

          <div className="transform -translate-x-1/2 -translate-y-1/2 text-2xl sm:text-3xl absolute top-0 left-1/2 w-3/4 sm:w-1/2 z-0 border-black border-2 border-dashed ">
            <div className="relative max-w-96 mx-auto pt-3   ">
              <div className=" pt-1  text-[#fff00d]  bg-black font-bold">गंभीर समस्याएं</div>
              <div className="transform -translate-x-1/2 -translate-y-1/2  absolute top-1/2 left-[16px] bg-[#fff00d]   w-8 border-[#fff00d] h-full  rounded-e-full inline "></div>
              <div className="transform -translate-x-1/2 -translate-y-1/2  absolute top-1/2 -right-[16px] bg-[#fff00d]   w-8 border-[#fff00d] h-full rounded-s-full inline"></div>
            </div>
          </div>
          <div className=" bg-[#fff00d] outline-2 outline-dashed -outline-offset-8 px-3 sm:px-8 pt-8 pb-3  ">
            <div className="grid grid-cols-3 gap-3 sm:gap-8 font-semibold mt-5 ">
              {
                list.map((e, key) => {
                  return <div className="" key={key}>
                    <p className="font-bold">{e.title}</p>
                    <img src={e.image} alt="pic" height='100%' width='100%' loading='lazy' />
                    <p className="mt-3 text-[1rem] sm:text-xl">{e.para}</p>
                  </div>
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sec3