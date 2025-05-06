import dynamic from 'next/dynamic';

const FormRedirect = dynamic(() => import('./FormRedirect'), {
    loading: () => <p>load</p>
});



const Section4 = () => {




    return (
        <div className='w-full'>
            <div className=" px-3 py-5 sm:py-10">

                <div className="grid grid-cols-2 items-center text-center text-white text-[1.6rem] sm:text-4xl font-extrabold">
                    <p className="bg-black pt-2 sm:pt-5 sm:pb-2 ">पहली बार मिली</p>
                    <p className="bg-red-500 pt-2 sm:pt-5 sm:pb-2">सेक्स में संतुष्टि</p>
                </div>

                <p className="my-5">
                    डिनर के बाद बेड पर जाते ही दोनों एक-दूसरे पर टूट पड़े। मात्र एक सप्ताह में ही पहली बार हमारा सेक्स नॉनस्टॉप 15 मिनट से ज्यादा चला था। मैं अंदर ही अंदर ख़ुशी महसूस कर रही थी, क्योंकि ये तो बस शुरुआत थी। इसके बाद दिन प्रति दिन उनके प्रदर्शन में बृद्धि होने लगी।
                </p>

                <img src="/main/hfbulge_images/08.webp" alt="img11" width='100%' height='100%' loading='lazy' className='my-5' />
                <div className="my-5">
                <FormRedirect />

                </div>


                <p className="">मेरे पति भी इस अविश्वसनीय प्रभाव से हैरान थे। मात्र 15 दिनों में उनका लिंग लम्बा और मोटा भी दिखने लगा था, सेक्स अवधि में भी जोरदार वृद्धि हो गयी। अगले सेक्स में उन्होंने मुझे 4 बार झाड़ दिए, फिर भी उनका लिंग और चोदने के लिए तैयार था। अब उनका लिंग मजबूत हो गया है। हर शॉट में मेरी चीख निकल जाती है पर मुझे वो मजा मिलता है जो मैं हमेशा से चाहती थी।</p>

            </div>
        </div>

    )
}
export default Section4;