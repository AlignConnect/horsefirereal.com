
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 2,
        //         }
        //     },
        // ]
    };


    const list1 = [
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0a9d1839-6671-40d2-683f-2e5721f78c00/public',
            title: 'सेक्स टाइमिंग',
            para: '2 मिनट या इससे कम समय में वीर्यपात से'
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/294878d9-c1f9-4b9d-666f-0b3db0e8a400/public',
            title: 'नपुंसकता',
            para: 'लिंग में ढीलापन, पतला या छोटा साइज से'
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/6e55c516-068d-444a-dd37-df48ed9ec100/public',
            title: 'स्टैमिना & एनर्जी',
            para: 'स्ट्रेंथ, स्टैमिना और ऊर्जा की कमी से'
        }
    ]

    return (

        <div className=" w-full py-5 md:py-10 px-3 relative">

            <div className="relative z-10 max-w-7xl mx-auto px-5 text-center">
                <h1 className="text-yellow-400 font-extrabold text-3xl md:text-4xl lg:text-5xl">क्या आप भी परेशान हैं </h1>
                <div className="">
                    <Slider {...settings} >
                        {
                            list1.map((e, key) => {
                                return <div className="pt-3 px-3" key={key}>
                                    <img src={e.image} alt="pic" className="sm:w-1/2 mx-auto outline-offset-4 outline-white outline-dashed rounded-lg sm:rounded-3xl" width='100%' height='100%' loading="lazy"/>
                                    <p className="text-3xl sm:text-4xl lg:text-6xl mt-5 sm:mt-8 text-white font-extrabold">{e.title}</p>
                                    <p className="text-[yellow]">{e.para}</p>
                                </div>
                            })
                        }
                    </Slider>
                </div>
            </div>

            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/505da454-e184-48e2-d98e-fccc1e640900/public" alt="img11" className="absolute top-0 left-0 h-full" width='100%' height='100%' />
        </div>
    )
}
export default Section2;