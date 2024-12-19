import Image from "next/image";

const Section4 = () => {
    return (
        <section className=' w-full'>
            <div className="relative fontPoppins text-white">
                <div className="relative z-10 max-w-6xl mx-auto px-3 py-5">
                    <h1 className="text-xl md:text-4xl text-center font-semibold !leading-normal">
                        अगर आपको ये सब चाहिए तो आजमाए <span style={{ color: "yellow" }}>"Horse Fire Tablet"</span> और अपने सेक्स प्रदर्शन में पाए अद्भुत वृद्धि।
                    </h1>
                </div>
                <Image src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b8ed6bcc-3a95-43e9-46f1-dc1a4c94dc00/public' fill className="w-full absolute top-0" />
            </div>
            <div className="w-full bg-black">
                <div className="max-w-6xl mx-auto">
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/91ad9380-eb4f-40bf-3542-d1d7428c4400/public" alt="pic" className="w-full h-full  md:block hidden" loading="lazy" />
                    <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/f30c68d4-3606-49bd-a3aa-daba5dc87900/public" alt="pic" className="w-full h-full block md:hidden" loading="lazy" />
                </div>
            </div>
        </section>
    )
}
export default Section4;