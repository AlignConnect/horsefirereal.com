import dynamic from 'next/dynamic';
import React from 'react'

const OrderBtn = dynamic(() => import('./OrderBtn'), {
  loading: () => <p>loader</p>
});

const Sec2 = () => {
  return (
    <div className=''>
      <button className="buttoncu fontPoppins font-bold mt-5 sm:mt-10"  >
        <div className="blob1cu"></div>
        <div className="blob2cu"></div>
        <div className="innercu">Today</div>
      </button>


      <div className="my-5 sm:my-10 grid gap-5">

        <div className="buttonparaHead px-5 sm:px-10 fontPoppins ">
          <p className="buttonpara text-white py-2 ">
            <span className="font-extrabold text-[#2fdf9f]">308</span> people bought through call
          </p>
        </div>

        <div className="buttonparaHead px-5 sm:px-10 fontPoppins ">
          <p className="buttonpara text-white py-2 ">
            <span className="font-extrabold text-[#2fdf9f]">611</span> people submitted the form
          </p>
        </div>
      </div>

      <OrderBtn/>
      
      <div className="max-w-[28rem] mx-auto my-5 sm:mb-16">

        <div className="grid grid-cols-12 items-center text-[#a9ff00] gap-3">
          <div className="col-span-2">
            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/97eecf2d-d199-4a1b-46d9-8d83a012a300/public" alt="pic" height='100%' width='100%' loading='lazy' />

          </div>
          <div className="col-span-8 fontPoppins text-2xl sm:text-3xl font-bold  ">
            Now, It's Your Turn
          </div>
          <div className="col-span-2">
            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/97eecf2d-d199-4a1b-46d9-8d83a012a300/public" alt="pic" height='100%' width='100%' loading='lazy' />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Sec2