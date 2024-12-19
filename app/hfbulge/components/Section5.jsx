import dynamic from 'next/dynamic';

const FormRedirect = dynamic(() => import('./FormRedirect'), {
    loading: () => <p>load</p>
});

const Section5 = () => {

    return (
        <div className='w-full '>
            <div className=" relative">
                <div className=" relative z-10 px-3 py-5 sm:py-10">

                    <div className=" mx-auto w-max sm:flex gap-2 items-center">
                        <p className="inline-block rounded-bl-xl rounded-tr-xl text-3xl sm:text-5xl bg-red-700 text-white px-5 pt-3 font-bold">Horse Fire </p>
                        <p className="text-end text-2xl sm:text-3xl mt-2 font-semibold">से होने वाले लाभ</p>
                    </div>

                    <div className="grid sm:grid-cols-12 fontArya items-center text-xl sm:text-2xl sm:mt-5">
                        <div className="sm:col-span-7 order-2 sm:order-1">
                            <ul className='ms-5 sm:ms-10 space-y-2 sm:-mr-5'>
                                <li className=""> &nbsp;15 दिनों के अंदर सेक्स अवधि में 10x वृद्धि</li>
                                <li className=""> &nbsp;लिंग के लम्बाई और मोटाई में वृद्धि</li>
                                <li className=""> &nbsp;जोश, शक्ति और स्टैमिना मे अद्भुत वृद्धि</li>
                                <li className=""> &nbsp;कामेच्छा में वृद्धि, अन्य गुप्त रोग जड़ से हल</li>
                            </ul>
                        </div>
                        <div className="sm:col-span-5 order-1 sm:order-2">
                            <img src="/main/hfbulge_images/06.webp" className='w-9/12 sm:w-full mx-auto my-5 sm:my-0 hidden sm:block' alt="img11" width='100%' height='100%' loading='lazy' />
                            <img src="/main/hfbulge_images/box.png" className='w-9/12 sm:w-full mx-auto my-5 sm:my-0 sm:hidden ' alt="img11" width='100%' height='100%' loading='lazy' />

                        </div>
                    </div>


                </div>
                <img src="/main/hfbulge_images/09.webp" alt="img11" className="absolute top-0 left-0 h-full" width='100%' height='100%' loading='lazy' />
            </div>
            <div className=" px-3 py-5 ">
                <p className="">देखें, ये पूरी समस्या शर्म की वजह से और बढ़ जाती है! अगर कोई भी पुरुष जल्दी डिस्चार्ज हो जाता है, लिंग में दम नहीं है तो उसे बिना हिचक के Horse Fire Tablet अवश्य आजमानी चाहिए !</p>
            </div>

        </div>
    )
}
export default Section5