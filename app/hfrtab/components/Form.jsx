"use client";
import { useGlobalContext } from "@/app/statemanage/context";
import { CustomerDataValidator, CustomerDataValue } from "@/app/commonUse/FormDataValidation";
import axios from 'axios';
import { useSearchParams } from "next/navigation";
import { MdOutlineSupportAgent } from "react-icons/md";
import dynamic from "next/dynamic";
import { Noto_Serif_Devanagari } from "next/font/google";

const Load = dynamic(() => import("@/app/commonUse/loader/FormLoader"), {
    loading: () => <p>df</p>
});

const noto = Noto_Serif_Devanagari({
    subsets: ['devanagari'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const Form = () => {

    const benifits = (arr) => {
        return arr?.map((e, key) => {
            return <div className='flex items-center gap-2 ' key={key}>
                <img src="https://imagedelivery.net/aacnHGAqlUDhaplA3bnkbA/79244e21-64e1-4136-7ed1-a91e0d9ea100/public" className='md:w-10 w-5 py-1' alt='icon' />
                <div className='fontNoto font-extrabold md:text-xl sm:text-md text-lg  text-black pt-2 '>{e.content}</div>
            </div >

        })
    }


    const searchParams = useSearchParams();

    const { CustomerData, setCustomerData, checkoutDetail, setLoading, loading } = useGlobalContext();

    const handleChange = async (e) => {
        setCustomerData({ ...CustomerData, [e.target.name]: e.target.value })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const getCustomData = CustomerDataValidator.JoiValidator(CustomerData);

            let check = await axios.get('https://api.ipify.org?format=json').then(response => {
                return response.data.ip
            }).catch(error => console.log(error))
            const formdata = new FormData();

            formdata.append("name", getCustomData.name)
            formdata.append("phone", getCustomData.phone)
            formdata.append("address", getCustomData.address)
            formdata.append("post", "Horsefirereal.com/HFRTAB")
            formdata.append("ip", check ? check : "")
            formdata.append("checkout_toogle", checkoutDetail.checkoutChecked)
            formdata.append("blog_url", process.env.NEXT_APP_URL_HFRTAB ?? "horsefirereal.com/hfrtab")

            // let tracker = searchParams.get("krt-tracker");
            const searchParamss_krt = searchParams.get("krt");
            const searchParamss_krttracker = searchParams.get("krttracker");

            searchParamss_krttracker && formdata.append('conversions_tracking', searchParamss_krttracker);
            searchParamss_krt && formdata.append("conversions", searchParamss_krt);

            try {
                const form = await fetch(`https://horsefirereal.com/submitdata.php`, { body: formdata, method: "POST" })
                const data = await form.json()

                const blogWebId = data.blogWebId ?? null;
                if (data.ok) {
                    setLoading(false)
                    let destination = decodeURI(data.destination)
                    let name = destination.split("?name=")[1].split("&")[0]
                    let phone = destination.split("&phone=")[1].split("&")[0]
                    return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=${name}&phone=${phone}`
                }
                setLoading(false)
                return window.location.href = `${checkoutDetail.checkoutUrl}?source=${blogWebId}&name=&phone=`
            } catch (err) {
                setLoading(false)
                return window.location.href = checkoutDetail.checkoutUrl;
            }
        } catch (error) {
            setLoading(false)
            return alert(error);
        }

    }

    return (
        <div id="form" className={noto.className}>

            {
                loading && <Load />
            }

            <div className="bg_primium">
                <div className='bg-black'>
                    <div className='w-full max-w-6xl mx-auto'>
                        <div className="pt-2 pb-1 flex " >
                            <div className='fontNoto flex gap-1 items-center font-semibold text-md md:text-xl px-2 text-yellow-300'>
                                सूचना:
                            </div>
                            <marquee className='fontNoto text-md md:text-xl text-white' direction="left">हॉर्सफायर के बढ़ते लोकप्रियता को देखते हुए आजकल मार्केट में नकली प्रोडक्ट आ गए है तो ध्यानपूर्वक <span className="fontPoppins text-red-600 font-extrabold">AR Ayurveda</span> ब्रांड देखकर ही आर्डर करें!</marquee >
                        </div>
                    </div>
                </div>
                <div className="max-w-6xl mx-auto py-6 md:py-16 px-3">



                    <h1 className="text-2xl md:text-[3rem] text-black text-center font-extrabold fontNoto mb-2 md:mb-6 py-2">कॉल पर विशेषज्ञ डॉक्टरों से मुफ्त सलाह के लिए फॉर्म भरें!</h1>
                    <div className="grid grid-cols-12 m-0 gap-6 items-center ">
                        <div className="col-span-12 md:col-span-6 text-white  ">
                            <div className=" font-bold text-[1.1rem] md:text-[1.4rem] fontNoto text-gray-800">
                                आप भी अपनी सेक्स लाइफ को हसीन बनाने के इस सुनहरे अवसर को हाथ से जाने ना दें और जल्द से जल्द <strong className="fontJosefin uppercase text-red-600">Horsefire Tablet</strong> का सेवन शुरू कर दें।
                            </div>

                            <hr className="sm:my-5 my-3" />

                            <div className="px-2 text-left">
                                {
                                    benifits([
                                        {
                                            content: "100% मनी बैक गारंटी "
                                        },
                                        {
                                            content: "97.6% सफलता दर"
                                        },
                                        {
                                            content: "COD पेमेंट उपलब्ध  "
                                        },
                                        {
                                            content: "सभी लैब टेस्टिंग में सफल"
                                        }
                                    ])
                                }
                            </div>

                        </div>
                        <div className="col-span-12 md:col-span-6 " id='form'>
                            <div className=" " id='formcallhide'>
                                <div className="mx-auto font-poppin box_shaddow  form_shaddow bg-white px-3 py-8  rounded-md ">
                                    <div>
                                        <div className="text-center mb-8">
                                            <h1 className="text-center text-4xl fontJosefin  font-bold inline-block border-b-2"> Contact Us </h1>
                                        </div>
                                        <form className="space-y-3">
                                            {CustomerDataValue?.map((data, key) => {
                                                return <div className="flex flex-col my-6" key={key}>
                                                    <label className="fontPoppins text-sm py-1">{data.label}</label>
                                                    <div className="relative">
                                                        <input {...data.inputValue} className={`p-1 py-3 border border-solid border-black w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 ${data.icon ? 'pl-[3.5rem]' : ''}`} onChange={handleChange} value={CustomerData[data.inputValue.name]} />
                                                        {data.icon && <span className="absolute ransform translate-x-[-50%] translate-y-[-50%] top-1/2 left-5 border-r border-black px-2">{data.icon}</span>}
                                                    </div>
                                                </div>
                                            })}
                                            <div className="flex justify-center items-center pt-4 ">
                                                <button onClick={handleFormSubmit} type="button" className="bg-orange-700  text-xl font-bold p-3 pt-3 md:w-72 w-full rounded-md hover:bg-orange-600 transition-colors text-white">
                                                    SUBMIT
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Form;
