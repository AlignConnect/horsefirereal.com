
import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
  subsets: ['devanagari'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const Header = () => {
    return (
        <section className={noto.className}>
            <section className="w-full md:w-[600px] mx-auto">
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/e0d28d3e-2acb-4b62-9676-677fd5d69200/public" alt="asd" loading='eager' fetchPriority="high" className="w-full" />

                <div className="grid grid-cols-12 gap-5 p-5 items-center text-center">
                    <div className="col-span-12 md:col-span-4">
                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/de1dcf2d-5ca0-4d38-f90a-07d0c41f8800/public" alt="notfoundthisurl" loading="lazy" className="w-[60%] md:w-[80%] mx-auto" />
                        </div>
                        <p className="md:text-xl text-2xl pt-3">टेस्टोस्टेरोन का स्तर बढाए</p>
                    </div>


                    <div className="col-span-12 md:col-span-4">
                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/b98e73ac-9d1a-4b27-458c-c2df64aa0000/public" alt="notfoundthisurl" loading="lazy" className="w-[60%] md:w-[80%] mx-auto" />
                        </div>
                        <p className="md:text-xl text-2xl pt-3">लिंग बड़ा व सख्त बनाए</p>
                    </div>


                    <div className="col-span-12 md:col-span-4">
                        <div>
                            <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/ad6fb24e-27be-44de-64a5-17f49c507d00/public" alt="notfoundthisurl" loading="lazy" className="w-[60%] md:w-[80%] mx-auto" />
                        </div>
                        <p className="md:text-xl text-2xl pt-3">जोश जगाए, अवधि बढाए </p>
                    </div>

                </div>

            </section>
        </section>
    )
}

export default Header