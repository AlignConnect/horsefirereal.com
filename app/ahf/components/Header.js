import Image from "next/image"
import './Home.css'

function Header() {
    return (
        <section className="w-full relative">
            <div className="w-full  relative z-10">
                <div className="grid md:grid-cols-12 items-center">
                    <div className="grid justify-center col-span-6 flex-col py-4">
                        <div className="fontPoppins text-6xl md:text-8xl font-black flex">
                            HORSE FIRE
                        </div>
                        <div className="fontKalnia text-3xl md:text-4xl tracking-[.25em] flex justify-center md:justify-normal font-black">
                            TABLETS
                        </div>
                        <div className="fontNoto text-3xl md:text-5xl py-5 font-semibold text-center md:text-left">
                            अंग-अंग में दौड़े सेक्स की तरंग
                        </div>

                        <div className="my-2">
                            <div className="md:inline-block text-center" >
                                <a className="bg-[#213361] text-md md:text-3xl  font-bold fontPoppins py-2 px-8 w-full rounded-full hover:bg-[#1e2f5a] shadow-lg shadow-[#213361]/50 transition-colors text-white" href='#form'>
                                    ORDER NOW
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-6">
                        <img
                            className='w-full h-full py-3 pl-5'
                            src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/71d2f252-7423-4998-0e88-149d96739b00/public"
                            alt='horsefire_tablet'
                        />
                    </div>
                </div>
            </div>
            <Image className="hidden md:block" src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ef41bdcf-28f4-4fec-a0bb-a85525251600/public' fill alt="background" loading="eager" priority />
            <Image className="block md:hidden" src='https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/186301a3-6e25-4f02-96c5-280cfde8fd00/public' fill alt="background_mobile" loading="eager" priority />

        </section>
    )
}

export default Header;