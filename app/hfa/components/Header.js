import React from 'react'

function Header() {



    return (
        <div className=''>
            <div className='w-full max-w-3xl mx-auto overflow-hidden'>
                <div className="bg-[url('/main/hfa_images/top11b.jpg')] bg-repeat-x relative">
                    <div className="absolute mix-blend-screen md:right-0 -right-40 -bottom-5 blur-0">

                        <img src="/main/hfa_images/fire.gif" alt="" className="w-full" />
                    </div>
                    <div className=" flex flex-col justify-center items-center ">
                        <div>
                            <h1 className="md:text-5xl text-[1.8rem] text-white py-2 text-center font-young">
                                India’s Top Selling Men <br /> Wellness Medicine
                            </h1>

                        </div>
                        <div>
                            <img src="/main/hfa_images/top11a.png"></img>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100 py-2 md:rounded-[3rem] rounded-xl md:px-0 mx-1" id="">
                    <h1 className="md:text-3xl  font-bold font-noto text-xl md:px-28 md:py-4 py-3 text-center">
                        ज्यादातर महिलाएं सेक्स में संतुष्टि का दिखावा करती है ताकि रिश्ते को
                        निभा सके ! क्योंकि पुरुष छोटे, ढीले लिंग या फिर शीघ्रपतन से परेशान
                        है।
                    </h1>
                </div>


            </div>
        </div>
    )
}

export default Header