function Benifits() {

    const Benefits = (arr) => {
        return arr?.map((e, key) => {
            return <div key={key}>
                <img src={e.benefit_icon} className='mx-auto md:w-36 w-20 ' alt='Benifits_images' loading="lazy" />
                <div className='fontNoto pt-2 md:text-2xl text-md font-semibold text-center text-white'>{e.benefit_title}</div>
            </div >
        })
    }

    return (
        <div className="bg-black py-4">
            <div className="w-full max-w-7xl text-center mx-auto ">
                <div className=''>
                    <div className="fontNoto text-center text-[1.1rem] md:text-3xl px-2 py-1 text-white font-semibold italic">इसे आजमाएं, फौलादी लिंग और लम्बी सेक्स अवधि पाएं</div>
                    <div className='grid grid-cols-3 gap-2 '>
                        {
                            Benefits([
                                {
                                    benefit_icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/0008cb23-051c-443a-aa46-e2a94c02ec00/public",
                                    benefit_title: "बड़ा फौलादी लिंग"
                                },
                                {
                                    benefit_icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/47f8608b-5682-48dd-c7e5-b81bde064700/public",
                                    benefit_title: "लम्बी सेक्स अवधि"
                                },
                                {
                                    benefit_icon: "https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/a69dc031-4a22-4738-eb23-9b2fb8bf3900/public",
                                    benefit_title: "ज्यादा यौन आनंद "
                                }
                            ])
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benifits;