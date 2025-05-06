import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});




function Header() {
    return (<section>
        <div className='relative'>
            <div className='relative min-[500px]'>
                <img
                    className='w-[100%] h-[100%] md:block hidden'
                    src={"/main/hfkt_images/winter_desk_img.jpg"}
                    alt='winter_desk_img'
                    fetchPriority='high'
                />
                <img
                    className='w-[100%] h-[100%] md:hidden block'
                    src={"/main/hfkt_images/winter_mobile_img.jpg"}
                    alt='winter_mobile_img'
                    fetchPriority='high'
                />
                <div className={`${poppins.className} 
                absolute top-12 md:top-52 text-center md:text-start md:left-44 w-full md:w-1/2 z-0 md:text-6xl text-2xl text-[#fccf04] font-extrabold md:leading-[5rem]`}
                    style={{ textShadow: "0.6px 2.7px 2px rgba(66, 68, 90, 1)" }}>
                    इस सर्दी सेक्स अवधि और लिंग<br /> बढ़ाकर लें सेक्स का असली मजा
                </div>
                <div className={`${poppins.className}  
                absolute  top-32 md:top-96 md:left-44 left-20 w-1/2 md:w-1/4
                 inline-block text-white md:text-3xl text-xl text-center font-semibold border-solid border-2 border-white rounded-lg py-1`}>
                    Know More
                </div>
            </div>

        </div>

    </section>
    )
}

export default Header;