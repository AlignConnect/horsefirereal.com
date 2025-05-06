
function WhyChoose() {

    const list6 = [
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/36121192-2809-4f35-18d2-ce2a45e1f000/public',
            name: 'कम टेस्टोस्टेरोन हॉर्मोन स्तर',
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/cdd34eef-37c2-42f8-9438-44408182b100/public',
            name: 'टेस्टोस्टेरोन का उच्चतम स्तर',
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e807ad47-a5a1-44c0-1dee-51c354d2be00/public',
            name: 'कमजोर नसें, छोटा और ढीला लिंग',
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/51e3d788-733f-4589-8da3-9bc840486600/public',
            name: 'मजबूत नसों के साथ फौलादी लिंग',
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/2fc546c3-cce7-4ab6-ad6b-a79623f49200/public',
            name: 'अधिकतम 2 मिनट सेक्स या कुछ झटको में स्खलन',
        },
        {
            image: 'https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/7b14f60f-d307-4ebc-a0ec-dcb7ece93f00/public',
            name: 'कम से कम 30-45 मिनट लगातार सेक्स',
        },


    ]

    return (
        <div className='bg-black px-3 text-center py-5 sm:pt-10 sm:pb-5'>

            <h1 className=" sm:w-11/12 mx-auto text-white  text-2xl sm:text-5xl font-bold !leading-tight">Horse Fire Tablet के अद्भुत लाभ जो ग्राहक अनुभव करते है !</h1>
            <div className=" ">

                <div className=" grid grid-cols-2 px-0 sm:px-5 text-[1.2rem] sm:text-3xl gap-y-4 sm:gap-y-5 font-bold mt-3 sm:mt-5">
                    {list6.map((e, key) => {
                        return <div className={`bg-[#d8d8d8] ${key % 2 == 0 ? 'rounded-l-xl' : 'rounded-r-xl'} px-3 py-4 sm:p-5`} key={key}>
                            <img src={e.image} alt="pic" className="" width='100%' height='100%' loading='lazy' />
                            <p className="mt-3 px-2 sm:px-0">{e.name}</p>
                        </div>
                    })}
                </div>
            </div>

            <div className="text-center text-white font-bold mt-3 sm:mt-5 fontPoppins">
                    <a href="#form" className="inline-block text-xl bg-gradient-to-t from-red-500 to-red-700 px-1 rounded-full py-3 pop_imagehfv">
                        <span className=" bg-gradient-to-b from-red-500 to-red-700 px-5 rounded-full py-2">ORDER NOW</span>
                    </a>
                </div>
        </div>

    )
}

export default WhyChoose