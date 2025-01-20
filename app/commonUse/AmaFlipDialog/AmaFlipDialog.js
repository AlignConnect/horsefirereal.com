import { useGlobalContext } from "@/app/statemanage/context";
import './Ama.css';


const AmaFlipDialog = ({ flipcartlink, type }) => {
    const { isPopupOpen, closePopup } = useGlobalContext();

    const getflipkartlink = flipcartlink ?? "https://flipkart.la/3uNckM5"

    return (
        <div>

            {isPopupOpen && (
                <div className="overlay">
                    <div className="bg-[white] p-2 rounded-xl w-[95%] md:w-[500px] ">


                        <section className="text-end p-3" style={{ fontFamily: "sans-serif" }}>
                            <button className="text-xl text-black" onClick={() => {
                                closePopup();
                                // window.location.href = type == "ts" ? "https://flipkart.la/3U8RSQi" : 'https://flipkart.la/489K5Wg';
                                window.location.href = "https://arayurveda.shop/products/horse-fire-tablets";
                                
                            }}>
                                X
                            </button>


                            <div className='text-center'>

                                <section className="w-full py-2">
                                    <a href={getflipkartlink} style={{ textDecoration: 'none' }}><img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/87383624-e24f-4d1c-c588-52ac0c861300/public" alt="no" className="w-full" /></a>
                                </section>

                                <section className="p-2 bg-[white] text-center font-bold border border-white rounded-[5px] mx-2 flex justify-center items-center gap-2" >
                                    <div className='w-[3rem] md:w-[5rem]'  >
                                        <img src="/common_images/secure.png" alt="no" className="w-full" />
                                    </div>

                                    <div className='text-md'>
                                        Buy from Trusted Website
                                    </div>


                                </section>





                                <div className='text-lg' >
                                    Flipkart से खरीदने के लिए निचे क्लिक करें
                                </div>


                                <div className="grid justify-center my-1">
                                    <div className="flex items-center gap-2">
                                        <div className="fingImg11">
                                            <img src="/common_images/fingure.png" alt="" width={'100%'} />
                                        </div>

                                        <div className="AmaFlipPop" style={{ paddingTop: '-0.5rem' }}>
                                            <a href={getflipkartlink} style={{ textDecoration: 'none' }}><img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/1369a0a5-d191-4392-bf47-5c170ecb8600/public" className='OrderNowPopAmaFlip' alt="pic" style={{ width: '75%' }} /></a>
                                        </div>


                                        <div className="fingImg">
                                            <img src="/common_images/fingure.png" alt="" width={'100%'} />
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-[#ffa800] py-4 -mx-1 px-1 my-4 rounded-md text-center font-bold text-md'>आपकी यौन समस्या का 100% गारंटीड इलाज</div>

                            </div>

                        </section>
                    </div>
                </div>
            )}



        </div>
    )
}

export default AmaFlipDialog;