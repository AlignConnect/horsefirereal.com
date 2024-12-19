import dynamic from "next/dynamic";
import { Noto_Serif_Devanagari } from "next/font/google";

const noto = Noto_Serif_Devanagari({
  subsets: ['devanagari'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const First = dynamic(() => import('./Precomponent/First'), {
  loading: () => <p>loader</p>
})

const Section1 = () => {
  return (
    <div className={noto.className}>

      <section className="md:bg-web1 bg-mobile1 md:h-screen bg-cover bg-center md:bg-right bg-no-repeat">
        <div className="text-center block md:hidden">
          <h1 className={` md:text-3xl py-3 text-xl font-medium`}>
            INDIA'S Top Selling Product
          </h1>
          <h1 className="md:text-[7rem] text-5xl  text-red-600 font-black uppercase">
            horse fire <br /> <span className="text-black"> tablet </span>
          </h1>
        </div>

        <First />


      </section>
    </div>
  );
};

export default Section1;
