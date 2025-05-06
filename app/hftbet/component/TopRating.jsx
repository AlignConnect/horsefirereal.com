import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const TopRating = () => {
    return (
        <section className={noto.className}>

            <div className="w-full md:w-[650px] mx-auto">
                <div className='flex justify-center items-center w-full px-4 py-2 gap-3 bg-[#f0f0f0]'>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/d437f207-083a-425a-9760-752884cb8b00/public" alt="dasdas" loading='lazy' className='w-[20%] md:w-[80px]' />
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/06b792b7-65ec-44f4-4df4-1b5834940d00/public" alt="dasdas" loading='lazy' className='w-[70%] md:w-[300px]' />
                </div>

                <div className="m-3 bg-[#305d84]">
                    <p className="text-3xl text-white pt-5 px-4 pb-2 text-center">
                        <span className="text-[#e4e20f]">ये उपाय अपनाएंगे तो</span>  गारंटीड सुधर जाएगी सेक्सुअल लाइफ
                    </p>
                </div>

                <div className="w-full min-h-[250px]">
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/eaf8c480-05ae-4863-4641-53c621f67400/public" alt="sdad" className="w-full" loading="lazy" />
                </div>


                <div className="text-2xl md:text-3xl font-semibold p-1">
                    <p className="text-red-500 italic py-2">
                        पुरुष का सबसे प्रसिद्ध अंग "लिंग" है जिस पर सबसे ज्यादा स्टडी की गई है। दुनिया भर में की गई सैकड़ो रिसर्च में
                        <span className="text-black">
                            &nbsp;पुरुषों के लिए अहम जानकारियां जुटायी गयी है, जो हर पुरुष को जानना चाहिए !
                        </span>
                    </p>
                </div>


            </div>

        </section>
    )
}

export default TopRating