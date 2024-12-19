import dynamic from 'next/dynamic';

const FormRedirect = dynamic(() => import('./FormRedirect'), {
    loading: () => <p>load</p>
});

const Section5 = () => {

    return (
        <div className='w-full relative bg-[#ececec]'>
            <div className=" max-w-5xl mx-auto px-3 py-7 sm:py-14">

                <div className="bg-white px-3 sm:px-10 md:px-20 py-3 sm:py-10 rounded-3xl">
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/63e4be5f-6452-4c6d-0e19-8adfb6761000/public" alt="img11" className="" width='100%' height='100%' loading='lazy' />
                </div>
                <div className=" max-w-3xl mx-auto">

                    <p className="text-xl sm:text-2xl md:text-[3.3rem] font-extrabold py-5 sm:my-10 !leading-snug text-center">सोचना छोड़े ! दिन की सुने, सर्वश्रेष्ठ चुने और खुशहाली भरे सेक्स लाइफ की तरफ कदम बढ़ाये।</p>
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1b66ec07-658b-4ee6-9feb-b17dbfc55a00/public" alt="img11" className="" width='100%' height='100%' loading='lazy' />
                </div>
                <div className="bg-white px-5 md:px-20 py-5 sm:py-10 rounded-3xl grid sm:grid-cols-12 mt-5 sm:mt-[3vw] items-center">
                    <p className="sm:col-span-9 font-extrabold">
                        Horse fire Tablet यकीनन वेल रिसर्चड फार्मूलेशन है जो पुरुष कल्याण के लिए प्रतिबद्ध हैं।
                    </p>
                    <div className="sm:col-span-3 text-center">
                        <a href="#form" className="bg-[#fee71f] px-5 sm:px-5 py-3 fontPoppins inline-block rounded-full">Learn More</a>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Section5