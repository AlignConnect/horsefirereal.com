import dynamic from 'next/dynamic';
import { Poppins } from 'next/font/google';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const FormRedirect = dynamic(() => import('./FormRedirect'), {
    loading: () => <p>load</p>
});

const YoutubeFrame = dynamic(() => import('./YoutubeFrame'), {
    loading: () => <p>load</p>
});

const poppin = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});




const Section2 = () => {

    var settings = {
        dots: false,
        speed: 1000,
        initialSlide: 0,
        infinite: true,
        className: "center",
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        arrows:false

        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 2,
        //         }
        //     },
        // ]
    };

    return (
        <div className="">
            <div className=" relative">
                <div className=" relative z-10 py-5 sm:py-10 px-3 fontArya">
                    <div className="text-4xl sm:text-5xl text-center ">
                        <p className={`font-bold  `}>जब मिला <span className="text-red-600">हॉर्सफायर</span>,</p><p className='text-[#0b7700]'>रोमांचक हो गयी लाइफ </p>
                    </div>

                    <div className="grid sm:grid-cols-2 mt-5 mb-3 sm:my-5 sm:mt-10 sm:mb-5  text-[1.43rem] sm:text-4xl !leading-normal">
                        <div className="">
                            <img src="/main/hfbulge_images/06.webp" alt="img11" width='100%' height='100%' loading='lazy' />

                        </div>
                        <div className="">
                            <p className="text-center sm:text-left  mt-3 sm:mt-0">मैंने हार नहीं मानी और बेस्ट की तलाश जारी रखी और आखिर वो दिन आ ही गया ! जब पहली बार मुझे <span className="text-red-600">"हॉर्सफायर टेबलेट"</span> के बारे में पता चला।</p>
                        </div>
                    </div>

                    <p className="text-xl sm:text-2xl">मैं यूट्यूब पर दवा के बारे में पता कर रही थी तब मुझे हॉर्सफायर टेबलेट का वीडियो मिला जिसे यौन रोग विशेषज्ञ डॉक्टर्स द्वारा रेकमेंडेड किया जा रहा था। मैंने इसके बारे में पता किया। इसके रिव्यूज और एड में किये गए दावों को देखकर मैं संतुष्ट हो गयी और आर्डर कर दी। </p>
                </div>
                <img src="/main/hfbulge_images/05.webp" alt="img11" className="absolute top-0 left-0 h-full" width='100%' height='100%' loading='lazy' />
            </div>
            <FormRedirect />


            <div className="py-5 ">
                <Slider {...settings} >
                    <div className="px-3">

                        <div className="p-3  border border-red-500 rounded-xl border-dashed">
                            <YoutubeFrame vid={'rf51nF8mlb0?si=SmdRcDwRoRSTFqE2'} />
                        </div>
                    </div>
                    <div className="px-3">
                        <div className="p-3  border border-red-500 rounded-xl border-dashed">
                            <YoutubeFrame vid={'I7RqbSjlptY?si=X6BPFP71Z6gWvUdV'} />
                        </div>
                    </div>

                </Slider>
            </div>

        </div>
    )
}
export default Section2;