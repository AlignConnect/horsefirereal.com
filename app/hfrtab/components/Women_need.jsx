import React from 'react'
import { MdOutlineStarPurple500 } from "react-icons/md";

const Women_need = () => {


    const iconsArray = new Array(5).fill(null);

    const need_women = (arr) => {
        return arr?.map((e, key) => {
            return <div className='flex justify-center  gap-4  items-center' key={key}>
                <div className="w-28 h-28 overflow-hidden rounded-full  my-3">
                    <img src={e.gif} className="w-[100%] h-[100%] bg-cover" alt="" />
                </div>

                <div className='fontNoto flex items-center justify-center sm:gap-3 gap-1 md:text-2xl text-xl font-bold '>
                    <div className="fontPoppins sm:text-6xl text-5xl">
                        {key + 1}.
                    </div>
                    <div
                        dangerouslySetInnerHTML={{ __html: e.title }}
                    />
                </div>

            </div >
        })
    }

    return (
        <section>
            <div className='bg-white'>

                <div className="w-full sm:max-w-5xl mx-auto sm:py-7 py-6">


                    <div className="fontNoto sm:text-xl text-[1.1rem] px-2 py-4 text-justify font-semibold">
                        ये समस्याएं रिलेशनशिप या वैवाहिक जीवन में निराशा का कारण बनती है क्योंकि आजकल की महिलाएं अपनी सेक्सुअल लाइफ को एन्जॉय करना चाहती है। महिलाओं पर हुए सर्वे के मुताबिक वो उन पुरुषो की तरफ जल्दी आकर्षित होती है जिनमे निम्न गुण हो -
                    </div>



                    <div className=" grid sm:grid-cols-2 items-center justify-center sm:py-6 py-2 gap-3">

                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/bf4e9235-48e0-4bc3-e672-d865b2795300/public" alt="" className='w-full' />


                        <div className="">
                            {
                                need_women([
                                    {
                                        gif: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/5310bcd9-9853-49ee-928b-03ede3cacc00/public",
                                        title: "जिसका लिंग लंबा<br/> और मोटा हो"
                                    },
                                    {
                                        gif: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f365151f-86fc-4e72-409d-633a897bab00/public",
                                        title: "जो बिना रुके देर<br/> तक सेक्स करें "
                                    },
                                    {
                                        gif: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/23069d82-d803-4fce-3993-651c4bc14600/public",
                                        title: "जो उनका<br/> पानी निकाल दे "
                                    },
                                    {
                                        gif: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/dd019f8c-a0e9-451f-1264-7db2c2d6aa00/public",
                                        title: "कम से कम  4<br/> राउंड सेक्स करे"
                                    },
                                ])
                            }
                        </div>

                    </div>

                </div>
            </div>



            <div className='bg_primium'>

                <div className="w-full sm:max-w-5xl mx-auto sm:py-7 py-6">


                    <div className=" sm:py-5 py-2">
                        <div className="fontNoto bg-[#50e4a8] sm:text-4xl text-[1.8rem] text-center sm:pt-5 pt-3 mx-auto font-bold sm:rounded-2xl">
                            गंभीर समस्या प्रीमियम समाधान!
                        </div>

                    </div>

                    <div className="grid grid-cols-2  items-center justify-center py-10 px-2">
                        <img
                            src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/81cc7088-ecf0-4e4f-c7d2-10d614586200/public"
                            alt="Horse Fire Tablets"
                            className="sm:w-5/6 w-full mx-auto"
                        />

                        <div className="">


                            <div className="fontJosefin sm:text-5xl text-[1.5rem] px-3 font-bold leading-tight">
                                TOP<br />
                                RATED
                            </div>

                            <div className="flex items-center sm:pl-3 pl-2 sm:py-3 py-1">
                                {iconsArray.map((_, index) => (
                                    <MdOutlineStarPurple500 key={index} className="text-yellow-500 text-3xl sm:text-5xl" />
                                ))}
                            </div>

                            <div className="fontJosefin  bg-[#3893d9] sm:text-2xl text-sm text-center sm:pt-2 pt-1 sm:w-[65%] w-[90%] mx-auto sm:mx-0 text-white font-bold sm:rounded-xl">
                                LOVED BY CUSTOMER'S
                            </div>


                        </div>
                    </div>



                    <div className="fontNoto sm:text-xl text-[1.1rem] px-2 py-4 text-justify font-semibold">
                        पुरुषों में ये सारी काबिलियत भरने का सबसे बेहतर विकल्प है आयुर्वेदिक <strong>Horsefire Tablet</strong>. यह सेक्स पावर और कमजोर और ढीले लिंग में ताकत भरने वाली प्रीमियम औषधि है। यह बेहद प्रभावकारी और गुणकारी औषधि है जो टेस्टोस्टेरोन, स्टैमिना, और टाइमिंग को कई गुना बढ़ा देती है।

                    </div>


                    <div className="grid grid-cols-3 sm:py-10 py-3 px-1 gap-2">
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/938b8a8a-5504-4002-d3ba-df00a984e800/public" alt="" className='sm:w-1/2 w-full mx-auto' />
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/119d015f-526d-40ec-44e0-274bad64f900/public" alt="" className='sm:w-1/2 w-full mx-auto' />
                        <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/794b378d-994e-4b68-582e-833919020300/public" alt="" className='sm:w-1/2 w-full mx-auto' />
                    </div>
                </div>


                <div className="bg-orange-700  text-white py-5 flex items-center justify-between">

                    <div className="w-full sm:max-w-6xl mx-auto grid sm:grid-cols-3 justify-center items-center ">

                        <div className='flex items-center py-1'>
                            <span className="font-bold sm:text-6xl text-4xl">NO.1</span>
                            <span className="ml-3 sm:text-xl text-[1.1rem] fontJosefin">Male Enhancement Product</span>
                        </div>

                        <div className='flex items-center py-1'>
                            <span className="font-bold sm:text-6xl text-3xl">99.8%</span>
                            <span className="ml-2 sm:text-xl text-[1.1rem] fontJosefin">Over all Success Ratings</span>
                        </div>


                        <a href='#form' className="bg-yellow-400 fontJosefin sm:text-xl text-center text-black font-extrabold pt-2 pb-1 mt-3 sm:mt-0 px-4 rounded w-1/2 mx-auto box_shaddow">
                            BUY NOW
                        </a>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Women_need