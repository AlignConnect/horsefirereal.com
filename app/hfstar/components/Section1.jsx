import dynamic from 'next/dynamic';
import '../hfstar.css';
import { IoMdMenu } from 'react-icons/io';

const FormRedirect = dynamic(() => import('./FormRedirect'), {
    loading: () => <p>load</p>
});


const Section1 = () => {

    const list1 = [
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/15268427-3a17-472d-ee15-035ba80f7900/public',
            para: ' 2 मिनट या 2 झटके में वीर्यपात',
            title: 'शीघ्रपतन- '
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d46c93e3-be22-40d4-f24e-108d0728f000/public',
            para: ' G-Spot को उत्तेजित करने में नाकाम',
            title:'छोटा लिंग- '
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0e68b94c-b06b-47e8-4e7d-87a2329af800/public',
            para: ' मजबूत सेक्स प्रदर्शन करने में असमर्थ ',
            title:'ढीला लिंग- '
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e904742a-a660-4cd3-5d73-33e495867300/public',
            para: ' कुछ झटको में ही सांस फूलना, थक जाना ',
            title:'लो एनर्जी- '
        }
    ]

    return (
        <div className="w-full">

            <div className="relative">
                <div className=" max-w-[78rem] mx-auto relative z-10 px-3">

                    <div className="flex items-center justify-between px-3 md:hidden mb-5 pt-3">
                        <a href="#form" ><IoMdMenu className='text-2xl text-white' /></a>
                        <a href="#form" ><img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0435fb23-33a1-4838-cb26-417ececd9500/public" alt="piC" className='w-8' loading="lazy" /></a>
                    </div>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1e7c895a-4899-4f13-717c-10dcee186000/public" alt="pic" width='100%' height='100%' loading='lazy' fetchPriority='high' className='hidden sm:block' />
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/688748d7-181b-4bfa-6ee8-d34bc5ddaf00/public" alt="pic" width='100%' height='100%' loading='lazy' fetchPriority='high' className='sm:hidden' />
                </div>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/818ec571-2e59-4e7c-443b-e39b26e9ca00/public" alt="bg1" width='100%' height='100%' fetchPriority='high' loading='lazy' className='absolute top-0 left-0 h-full w-full' />
            </div>

            <div className="relative">
                <div className=" max-w-6xl mx-auto relative z-10 py-5 sm:py-10 text-white px-3">

                    <p className=" leading-snug">क्या आप भी सेक्स के दौरान मेंटली प्रेशर महसूस करते है? दरअसल, होता ये है कि जो पुरुष सेक्स में हर बार फेल होता है उसे अपने सेक्स प्रदर्शन को लेकर चिंताएं होती है। पुरुषों को डर होता है की पहली मीटिंग में ही गर्लफ्रेंड या सुहागरात पर बीवी के सामने बेइज्जती न हो जाए। क्योंकि सभी को पता है फर्स्ट इम्प्रेशन इज द लास्ट इम्प्रेशन ! चूँकि, एक महिला को सेक्स से संतुष्ट करने के लिए सिर्फ शरीर में ही नहीं बल्कि लिंग में दम होना आवश्यक होता है, परन्तु इन समस्याओं की वजह से ज्यादात्तर पुरुष इसमें नाकाम है-</p>
                    <div className="text-3xl sm:text-[5vw] font-extrabold text-center my-5 sm:mt-[4vw] ">
                        <h1 className=""><span className="text-[#00ffcd]">"समस्याएं" </span> जिनकी वजह से</h1>
                        <h1 className="">लगता है <span className="bg-[#f4f201] text-black inline-block pt-[3.5vw] sm:pb-[1vw] sm:my-[2vw]">"नामर्दी"</span> का टैग</h1>
                    </div>
                    <div className="grid grid-cols-2 gap-x-[3vw] gap-y-[3vw] -mx-1 text-black font-bold text-[1.05rem] sm:text-xl md:text-2xl lg:text-3xl">
                        {list1.map((e, key) => {
                            return <div className="bg-white sm:p-2 rounded-lg" key={key}>
                                <img src={e.image} alt="pic" className=" rounded-lg" loading='lazy' width='100%' height='100%' />
                                <p className="mt-3 px-1 sm:mt-5"><span className="text-red-700">{e.title}</span> {e.para}</p>
                            </div>
                        })}
                    </div>
                    <div className="sm:pt-5">
                        <FormRedirect />
                    </div>
                </div>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/7f078560-b13e-47d1-7bd8-8ae10153e400/public" alt="bg1" width='100%' height='100%' fetchPriority='high' loading='lazy' className='absolute top-0 left-0 h-full w-full' />

            </div>

        </div>
    )
}
export default Section1;