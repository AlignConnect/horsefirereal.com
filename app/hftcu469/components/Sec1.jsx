import React from 'react'



const Sec1 = () => {
    return (
        <div>
            <div className="text-white ">
                <div className={`w-full text-xl sm:text-2xl  font-extrabold  bg-red-600 inline leading-none px-5 pt-4 pb-1 sm:px-10  outline-1 outline-dashed -outline-offset-8 `}>
                    नक्कालों से सावधान!
                </div>
                <marquee className=" text-[1rem] sm:text-xl mt-5"><span className="text-yellow-300">Horsefire Tablet</span> की बढ़ती लोकप्रियता को देखते हुए मार्केट में कुछ नकली विक्रेता आ गए है। ध्यान से <span className="text-yellow-300">AR Ayurveda</span> ब्रांड देखकर ही प्रोडक्ट खरीदें !</marquee>
            </div>

            <div className="px-3 sm:px-10">

                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/c1daa269-12ff-44f6-9b3e-2de9a5775000/public" alt="pic" height='100%' width='100%' loading='lazy' />

            </div>

        </div>
    )
}

export default Sec1